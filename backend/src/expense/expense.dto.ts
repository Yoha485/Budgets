import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExpenseDto {
	@IsString()
	name: string;

	@IsNumber()
	cost: number;

	@IsNumber()
	categoryId: number;
}

export class UpdateExpenseDto {
	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	cost: number;

	@IsOptional()
	@IsNumber()
	categoryId: number;
}
