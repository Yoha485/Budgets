import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as dotenv from 'dotenv'

dotenv.config()
@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
			name: 'default',
			type: 'postgres',
			host: process.env.DATABASE_HOST,
			port: +process.env.DATABASE_PORT,
			username: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASS,
			database: process.env.DATABASE_NAME,
			synchronize: true,
			dropSchema: false,
			logging: false,
			entities: ['dist/**/*.entity.js'],
		};
  }
}
