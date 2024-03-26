"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApiErrors = void 0;
const types_1 = require("./types");
class ApiError extends Error {
    constructor(status, message, details) {
        super(message);
        this.status = status;
        this.details = details;
        this.message = message;
    }
}
function handleApiErrors(status, response) {
    const message = types_1.statusMessages[status] || 'Unknown Status';
    return new ApiError(status, message, response);
}
exports.handleApiErrors = handleApiErrors;
