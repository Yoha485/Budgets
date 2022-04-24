import { EntityRepository, Repository } from 'typeorm'
import { WalletEntity } from './wallet.entity'

@EntityRepository(WalletEntity)
export class WalletRepository extends Repository<WalletEntity> {}
