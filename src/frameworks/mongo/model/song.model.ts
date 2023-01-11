import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Author } from './author.model';
import { Note } from './note.model';
import { Paragraph } from './paragraph.model';

export type SongDocument = HydratedDocument<Song>;

@Schema()
export class Song {
	@Prop({
		required: true,
		index: true,
	})
	tittle: string;

	@Prop({
		required: true,
	})
	lyrics: string[];

	@Prop({
		required: true,
		index: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Author',
	})
	author: Author;

	@Prop({
		required: true,
		index: true,
	})
	paragraphs: Paragraph[];
}
export const SongSchema = SchemaFactory.createForClass(Song);
