import bcrypt from 'bcryptjs';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { authSchema } from '@soundserve/shared';
import { env } from '../config/env.js';

export const authRouter = Router();

authRouter.post('/register', async (req, res) => {
  const input = authSchema.parse(req.body);
  const passwordHash = await bcrypt.hash(input.password, 12);

  res.status(201).json({
    data: {
      id: crypto.randomUUID(),
      email: input.email,
      passwordHashPreview: passwordHash.slice(0, 12),
      emailVerificationRequired: true
    },
    requestId: crypto.randomUUID()
  });
});

authRouter.post('/login', (req, res) => {
  const input = authSchema.parse(req.body);
  const accessToken = jwt.sign({ sub: input.email, role: 'listener' }, env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ sub: input.email }, env.JWT_REFRESH_SECRET, { expiresIn: '30d' });

  res.cookie('refresh_token', refreshToken, { httpOnly: true, sameSite: 'lax', secure: env.NODE_ENV === 'production' });
  res.json({ data: { accessToken }, requestId: crypto.randomUUID() });
});
