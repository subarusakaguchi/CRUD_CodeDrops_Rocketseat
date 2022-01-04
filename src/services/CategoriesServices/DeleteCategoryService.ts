import { getRepository } from 'typeorm';

import { Category } from '../../entities/Category';

type responseDeletedCategory = {
    message: string;
};

export class DeleteCategoryService {
    async execute(id: string): Promise<Error | responseDeletedCategory> {
        const repo = getRepository(Category);

        if (!(await repo.findOne(id))) {
            return new Error('Category does not exists!');
        }

        await repo.delete(id);

        return { message: 'Category deleted' };
    }
}
