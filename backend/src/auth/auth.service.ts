import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/user/user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/user.repository';
import * as bcrypt from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { WalletRepository } from 'src/wallet/wallet.repository';

@Injectable()
export class AuthService {
	private readonly logger: Logger;

	constructor(
		private userRepository: UserRepository,
		private walletRepository: WalletRepository,
		private jwtService: JwtService,
		private configService: ConfigService,
	) {
		this.logger = new Logger();
	}

	async register(credentials: RegisterDto): Promise<any> {
		try {
			const user = this.userRepository.create({
				...credentials,
				password: bcrypt.hashSync(
					credentials.password,
					Number(this.configService.get<number>('SHIFT')),
				),
			});
			await user.save();
			
			const wallet = this.walletRepository.create({ userId: user.id });
			await wallet.save();

			const payload = { id: user.id };
			const token = this.jwtService.sign(payload);
			this.logger.log(`USER REGISTERED ID=${user.id}`);
			return { user: { ...user.toJson(), walletId: wallet.id, token } };
		} catch (error) {
			this.logger.error(error);
			if (error.code === '23505') {
				throw new ConflictException('Username has already been taken');
			}
			throw new InternalServerErrorException();
		}
	}

	async login({ email, password }: LoginDto): Promise<any> {
		try {
			const user = await this.userRepository.findOne({ where: { email } });
			const isValid = user.comparePassword(password);
			if (!isValid) {
				throw new UnauthorizedException('Invalid credentials');
			}
			const wallet = await this.walletRepository.findOneOrFail({ where: { userId: user.id } });
			const payload = { id: user.id };
			const token = this.jwtService.sign(payload);
			this.logger.log(`USER LOGGED IN ID=${user.id}`);
			return { user: { ...user.toJson(), walletId: wallet.id, token } };
		} catch (error) {
			this.logger.error(error);
			throw new UnauthorizedException('Invalid credentials');
		}
	}
}
