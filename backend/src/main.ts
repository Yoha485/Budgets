import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication} from '@nestjs/common';

async function bootstrap() {
	const app: INestApplication = await NestFactory.create(AppModule);
	app.enableCors({
		origin: process.env.CORS_ORIGIN || '*',
		methods: process.env.CORS_METHODS || '*',
		credentials: Boolean(process.env.CORS_CREDENTIALS) || false,
		allowedHeaders: process.env.CORS_ALLOWED_HEADERS || '*',
	});

	await app.listen(process.env.PORT || 4000);
}
bootstrap();
