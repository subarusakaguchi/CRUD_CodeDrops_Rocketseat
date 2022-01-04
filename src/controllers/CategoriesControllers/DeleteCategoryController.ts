import { Request, Response } from 'express';

import { DeleteCategoryService } from '../../services/CategoriesServices/DeleteCategoryService';

export class DeleteCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const service = new DeleteCategoryService();

        const response = await service.execute(id);

        if (response instanceof Error) {
            return res.status(400).json(response.message);
        }

        return res.json(response);
    }
}
