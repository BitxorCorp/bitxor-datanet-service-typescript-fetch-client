"use strict";
/* tslint:disable */
/* eslint-disable */
/*
 * Bitxor DataNet Service API Documentation
 *
 * The version of the OpenAPI document: 1.1.3
 *
 * MIT License
 *
 * Copyright 2022 Bitxor Community
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClientUtils = exports.RestClientCallError = exports.TextApiResponse = exports.BlobApiResponse = exports.VoidApiResponse = exports.JSONApiResponse = exports.canConsumeForm = exports.mapValues = exports.querystring = exports.exists = exports.Configuration = exports.COLLECTION_FORMATS = exports.RequiredError = exports.BaseAPI = exports.BASE_PATH = void 0;
exports.BASE_PATH = "https://testnet.bitxor.network".replace(/\/+$/, "");
const isBlob = (value) => typeof Blob !== 'undefined' && value instanceof Blob;
/**
 * This is the base class for all generated API classes.
 */
class BaseAPI {
    constructor(configuration = new Configuration()) {
        this.configuration = configuration;
        this.fetchApi = (url, init) => __awaiter(this, void 0, void 0, function* () {
            let fetchParams = { url, init };
            for (const middleware of this.middleware) {
                if (middleware.pre) {
                    fetchParams = (yield middleware.pre(Object.assign({ fetch: this.fetchApi }, fetchParams))) || fetchParams;
                }
            }
            let response = yield (this.configuration.fetchApi || fetch)(fetchParams.url, fetchParams.init);
            for (const middleware of this.middleware) {
                if (middleware.post) {
                    response = (yield middleware.post({
                        fetch: this.fetchApi,
                        url: fetchParams.url,
                        init: fetchParams.init,
                        response: response.clone(),
                    })) || response;
                }
            }
            return response;
        });
        this.middleware = configuration.middleware;
    }
    withMiddleware(...middlewares) {
        const next = this.clone();
        next.middleware = next.middleware.concat(...middlewares);
        return next;
    }
    withPreMiddleware(...preMiddlewares) {
        const middlewares = preMiddlewares.map((pre) => ({ pre }));
        return this.withMiddleware(...middlewares);
    }
    withPostMiddleware(...postMiddlewares) {
        const middlewares = postMiddlewares.map((post) => ({ post }));
        return this.withMiddleware(...middlewares);
    }
    request(context, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const { url, init } = this.createFetchParams(context, initOverrides);
            const response = yield this.fetchApi(url, init);
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            throw yield RestClientUtils.getErrorFromFetchResponse(response);
        });
    }
    createFetchParams(context, initOverrides) {
        let url = this.configuration.basePath + context.path;
        if (context.query !== undefined && Object.keys(context.query).length !== 0) {
            // only add the querystring to the URL if there are query parameters.
            // this is done to avoid urls ending with a "?" character which buggy webservers
            // do not handle correctly sometimes.
            url += '?' + this.configuration.queryParamsStringify(context.query);
        }
        const body = ((typeof FormData !== "undefined" && context.body instanceof FormData) || context.body instanceof URLSearchParams || isBlob(context.body))
            ? context.body
            : JSON.stringify(context.body);
        const headers = Object.assign({}, this.configuration.headers, context.headers);
        const init = Object.assign({ method: context.method, headers: headers, body, credentials: this.configuration.credentials }, initOverrides);
        return { url, init };
    }
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    clone() {
        const constructor = this.constructor;
        const next = new constructor(this.configuration);
        next.middleware = this.middleware.slice();
        return next;
    }
}
exports.BaseAPI = BaseAPI;
;
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
class Configuration {
    constructor(configuration = {}) {
        this.configuration = configuration;
    }
    get basePath() {
        return this.configuration.basePath != null ? this.configuration.basePath : exports.BASE_PATH;
    }
    get fetchApi() {
        return this.configuration.fetchApi;
    }
    get middleware() {
        return this.configuration.middleware || [];
    }
    get queryParamsStringify() {
        return this.configuration.queryParamsStringify || querystring;
    }
    get username() {
        return this.configuration.username;
    }
    get password() {
        return this.configuration.password;
    }
    get apiKey() {
        const apiKey = this.configuration.apiKey;
        if (apiKey) {
            return typeof apiKey === 'function' ? apiKey : () => apiKey;
        }
        return undefined;
    }
    get accessToken() {
        const accessToken = this.configuration.accessToken;
        if (accessToken) {
            return typeof accessToken === 'function' ? accessToken : () => __awaiter(this, void 0, void 0, function* () { return accessToken; });
        }
        return undefined;
    }
    get headers() {
        return this.configuration.headers;
    }
    get credentials() {
        return this.configuration.credentials;
    }
}
exports.Configuration = Configuration;
function exists(json, key) {
    const value = json[key];
    return value !== null && value !== undefined;
}
exports.exists = exists;
function querystring(params, prefix = '') {
    return Object.keys(params)
        .map((key) => {
        const fullKey = prefix + (prefix.length ? `[${key}]` : key);
        const value = params[key];
        if (value instanceof Array) {
            const multiValue = value.map(singleValue => encodeURIComponent(String(singleValue)))
                .join(`&${encodeURIComponent(fullKey)}=`);
            return `${encodeURIComponent(fullKey)}=${multiValue}`;
        }
        if (value instanceof Date) {
            return `${encodeURIComponent(fullKey)}=${encodeURIComponent(value.toISOString())}`;
        }
        if (value instanceof Object) {
            return querystring(value, fullKey);
        }
        return `${encodeURIComponent(fullKey)}=${encodeURIComponent(String(value))}`;
    })
        .filter(part => part.length > 0)
        .join('&');
}
exports.querystring = querystring;
function mapValues(data, fn) {
    return Object.keys(data).reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: fn(data[key]) })), {});
}
exports.mapValues = mapValues;
function canConsumeForm(consumes) {
    for (const consume of consumes) {
        if ('multipart/form-data' === consume.contentType) {
            return true;
        }
    }
    return false;
}
exports.canConsumeForm = canConsumeForm;
class JSONApiResponse {
    constructor(raw, transformer = (jsonValue) => jsonValue) {
        this.raw = raw;
        this.transformer = transformer;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.transformer(yield this.raw.json());
        });
    }
}
exports.JSONApiResponse = JSONApiResponse;
class VoidApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
}
exports.VoidApiResponse = VoidApiResponse;
class BlobApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.raw.blob();
        });
    }
    ;
}
exports.BlobApiResponse = BlobApiResponse;
class TextApiResponse {
    constructor(raw) {
        this.raw = raw;
    }
    value() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.raw.text();
        });
    }
    ;
}
exports.TextApiResponse = TextApiResponse;
/** CUSTOM STARTS HERE! **/
/**
 * When the rest client raises an error, the Error's message would be a json string of this format:
 */
class RestClientCallError extends Error {
    constructor(message, statusCode, statusMessage, body) {
        super(message);
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.body = body;
    }
}
exports.RestClientCallError = RestClientCallError;
class RestClientUtils {
    static getErrorFromFetchResponse(error) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusCode = (error === null || error === void 0 ? void 0 : error.status) || 0;
            const statusMessage = ((error === null || error === void 0 ? void 0 : error.statusText) || 'Unknown Error').toString();
            const body = (error.text && typeof error.text === 'function' && (yield error.text())) || '';
            const getMessage = () => {
                var _a;
                const defaultMessage = `${statusCode} - ${statusMessage}`;
                try {
                    return ((_a = JSON.parse(body)) === null || _a === void 0 ? void 0 : _a.message) || defaultMessage;
                }
                catch (e) {
                    return defaultMessage;
                }
            };
            const message = getMessage();
            return new RestClientCallError(message, statusCode, statusMessage, body);
        });
    }
}
exports.RestClientUtils = RestClientUtils;
