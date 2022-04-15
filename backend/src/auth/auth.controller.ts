import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';

@Controller('users')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post()
	register(@Body() credentials: RegisterDto): Promise<any> {
		return this.authService.register(credentials);
	}

	@Post('/login')
	login(@Body() credentials: LoginDto): Promise<any> {
		return this.authService.login(credentials);
	}
}
