import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './router';
import { timelineServiceRef } from './services';

/**
 * timelinePlugin backend plugin
 *
 * @public
 */
export const timelinePlugin = createBackendPlugin({
  pluginId: 'timeline',
  register(env) {
    env.registerInit({
      deps: {
        httpAuth: coreServices.httpAuth,
        httpRouter: coreServices.httpRouter,
        timelineService: timelineServiceRef,
      },
      async init({ httpAuth, httpRouter, timelineService }) {
        httpRouter.use(
          await createRouter({
            httpAuth,
            timelineService,
          }),
        );
      },
    });
  },
});
