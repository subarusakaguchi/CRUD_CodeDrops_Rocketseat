import { Request, Response } from 'express';

import { GetAllCategoriesService } from '../../services/CategoriesServices/GetAllCategoriesService';

export class GetAllCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const service = new GetAllCategoriesService();

        const categories = await service.execute();

        return res.json(categories);
    }
}
