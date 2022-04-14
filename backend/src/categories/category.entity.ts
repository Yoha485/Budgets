import { AbstractEntity } from 'src/common/abstract-entity';
import { ExpenseEntity } from 'src/expense/expense.entity';
import { WalletEntity } from 'src/wallet/wallet.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('categories')
export class CategoryEntity extends AbstractEntity {
	@Column()
	name: string;

	@Column()
	color: string;

	@Column()
	walletId: number;

	@ManyToOne(() => WalletEntity, (wallet) => wallet.categories, {	onDelete: 'CASCADE', })
	@JoinColumn({ name: 'walletId' })
	wallet: WalletEntity;

  @OneToMany(() => ExpenseEntity, (expense) => expense.category)
  expenses: ExpenseEntity[];
}
