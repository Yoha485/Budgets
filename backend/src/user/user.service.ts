import { Injectable, Logger, NotFoundException } from '@nestjs/common'
import { UserRepository } from './user.repository'
import * as bcrypt from 'bcryptjs'
import { UpdateUserDto } from './user.dto'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService {
	private readonly logger

	constructor(private readonly userRepository: UserRepository) {
		this.logger = new Logger()
	}

	async findById(id: number): Promise<Record<string, any>> {
		try {
			const user = await this.userRepository.findOneOrFail(id)
			this.logger.log(`GET USER ID=${id}`)
			return user.toJson()
		} catch (error) {
			this.logger.error(error)
			throw new NotFoundException()
		}
	}

	async update(id: number, data: UpdateUserDto): Promise<Record<string, any>> {
		try {
			const user = await this.userRepository.findOneOrFail(id)
			data.password = bcrypt.hashSync(data.password, 10)
			const res = await this.userRepository.save({ ...user, ...data })
			const { password, ...resWithoutPassword } = res
			this.logger.log(`UPDATE USER ID=${id}`)
			return resWithoutPassword
		} catch (error) {
			this.logger.error(error)
			throw new NotFoundException()
		}
	}

	async delete(id: number): Promise<Record<string, any>> {
		try {
			const user = await this.userRepository.findOneOrFail(id)
			await this.userRepository.delete({ id: user.id })
			const { password, ...userWithoutPassword } = user
			this.logger.log(`DELETE USER ID=${id}`)
			return userWithoutPassword
		} catch (error) {
			this.logger.error(error)
			throw new NotFoundException()
		}
	}
}
