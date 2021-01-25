import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { URL, TIMEOUT } from "../../utils/api";
import { Book, IResponse } from "../../shared/interfaces"

export async function editBook(book: Book): Promise<any> {
  const requestConfig: AxiosRequestConfig = {
    method: "put",
    url: URL + "/books/" + book._id,
    data: { book: book },
    timeout: TIMEOUT,
  };

  try {
    var response = await axios.request(requestConfig);
    return parseEditBookResponse(response);
  } catch (requestOTPError) {
    throw requestOTPError;
  }
}

function parseEditBookResponse({status, data}: AxiosResponse): IResponse {
  const editResponse: IResponse = { error: null, data: null };
  if (status === 200) {
    editResponse.data = data;
  }
  return editResponse;
}