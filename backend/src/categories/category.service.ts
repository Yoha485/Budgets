import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
	private readonly logger: Logger;

	constructor(
		private readonly categoryRepository: CategoryRepository,
		private readonly userRepository: UserRepository,
	) {
		this.logger = new Logger();
	}

	async create(walletId: number, createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
		try {
			const category = this.categoryRepository.create({
				...createCategoryDto,
				walletId,
			});
			await category.save();
			this.logger.log(`CREATE CATEGORY ID=${category.id}`);
			return category;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async findAll(walletId: number): Promise<CategoryEntity[]> {
		try {
			const categories = await this.categoryRepository.find({ where: { walletId } });
			this.logger.log(`GET ALL CATEGORIES WALLET_ID=${walletId}`);
			return categories;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async findAllGroupedByCategory(
		walletId: number,
	): Promise<any> {
		try {
			const categories = (
				await this.categoryRepository.find({ where: { walletId }, relations: ['expenses'] })
			).map((c) => ({ ...c, overallCost: c.expenses.map(e => e.cost).reduce((acc, e) => acc + e, 0)}));
			this.logger.log(`GET ALL CATEGORIES WALLET_ID=${walletId}`);
			return categories;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async findById(id: number): Promise<CategoryEntity> {
		try {
			const category = await this.categoryRepository.findOneOrFail(id);
			this.logger.log(`GET CATEGORY ID=${category.id}`);
			return category;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
		try {
			const category = await this.categoryRepository.findOneOrFail(id);
			this.logger.log(`UPDATE CATEGORY ID=${category.id}`);
			return this.categoryRepository.save({
				...category,
				...updateCategoryDto,
			});
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}

	async delete(id: number): Promise<CategoryEntity> {
		try {
			const category = await this.categoryRepository.findOneOrFail(id);
			await this.categoryRepository.delete({ id: category.id });
			this.logger.log(`DELETE CATEGORY ID=${category.id}`);
			return category;
		} catch (error) {
			this.logger.error(error);
			throw new InternalServerErrorException();
		}
	}
}
