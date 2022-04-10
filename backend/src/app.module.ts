import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth/auth.module';
import { DatabaseConnectionService } from './database-connection.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: '.env',
		}),
		TypeOrmModule.forRootAsync({
			useClass: DatabaseConnectionService,
		}),
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
