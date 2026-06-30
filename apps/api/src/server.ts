import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { env } from './config/env.js';
import { applySecurity } from './middleware/security.js';
import { adminRouter } from './modules/admin.js';
import { aiRouter } from './modules/ai.js';
import { authRouter } from './modules/auth.js';
import { catalogRouter } from './modules/catalog.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: env.WEB_ORIGIN,
    credentials: true
  }
});

applySecurity(app);
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ data: { status: 'ok', service: 'soundserve-api' }, requestId: crypto.randomUUID() });
});

app.use('/api/auth', authRouter);
app.use('/api/catalog', catalogRouter);
app.use('/api/ai', aiRouter);
app.use('/api/admin', adminRouter);

io.on('connection', (socket) => {
  socket.emit('activity:connected', { message: 'Realtime Soundserve session ready.' });
  socket.on('player:status', (payload) => socket.broadcast.emit('friend:activity', payload));
});

httpServer.listen(env.PORT, () => {
  console.log(`Soundserve API listening on http://localhost:${env.PORT}`);
});
