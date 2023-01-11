import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NoteDocument = HydratedDocument<Note>;

@Schema()
export class Note {
	@Prop({
		required: true,
		index: true,
	})
	name: string;

	@Prop({
		required: true,
	})
	positionX: number;

	@Prop({
		required: true,
	})
	positionY: number[];
}

export const NoteSchema = SchemaFactory.createForClass(Note);
