import { LoginDto, RegisterDto } from 'src/user/user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/user.repository';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    register(credentials: RegisterDto): Promise<any>;
    login({ email, password }: LoginDto): Promise<any>;
}
