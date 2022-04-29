import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/user/user.decorator';
import { CreateExpenseDto, UpdateExpenseDto } from './expense.dto';
import { ExpenseEntity } from './expense.entity';
import { CategoryOwnerGuard } from './expense.guard';
import { ExpenseService } from './expense.service';

@Controller('expense')
@UseGuards(JwtAuthGuard)
export class ExpenseController {
	constructor(private readonly expenseService: ExpenseService) {}

	@Post()
	create(
		@User('walletId') walletId: number,
		@Body() createExpenseDto: CreateExpenseDto,
	): Promise<ExpenseEntity> {
		return this.expenseService.create(walletId, createExpenseDto);
	}

	@Get()
	findAll(@User('walletId') walletId: number): Promise<ExpenseEntity[]> {
		return this.expenseService.findAll(walletId);
	}

	@Get(':id')
	@UseGuards(CategoryOwnerGuard)
	findById(@Param('id') id: number): Promise<ExpenseEntity> {
		return this.expenseService.findById(id);
	}

	@Patch(':id')
	@UseGuards(CategoryOwnerGuard)
	update(@Param('id') id: number, updateExpenseDto: UpdateExpenseDto): Promise<ExpenseEntity> {
		return this.expenseService.update(id, updateExpenseDto);
	}

	@Delete(':id')
	@UseGuards(CategoryOwnerGuard)
	delete(@Param('id') id: number): Promise<ExpenseEntity> {
		return this.expenseService.delete(id);
	}
}
