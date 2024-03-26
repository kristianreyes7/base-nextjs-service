import { StatusCodes, statusMessages } from "./types";

class ApiError<TErr> extends Error {
    status: StatusCodes;
    details: TErr;

    constructor(status: StatusCodes, message: string, details: TErr) {
        super(message);
        this.status = status;
        this.details = details;
        this.message = message;
    }
}
export function handleApiErrors<TErr>(status: StatusCodes, response: TErr): ApiError<TErr> {
    const message = statusMessages[status] || 'Unknown Status'
    return new ApiError<TErr>(status, message, response)
}