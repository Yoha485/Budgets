import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth/auth.module';
import { DatabaseConnectionService } from './database-connection.service';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useClass: DatabaseConnectionService,
		}),
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
