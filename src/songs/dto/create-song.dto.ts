import { Type } from 'class-transformer';
import {
	ArrayMinSize,
	IsArray,
	IsNotEmpty,
	IsNumber,
	IsString,
	MaxLength,
	MinLength,
	ValidateNested,
} from 'class-validator';

export class Notes {
	@IsArray()
	@IsNotEmpty()
	@IsNumber({}, { each: true })
	name: number[];
}

export class CreateSongDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	@MaxLength(50)
	title: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	@MaxLength(50)
	author: string;

	@IsArray()
	@IsNotEmpty()
	@ArrayMinSize(2)
	lyrics: string[];

	@IsNotEmpty()
	@ArrayMinSize(2)
	@ValidateNested()
	notes: Notes[];
}
