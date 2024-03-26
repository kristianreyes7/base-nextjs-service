"use strict";
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
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
const service_error_1 = require("./service-error");
function GET(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(req.url, {
                method: 'GET',
                headers: req.headers,
                cache: req.cache,
            });
            if (!response.ok) {
                throw (0, service_error_1.handleApiErrors)(response.status, yield response.json());
            }
            else {
                return {
                    data: yield response.json(),
                    ok: response.ok,
                };
            }
        }
        catch (error) {
            return {
                error: error,
                ok: false,
            };
        }
    });
}
exports.GET = GET;
function POST(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(req.url, {
                method: 'POST',
                headers: req.headers,
                body: req.data,
                cache: req.cache,
            });
            if (!response.ok) {
                throw (0, service_error_1.handleApiErrors)(response.status, yield response.json());
            }
            else {
                return {
                    data: yield response.json(),
                    ok: response.ok,
                };
            }
        }
        catch (error) {
            return {
                error: error,
                ok: false,
            };
        }
    });
}
exports.POST = POST;
function PUT(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(req.url, {
                method: 'PUT',
                headers: req.headers,
                body: req.data,
                cache: req.cache,
            });
            if (!response.ok) {
                throw (0, service_error_1.handleApiErrors)(response.status, yield response.json());
            }
            else {
                return {
                    data: yield response.json(),
                    ok: response.ok,
                };
            }
        }
        catch (error) {
            return {
                error: error,
                ok: false,
            };
        }
    });
}
exports.PUT = PUT;
function DELETE(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(req.url, {
                method: 'DELETE',
                headers: req.headers,
                body: req.data,
                cache: req.cache,
            });
            if (!response.ok) {
                throw (0, service_error_1.handleApiErrors)(response.status, yield response.json());
            }
            else {
                return {
                    data: yield response.json(),
                    ok: response.ok,
                };
            }
        }
        catch (error) {
            return {
                error: error,
                ok: false,
            };
        }
    });
}
exports.DELETE = DELETE;
