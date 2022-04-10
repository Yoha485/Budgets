import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app: INestApplication = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	app.enableCors({
		origin: configService.get<string>('CORS_ORIGIN') || '*',
		methods: configService.get<string>('CORS_METHODS') || '*',
		credentials: configService.get<boolean>('CORS_CREDENTIALS') || false,
		allowedHeaders: configService.get<string>('CORS_ALLOWED_HEADERS') || '*',
	});

	await app.listen(configService.get<number>('PORT') || 4000);
}
bootstrap();
