import { Author } from './author.entity';
import { Paragraph } from './paragraph.entity';

export class Song {
	tittle: string;
	author: Author;
	lyrics: string[];
	paragraphs: Paragraph[];
}
