import { Router } from 'express';

import { CreateVideoController } from '../controllers/VideosControllers/CreateVideoController';
import { GetAllVideosController } from '../controllers/VideosControllers/GetAllVideosController';

const videoRoutes = Router();

const createVideoController = new CreateVideoController();
const getAllVideosController = new GetAllVideosController();

videoRoutes.post('/', createVideoController.handle);
videoRoutes.get('/', getAllVideosController.handle);

export { videoRoutes };
