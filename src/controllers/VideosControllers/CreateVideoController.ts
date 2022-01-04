import { Request, Response } from 'express';

import { CreateVideoService } from '../../services/VideosServices/CreateVideoService';

export class CreateVideoController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description, duration, category_id } = req.body;

        const service = new CreateVideoService();

        const newVideo = await service.execute({
            name,
            description,
            duration,
            category_id,
        });

        if (newVideo instanceof Error) {
            return res.status(400).json(newVideo.message);
        }

        return res.json(newVideo);
    }
}
