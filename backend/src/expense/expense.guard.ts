import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Injectable()
export class CategoryOwnerGuard implements CanActivate {
	constructor(private readonly expenseService: ExpenseService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const { user } = request;

		const expense = await this.expenseService.findById(request.params.id);
		if (!expense) {
			throw new NotFoundException();
		}
		return expense.walletId === user.walletId;
	}
}
