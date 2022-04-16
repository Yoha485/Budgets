import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from 'src/user/user.entity';
import { AuthPayload } from 'src/user/user.dto';
import { UserRepository } from 'src/user/user.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository, private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('SECRET_KEY') || 'secret',
    });
  }

  async validate(payload: AuthPayload): Promise<UserEntity> {
    console.log('tt')
    const { id } = payload;
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
