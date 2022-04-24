import { CanActivate, ExecutionContext, Injectable, NotFoundException } from '@nestjs/common'
import { CategoryService } from './category.service'

@Injectable()
export class CategoryOwnerGuard implements CanActivate {
	constructor(private readonly categoryService: CategoryService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest()
		const { user } = request

		const category = await this.categoryService.findById(request.params.id)
		if (!category) {
			throw new NotFoundException()
		}
		return category.walletId === user.walletId
	}
}
