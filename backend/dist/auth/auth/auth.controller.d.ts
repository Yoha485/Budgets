import { LoginDto, RegisterDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(credentials: RegisterDto): Promise<any>;
    login(credentials: LoginDto): Promise<any>;
}
