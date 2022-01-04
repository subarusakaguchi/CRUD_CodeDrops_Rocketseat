import { getRepository } from 'typeorm';

import { Category } from '../../entities/Category';

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
};

export class UpdateCategoryService {
    async execute({
        id,
        name,
        description,
    }: CategoryUpdateRequest): Promise<Category | Error> {
        const repo = getRepository(Category);

        const category = await repo.findOne(id);

        if (!category) {
            return new Error('Category not Found!');
        }

        const nameAlreadyExists = await repo.findOne({ name });

        if (nameAlreadyExists) {
            return new Error('Category already exists!');
        }

        Object.assign(category, {
            name: name || category.name,
            description: description || category.description,
        });

        await repo.save(category);

        return category;
    }
}
