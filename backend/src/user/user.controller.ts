import { Body, Controller, Delete, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './user.decorator';
import { UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	findById(@User('id') id: number): Promise<Record<string, any>> {
		return this.userService.findById(id);
	}

	@Patch()
	update(@User('id') userId: number, @Body() data: UpdateUserDto): Promise<Record<string, any>> {
		return this.userService.update(userId, data);
	}

	@Delete()
	delete(@User('id') userId: number): Promise<Record<string, any>> {
		return this.userService.delete(userId);
	}
}
