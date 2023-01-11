import { Song } from 'src/common/entities/song.entity';

export interface ISongRepository {
	create(song: Song): Promise<void>;
}
