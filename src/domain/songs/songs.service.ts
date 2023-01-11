import { Inject, Injectable } from '@nestjs/common';
import { ISongRepository } from 'src/common/interfaces/repositories/song-interface';
import { MongoService } from 'src/frameworks/mongo/mongo.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
	constructor(@Inject(MongoService) private songRepository: ISongRepository) {}

	async create(createSongDto: CreateSongDto) {
		await this.songRepository.create(createSongDto);
		return createSongDto;
	}

	findAll() {
		return `This action returns all songs`;
	}

	findOne(id: number) {
		return `This action returns a #${id} song`;
	}

	update(id: number, updateSongDto: UpdateSongDto) {
		return `This action updates a #${id} song`;
	}

	remove(id: number) {
		return `This action removes a #${id} song`;
	}
}
