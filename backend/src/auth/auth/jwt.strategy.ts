import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from 'src/user/user.entity';
import { AuthPayload } from 'src/user/user.dto';
import { UserRepository } from 'src/user/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
      secretOrKey: process.env.SECRET_KEY || 'secret',
    });
  }

  async validate(payload: AuthPayload): Promise<UserEntity> {
    const { id } = payload;
    const user = this.userRepository.findOne(id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
