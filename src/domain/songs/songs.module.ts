import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { MongoServiceModule } from 'src/frameworks/mongo/mongo.module';

@Module({
	controllers: [SongsController],
	providers: [SongsService],
	imports: [MongoServiceModule],
})
export class SongsModule {}
