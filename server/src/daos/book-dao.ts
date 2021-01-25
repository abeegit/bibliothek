import { IBook } from '@entities/book';
import db from './../shared/db';
import Logger from "../shared/Logger";

export interface IBookDao {
  getOne: (id: string) => Promise<IBook | null>;
  getAll: (query: any) => Promise<IBook[]>;
  add: (book: IBook) => Promise<void>;
  update: (book: IBook) => Promise<void>;
  delete: (id: string) => Promise<void>;
}

class BookDao implements IBookDao {
  
  public getOne(id: string): Promise<IBook | null> {
    return new Promise((resolve, reject) => {
			db.find({_id: id}, (err: any, book: IBook) => {
				if (err) {
					Logger.err(err);
					return resolve(null);
				}
				return resolve(book);
			})
    })
  }

  public getAll(query: any): Promise<IBook[]> {
    return new Promise((resolve, reject) => {
      const queryObj = query && query !== "" ? { $or: [ { name: new RegExp(query, "i") }, { author: new RegExp(query, "i") } ] } : {};
			db.find(queryObj, (err: any, books: Array<IBook>) => {
				if (err) {
					Logger.err(err);
					return resolve([]);
				}
				return resolve(books);
			})
    })
  }

  public async add(book: IBook): Promise<any> {
    return new Promise((resolve, reject) => {
			db.insert(book, (err, insertedBook) => {
				if (err) {
					Logger.err(err);
					return reject();
				}

				resolve(insertedBook);
			});
    })
  }

  public async update(bookData: IBook): Promise<void> {
    const { _id, ...book } = bookData;

    return new Promise((resolve, reject) => {
			db.update({ _id: _id }, { $set: book }, {}, (err) => {
				if (err) {
					Logger.err(err);
					return reject();
				}

				resolve();
			});
    })
  }

  public async delete(id: string): Promise<void> {
      return Promise.resolve(undefined);
  }
}

export default BookDao;