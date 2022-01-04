import { Request, Response } from 'express';

import { GetAllVideosService } from '../../services/VideosServices/GetAllVideosService';

export class GetAllVideosController {
    async handle(req: Request, res: Response): Promise<Response> {
        const service = new GetAllVideosService();

        const allVideos = await service.execute();

        return res.json(allVideos);
    }
}
