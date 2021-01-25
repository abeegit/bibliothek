import { Router } from 'express';
import BooksRouter from './books';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/books', BooksRouter);

// Export the base-router
export default router;
