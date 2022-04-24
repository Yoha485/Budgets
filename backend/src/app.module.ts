import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './categories/category.module';
import { DatabaseConnectionService } from './database-connection.service';
import { ExpenseModule } from './expense/expense.module';
import { UserModule } from './user/user.module';

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
		UserModule,
		CategoryModule,
		ExpenseModule,
	],
})
export class AppModule {}
