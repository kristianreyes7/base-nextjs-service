// Services type
export type ServiceResponse<T, E> = {
  error?: E
  data?: T
  ok?: boolean
}

export interface ApiRequest {
  url: string
  headers: HeadersInit | undefined
  cache: RequestCache
}

export interface ApiMutationRequest<T> extends ApiRequest {
  data?: T
}

export type StatusCodes = 400 | 401 | 403 | 404 | 500 | 502 | 503 | 504

export type StatusMessages = {
  [key in StatusCodes]: string
}

export const statusMessages: StatusMessages = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
}
