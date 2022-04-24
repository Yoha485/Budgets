import { IsOptional, IsString } from 'class-validator'

export class CreateCategoryDto {
	@IsOptional()
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	color: string
}

export class UpdateCategoryDto {
	@IsOptional()
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	color: string
}
