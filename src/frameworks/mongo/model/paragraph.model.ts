import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Note } from '.';

export type ParagraphDocument = HydratedDocument<Paragraph>;

@Schema()
export class Paragraph {
	@Prop({
		required: true,
	})
	lyrics: number[];

	@Prop({
		required: true,
		index: true,
	})
	notes: Note[];

	@Prop()
	type?: string;
}

export const ParagraphSchema = SchemaFactory.createForClass(Paragraph);
