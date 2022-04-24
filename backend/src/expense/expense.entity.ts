import { CategoryEntity } from 'src/categories/category.entity'
import { AbstractEntity } from 'src/common/abstract-entity'
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'

@Entity('expenses')
export class ExpenseEntity extends AbstractEntity {
	@Column()
	name: string

	@Column()
	cost: number

	@Column()
	categoryId: number

	@ManyToOne(() => CategoryEntity, (category) => category.expenses, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'categoryId' })
	category: CategoryEntity
}
