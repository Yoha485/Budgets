import { CategoryEntity } from 'src/categories/category.entity';
import { AbstractEntity } from 'src/common/abstract-entity';
import { WalletEntity } from 'src/wallet/wallet.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('expenses')
export class ExpenseEntity extends AbstractEntity {
	@Column()
	name: string;

	@Column()
	cost: number;

	@Column()
	categoryId: number;

	@ManyToOne(() => CategoryEntity, (category) => category.expenses, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'categoryId' })
	category: CategoryEntity;

	@Column()
	walletId: number;

	@ManyToOne(() => WalletEntity, (wallet) => wallet.expenses, { onDelete: 'CASCADE' })
	@JoinColumn({ name: 'walletId' })
	wallet: WalletEntity;
}
