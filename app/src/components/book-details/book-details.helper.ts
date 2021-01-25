import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { URL, TIMEOUT } from "../../utils/api";
import { IResponse } from "../../shared/interfaces"

export async function getBook(id: string): Promise<any> {
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: URL + "/books/" + id,
    timeout: TIMEOUT,
  };

  try {
    var response = await axios.request(requestConfig);
    return parseGetBookResponse(response);
  } catch (requestOTPError) {
    throw requestOTPError;
  }
}

function parseGetBookResponse({status, data}: AxiosResponse): IResponse {
  const addResponse: IResponse = { error: null, data: null };
  if (status === 200) {
    addResponse.data = data;
  }
  return addResponse;
}