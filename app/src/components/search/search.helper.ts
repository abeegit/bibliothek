import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { IResponse } from "../../shared/interfaces";
import {URL, TIMEOUT} from "../../utils/api";

export async function search(text: string): Promise<any | null> {
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: URL + "/books?q=" + text,
    timeout: TIMEOUT,
  };

  try {
    var response = await axios.request(requestConfig);
    return parseSearchResponse(response);
  } catch (error) {
    const searchResponse: IResponse = {error: error, data: null};
    return searchResponse;
  }
}

function parseSearchResponse({ status, data }: AxiosResponse): IResponse {
  const searchResponse: IResponse = {error: null, data: null};
  if ( status === 200 ) {
    searchResponse.data = data.books;
  }
  return searchResponse;
}