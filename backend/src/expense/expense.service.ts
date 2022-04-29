import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateExpenseDto, UpdateExpenseDto } from './expense.dto';
import { ExpenseEntity } from './expense.entity';
import { ExpenseRepository } from './expense.repository';

@Injectable()
export class ExpenseService {
	private readonly logger: Logger;

	constructor(private readonly expenseRepository: ExpenseRepository) {
		this.logger = new Logger();
	}

	async create(walletId: number, createExpenseDto: CreateExpenseDto): Promise<ExpenseEntity> {
		try {
			const expense = this.expenseRepository.create({
				walletId,
				...createExpenseDto,
			});
			await expense.save();
			this.logger.log(`CREATE EXPENSE ID=${expense.id}`);
			return expense;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async findAll(walletId: number): Promise<ExpenseEntity[]> {
		try {
			const expenses = await this.expenseRepository.find({ where: { walletId } });
			this.logger.log(`GET ALL EXPENSES WALLET_ID=${walletId}`);
			return expenses;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async findById(id: number): Promise<ExpenseEntity> {
		try {
			const expense = await this.expenseRepository.findOneOrFail(id);
			this.logger.log(`GET EXPENSE ID=${expense.id}`);
			return expense;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async update(id: number, updateExpenseDto: UpdateExpenseDto): Promise<ExpenseEntity> {
		try {
			const expense = await this.expenseRepository.findOneOrFail(id);
			this.logger.log(`UPDATE EXPENSE ID=${expense.id}`);
			return this.expenseRepository.save({
				...expense,
				...updateExpenseDto,
			});
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async delete(id: number): Promise<ExpenseEntity> {
		try {
			const expense = await this.expenseRepository.findOneOrFail(id);
			await this.expenseRepository.delete({ id: expense.id });
			this.logger.log(`DELETE EXPENSE ID=${expense.id}`);
			return expense;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}
}
