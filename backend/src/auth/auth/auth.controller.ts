import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/user/user.dto';
import { AuthService } from './auth.service';

@Controller('users')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post()
	@HttpCode(200)
	register(@Body() credentials: RegisterDto): Promise<any> {
		return this.authService.register(credentials);
	}

	@Post('/login')
	@HttpCode(200)
	login(@Body() credentials: LoginDto): Promise<any> {
		return this.authService.login(credentials);
	}
}
