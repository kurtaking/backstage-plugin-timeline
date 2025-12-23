import express from 'express';
import Router from 'express-promise-router';
import { TimelineService } from './services';
import { HttpAuthService } from '@backstage/backend-plugin-api';

type CreateRouterOptions = {
  httpAuth: HttpAuthService;
  timelineService: TimelineService;
};

export async function createRouter({
  httpAuth,
  timelineService,
}: CreateRouterOptions): Promise<express.Router> {
  const router = Router();
  router.use(express.json());

  router.get('/', async (req, res) => {
    const credentials = await httpAuth.credentials(req, { allow: ['user'] });
    const userEntityRef = credentials.principal.userEntityRef;

    if (!userEntityRef) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const { items } = await timelineService.listTimelineItems();

    res.status(200).json({
      timeline: items,
    });
  });

  return router;
}
