export * from "./index";
export * from "../service";
export * from "../service-error";

declare module 'base-next-service' {
    import { StatusCodes, ApiRequest, ServiceResponse } from "./index";

    export class ApiError<TErr> extends Error {
      status: StatusCodes;
      details: TErr;
      constructor(status: StatusCodes, message: string, details: TErr);
    }

    export function handleApiErrors<TErr>(status: StatusCodes, response: TErr): ApiError<TErr>;

    export function GET<TRes, TErr>(req: ApiRequest): Promise<ServiceResponse<TRes, TErr>>;
    export function POST<TReq extends BodyInit | null | undefined, TRes, TErr>(req: ApiRequest): Promise<ServiceResponse<TRes, TErr>>;
    export function PUT<TReq extends BodyInit | null | undefined, TRes, TErr>(req: ApiRequest): Promise<ServiceResponse<TRes, TErr>>;
    export function DELETE<TRes, TErr>(req: ApiRequest): Promise<ServiceResponse<TRes, TErr>>;
  }
  