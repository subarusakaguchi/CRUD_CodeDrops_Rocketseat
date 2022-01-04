import { getRepository } from 'typeorm';

import { Videos } from '../../entities/Videos';

export class GetAllVideosService {
    async execute(): Promise<Videos[]> {
        const repo = getRepository(Videos);

        const allVideos = await repo.find({
            relations: ['category'],
        });

        return allVideos;
    }
}
