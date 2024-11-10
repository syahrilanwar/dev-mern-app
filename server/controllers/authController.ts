import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = new User({ email, password });
        await user.save();
        res.status(201).json({ message: 'User registered' });
    } catch (error) {
        res.status(500).json({ error: 'User registration failed' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        res.status(401).json({ error: 'Invalid credentials' });
    } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || '', { expiresIn: '1h' });
        res.json({ token });
    }
};
