import { EntityRepository, Repository } from 'typeorm';
import { ExpenseEntity } from './expense.entity';

@EntityRepository(ExpenseEntity)
export class ExpenseRepository extends Repository<ExpenseEntity> {}
