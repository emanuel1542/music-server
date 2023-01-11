import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './domain/songs/songs.module';
import { CommonModule } from './common/common.module';

@Module({
	imports: [
		SongsModule,
		MongooseModule.forRoot('mongodb://localhost:9091/nest'),
		CommonModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
