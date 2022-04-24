import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
	@IsString()
	name: string;

	@IsString()
	color: string;
}

export class UpdateCategoryDto {
	@IsOptional()
	@IsString()
	name: string;

	@IsOptional()
	@IsString()
	color: string;
}
