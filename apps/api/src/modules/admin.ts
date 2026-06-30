import { Router } from 'express';

export const adminRouter = Router();

adminRouter.get('/overview', (_req, res) => {
  res.json({
    data: {
      usersPendingReview: 182,
      artistApprovals: 14,
      flaggedContent: 26,
      paymentDisputes: 3,
      streamHealth: 'healthy'
    },
    requestId: crypto.randomUUID()
  });
});
