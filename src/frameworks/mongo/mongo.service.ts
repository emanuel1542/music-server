import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song as IParamSong } from 'src/common/entities';
import { ISongRepository } from 'src/common/interfaces/repositories/song-interface';
import { Author, AuthorDocument } from './model';
import { Song, SongDocument } from './model/song.model';

@Injectable()
export class MongoService implements ISongRepository {
	constructor(
		@InjectModel(Song.name) private songModel: Model<SongDocument>,
		@InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
	) {}
	async create(song: IParamSong): Promise<void> {
		const { _id } = await this.authorModel.create({
			...song.author,
		});

		await this.songModel.create({
			...song,
			author: _id,
		});
	}
}
