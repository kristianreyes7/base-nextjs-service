
import { handleApiErrors } from './service-error'
import { ApiRequest, ServiceResponse, StatusCodes, ApiMutationRequest } from './types'

export async function GET<TRes, TErr>(
  req: ApiRequest, signal?: AbortSignal
): Promise<ServiceResponse<TRes, TErr>> {
  try {
    const response = await fetch(req.url, {
      method: 'GET',
      headers: req.headers,
      cache: req.cache,
      signal
    })
    if (!response.ok) {
      throw handleApiErrors(response.status as StatusCodes, await response.json())
    } else {
      return {
        data: await response.json(),
        ok: response.ok,
      }
    }
  } catch (error) {
    return {
      error: error as TErr,
      ok: false,
    }
  }
}

export async function POST<
  TReq extends BodyInit | null | undefined,
  TRes,
  TErr
>(req: ApiMutationRequest<TReq>, signal?: AbortSignal): Promise<ServiceResponse<TRes, TErr>> {
  try {
    const response = await fetch(req.url, {
      method: 'POST',
      headers: req.headers,
      body: req.data,
      cache: req.cache,
      signal
    })
    if (!response.ok) {
      throw handleApiErrors(response.status as StatusCodes, await response.json())
    } else {
      return {
        data: await response.json(),
        ok: response.ok,
      }
    }
  } catch (error) {
    return {
      error: error as TErr,
      ok: false,
    }
  }
}

export async function PUT<TReq extends BodyInit | null | undefined, TRes, TErr>(
  req: ApiMutationRequest<TReq>, signal?: AbortSignal
): Promise<ServiceResponse<TRes, TErr>> {
  try {
    const response = await fetch(req.url, {
      method: 'PUT',
      headers: req.headers,
      body: req.data,
      cache: req.cache,
      signal  
    })
    if (!response.ok) {
      throw handleApiErrors(response.status as StatusCodes, await response.json())
    } else {
      return {
        data: await response.json(),
        ok: response.ok,
      }
    }
  } catch (error) {
    return {
      error: error as TErr,
      ok: false,
    }
  }
}

export async function DELETE<
  TReq extends BodyInit | null | undefined,
  TRes,
  TErr
>(req: ApiMutationRequest<TReq>, signal: AbortSignal): Promise<ServiceResponse<TRes, TErr>> {
  try {
    const response = await fetch(req.url, {
      method: 'DELETE',
      headers: req.headers,
      body: req.data,
      cache: req.cache,
      signal  
    })
    if (!response.ok) {      throw handleApiErrors(response.status as StatusCodes, await response.json())
    } else {
      return {
        data: await response.json(),
        ok: response.ok,
      }
    }
  } catch (error) {
    return {
      error: error as TErr,
      ok: false,
    }
  }
}
