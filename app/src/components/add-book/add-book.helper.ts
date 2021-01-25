import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { URL, TIMEOUT } from "../../utils/api";
import { Book, IResponse } from "../../shared/interfaces"

export async function addBook(book: Book): Promise<any> {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: URL + "/books",
    data: { book: book },
    timeout: TIMEOUT,
  };

  try {
    var response = await axios.request(requestConfig);
    return parseAddBookResponse(response);
  } catch (requestOTPError) {
    throw requestOTPError;
  }
}

function parseAddBookResponse({status, data}: AxiosResponse): IResponse {
  const addResponse: IResponse = { error: null, data: null };
  if (status === 201) {
    addResponse.data = data;
  }
  return addResponse;
}