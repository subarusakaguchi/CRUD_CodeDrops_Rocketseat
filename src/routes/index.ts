import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { videoRoutes } from './videos.routes';

const routes = Router();

routes.use('/categories', categoriesRoutes);
routes.use('/videos', videoRoutes);

export { routes };
