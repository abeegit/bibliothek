import { Request } from 'express';
import { IBook } from '@entities/book';

export const paramMissingError = 'One or more of the required parameters was missing.';
export const bookMissingError = 'No book found';

export interface IRequest extends Request {
    body: {
        book: IBook;
    }
} 
