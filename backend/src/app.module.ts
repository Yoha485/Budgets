import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './database-connection.service';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useClass: DatabaseConnectionService,
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
