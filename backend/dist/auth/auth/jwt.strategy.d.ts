import { UserEntity } from 'src/user/user.entity';
import { AuthPayload } from 'src/user/user.dto';
import { UserRepository } from 'src/user/user.repository';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: AuthPayload): Promise<UserEntity>;
}
export {};
