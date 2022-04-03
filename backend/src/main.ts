import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app: INestApplication = await NestFactory.create(AppModule);
	app.enableCors({
		origin: '*',
		methods: '*',
		credentials: false,
		allowedHeaders: '*',
	});

	console.log(process.env.DATABASE_HOST);

	await app.listen(process.env.PORT || 4000);
}
bootstrap();
