import { Router, Request, Response } from 'express';
import User from '../models/User';
import {log} from 'console';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
