import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common'
import { UserRepository } from 'src/user/user.repository'
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto'
import { CategoryEntity } from './category.entity'
import { CategoryRepository } from './category.repository'

@Injectable()
export class CategoryService {
	private readonly logger

	constructor(
		private readonly categoryRepository: CategoryRepository,
		private readonly userRepository: UserRepository,
	) {
		this.logger = new Logger()
	}

	async createCategory(
		walletId: number,
		createCategoryDto: CreateCategoryDto,
	): Promise<CategoryEntity> {
		try {
			const category = this.categoryRepository.create({
				...createCategoryDto,
				walletId,
			})
			await category.save()
			this.logger.log(`CREATE CATEGORY ID=${category.id}`)
			return category
		} catch (error) {
			this.logger.error(error)
			throw new InternalServerErrorException()
		}
	}

	async findAll(walletId: number): Promise<CategoryEntity[]> {
		try {
			return this.categoryRepository.find({ where: { walletId } })
		} catch (error) {
			this.logger.error(error)
			throw new InternalServerErrorException()
		}
	}

	async findById(id: number): Promise<CategoryEntity> {
		try {
			return this.categoryRepository.findOneOrFail(id)
		} catch (error) {
			this.logger.error(error)
			throw new InternalServerErrorException()
		}
	}

	async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
		try {
			const category = await this.categoryRepository.findOneOrFail(id)
			return this.categoryRepository.save({
				...category,
				...updateCategoryDto,
			})
		} catch (error) {
			this.logger.error(error)
			throw new InternalServerErrorException()
		}
	}

	async delete(id: number): Promise<CategoryEntity> {
		try {
			const category = await this.categoryRepository.findOneOrFail(id)
			await this.categoryRepository.delete({ id: category.id })
			return category
		} catch (error) {
			this.logger.error(error)
			throw new InternalServerErrorException()
		}
	}
}
