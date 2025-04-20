import express, { Router, Request, Response } from 'express';
import { getData } from '../controllers/data-controller';

export const router: Router = express.Router();

router.get('/home', (_: Request, res: Response) => getData('data-home', res));
router.get('/1', (_: Request, res: Response): void => getData('data-1', res));
router.get('/2', (_: Request, res: Response): void => getData('data-2', res));
router.get('/3', (_: Request, res: Response): void => getData('data-3', res));
router.get('/4', (_: Request, res: Response): void => getData('data-4', res));
