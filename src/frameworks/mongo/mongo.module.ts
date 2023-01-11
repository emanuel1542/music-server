import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema, Song, SongSchema } from './model';
import { MongoService } from './mongo.service';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Song.name, schema: SongSchema },
			{ name: Author.name, schema: AuthorSchema },
		]),
	],
	providers: [MongoService],
	exports: [MongoService],
})
export class MongoServiceModule {}
