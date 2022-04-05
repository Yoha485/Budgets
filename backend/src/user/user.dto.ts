import {
	IsEmail,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';

export class LoginDto {
	@IsEmail()
	email: string;

	@IsString()
	password: string;
}

export class RegisterDto extends LoginDto {
	@IsString()
	@MinLength(4)
	@MaxLength(20)
	username: string;
}

export class UpdateUserDto {
	@IsEmail()
	@IsOptional()
	email: string;

	@IsOptional()
	@IsString()
	username: string;

	@IsOptional()
	@IsString()
	password: string;
}

export interface AuthPayload {
	id: number;
}
