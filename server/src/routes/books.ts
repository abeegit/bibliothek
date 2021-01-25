import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import BookDao from '@daos/book-dao';
import { paramMissingError, bookMissingError, IRequest } from '@shared/constants';

const router = Router();
const bookDao = new BookDao();
const { BAD_REQUEST, CREATED, OK, NO_CONTENT } = StatusCodes;


router.get('/', async (req: Request, res: Response) => {
  const { q: query } = req.query;
  const books = await bookDao.getAll(query);
  return res.status(OK).json({books});
});

router.post('/', async (req: IRequest, res: Response) => {
    const { book } = req.body;
    console.log(req.body);
    if (!book) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await bookDao.add(book);
    return res.status(CREATED).end();
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookDao.getOne(id);
  if (!book) {
    return res.status(NO_CONTENT).json({
      error: bookMissingError
    })
  }
  return res.status(OK).json(book);
});

router.put('/:id', async (req: IRequest, res: Response) => {
    const { book } = req.body;
    const { id } = req.params; //TODO: check
    if (!book) {
      return res.status(BAD_REQUEST).json({
          error: paramMissingError,
      });
    }
    
    await bookDao.update(book);
    return res.status(OK).end();
});

export default router;
