import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthPayload } from 'src/user/user.dto';
import { UserRepository } from 'src/user/user.repository';
import { ConfigService } from '@nestjs/config';
import { WalletRepository } from 'src/wallet/wallet.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private userRepository: UserRepository,
		private walletRepository: WalletRepository,
		private configService: ConfigService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get<string>('SECRET_KEY') || 'secret',
		});
	}

	async validate(payload: AuthPayload): Promise<Object> {
		const user = await this.userRepository.findOne(payload.id);
		const wallet = await this.walletRepository.findOne({
			where: { userId: user?.id },
		});
		return { ...user, walletId: wallet.id };
	}
}
