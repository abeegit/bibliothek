export interface Book {
  _id?: number | null;
  name: string;
  description: string;
  author: string;
  count: number;
}

export interface IResponse {
  error: string | null;
  data: any;
}