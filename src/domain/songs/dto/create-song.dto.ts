import { Type } from 'class-transformer';
import {
	ArrayMinSize,
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
	ValidateNested,
} from 'class-validator';

export class AuthorDto {
	@MinLength(3)
	@MaxLength(50)
	@IsNotEmpty()
	name: string;
}

export class ParagraphDto {
	@ArrayMinSize(1)
	lyrics: number[];

	@IsOptional()
	type?: string;

	@ArrayMinSize(1)
	@ValidateNested({ each: true })
	@Type(() => NoteDto)
	notes: NoteDto[];
}

export class NoteDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(1)
	name: string;

	@IsNumber()
	positionX: number;

	@IsNumber({}, { each: true })
	positionY: number[];
}

export class CreateSongDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	@MaxLength(100)
	tittle: string;

	@IsArray()
	@IsNotEmpty()
	lyrics: string[];

	@Type(() => AuthorDto)
	@ValidateNested()
	author: AuthorDto;

	@ArrayMinSize(1)
	@ValidateNested({ each: true })
	@Type(() => ParagraphDto)
	paragraphs: ParagraphDto[];
}
