import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepository } from 'src/user/user.repository'
import { WalletRepository } from 'src/wallet/wallet.repository'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
	imports: [
		TypeOrmModule.forFeature([UserRepository, WalletRepository]),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>('SECRET_KEY') || 'secret',
				signOptions: {
					expiresIn: configService.get<string>('EXPIRES_IN_SECONDS') || '1h',
				},
			}),
			inject: [ConfigService],
		}),
		PassportModule.register({ defaultStrategy: 'jwt' }),
	],
	providers: [AuthService, JwtStrategy],
	controllers: [AuthController],
	exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
