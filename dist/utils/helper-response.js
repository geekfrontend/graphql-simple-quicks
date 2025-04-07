"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseServerError = exports.responseValidationError = exports.responseCreated = exports.responseSuccess = void 0;
const responseSuccess = (res, message, data = {}) => {
    return res.status(200).json({ success: true, message, data });
};
exports.responseSuccess = responseSuccess;
const responseCreated = (res, message, data = {}) => {
    return res.status(201).json({ success: true, message, data });
};
exports.responseCreated = responseCreated;
const responseValidationError = (res, errors) => {
    return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
    });
};
exports.responseValidationError = responseValidationError;
const responseServerError = (res, err) => {
    console.error("Internal Server Error:", err);
    return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later.",
        errors: null,
    });
};
exports.responseServerError = responseServerError;
//# sourceMappingURL=helper-response.js.map