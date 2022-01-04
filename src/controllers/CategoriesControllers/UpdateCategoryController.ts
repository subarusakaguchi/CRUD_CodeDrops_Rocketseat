import { Request, Response } from 'express';

import { UpdateCategoryService } from '../../services/CategoriesServices/UpdateCategoryService';

export class UpdateCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { name, description } = req.body;

        const service = new UpdateCategoryService();

        const updatedCategory = await service.execute({
            id,
            name,
            description,
        });

        if (updatedCategory instanceof Error) {
            return res.status(400).json(updatedCategory.message);
        }

        return res.json(updatedCategory);
    }
}
