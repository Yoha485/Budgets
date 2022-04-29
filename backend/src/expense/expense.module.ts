import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { ExpenseController } from './expense.controller';
import { ExpenseRepository } from './expense.repository';
import { ExpenseService } from './expense.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([UserRepository, ExpenseRepository]),
		PassportModule.register({ defaultStrategy: 'jwt' }),
	],
	controllers: [ExpenseController],
	providers: [ExpenseService],
})
export class ExpenseModule {}
