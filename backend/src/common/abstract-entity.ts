import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity extends BaseEntity {
	@PrimaryGeneratedColumn('increment')
	id: number;

	@CreateDateColumn()
	created: Date;

	@UpdateDateColumn()
	updated: Date;
}
