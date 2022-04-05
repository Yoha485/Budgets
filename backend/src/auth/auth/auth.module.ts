import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/user/user.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [
		TypeOrmModule.forFeature([UserRepository]),
		JwtModule.register({
      secret: String(process.env.SECRET_KEY),
			signOptions: {
				expiresIn: 36000,
			},
		}),
		PassportModule.register({ defaultStrategy: 'jwt' }),
	],
	providers: [AuthService, JwtStrategy],
	controllers: [AuthController],
	exports: [PassportModule, JwtStrategy],
})
export class AuthModule {}
