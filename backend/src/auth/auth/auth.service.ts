import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	UnauthorizedException,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/user/user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/user.repository';
import { WalletRepository } from 'src/wallet/wallet.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
	constructor(
		private userRepository: UserRepository,
		private walletRepository: WalletRepository,
		private jwtService: JwtService,
	) {}

	async register(credentials: RegisterDto): Promise<any> {
		try {
			const user = await this.userRepository.create({
				...credentials,
				password: bcrypt.hashSync(
					credentials.password,
					Number(process.env.SHIFT),
				),
			});
			await user.save();

			const wallet = this.walletRepository.create({
				userId: user.id,
			});
			await wallet.save();

			const payload = { id: user.id };
			const token = this.jwtService.sign(payload);
			return { user: { ...user.toJson(), token } };
		} catch (err) {
			console.log(err);
			if (err.code === '23505') {
				throw new ConflictException('Username has alredy been taken');
			}
			throw new InternalServerErrorException();
		}
	}

	async login({ email, password }: LoginDto): Promise<any> {
		try {
			const user = await this.userRepository.findOne({ where: { email } });
			const isValid = await user.comparePassword(password);
			if (!isValid) {
				throw new UnauthorizedException('Invalid credentials');
			}
			const payload = { id: user.id };
			const token = this.jwtService.sign(payload);
			return { user: { ...user.toJson(), token } };
		} catch (err) {
			throw new UnauthorizedException('Invalid credentials');
		}
	}
}
