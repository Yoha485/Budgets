import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExpenseDto {
	@IsString()
	name: string;

	@IsNumber()
	cost: number;
}

export class UpdateExpenseDto {
	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	cost: number;
}
