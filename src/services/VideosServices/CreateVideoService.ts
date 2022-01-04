import { getRepository } from 'typeorm';

import { Category } from '../../entities/Category';
import { Videos } from '../../entities/Videos';

type videoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
};

export class CreateVideoService {
    async execute({
        name,
        description,
        duration,
        category_id,
    }: videoRequest): Promise<Videos | Error> {
        const repo = getRepository(Videos);
        const categoryRepo = getRepository(Category);

        if (!(await categoryRepo.findOne({ id: category_id }))) {
            return new Error('Category does not exists!');
        }

        if (await repo.findOne({ name })) {
            return new Error('Video already exists!');
        }

        const newVideo = repo.create({
            name,
            description,
            duration,
            category_id,
        });

        await repo.save(newVideo);

        return newVideo;
    }
}
