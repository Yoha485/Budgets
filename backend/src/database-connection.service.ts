import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
	constructor(private configService: ConfigService) {}

	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			name: 'default',
			type: 'postgres',
			host: this.configService.get<string>('DATABASE_HOST'),
			port: this.configService.get<number>('DATABASE_PORT'),
			username: this.configService.get<string>('DATABASE_USER'),
			password: this.configService.get<string>('DATABASE_PASS'),
			database: this.configService.get<string>('DATABASE_NAME'),
			ssl: {
				rejectUnauthorized: false,
			},
			synchronize: true,
			dropSchema: true,
			logging: false,
			entities: ['dist/**/*.entity.js'],
		};
	}
}
