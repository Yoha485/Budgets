import { Column, Entity, Unique } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { IsEmail, MinLength } from 'class-validator';
import { AbstractEntity } from 'src/common/abstract-entity';
import { Exclude, instanceToPlain } from 'class-transformer';

@Entity('users')
@Unique('users_unique', ['email', 'username'])
export class UserEntity extends AbstractEntity {
  @IsEmail()
  @Column()
  email: string;

  @Column()
  username: string;

  @MinLength(4)
  @Column()
  @Exclude()
  password: string;

  comparePassword(attempt: string): boolean {
    return bcrypt.compareSync(attempt, this.password);
  }

  toJson(): Record<string, any>{
    return instanceToPlain(this);
  }
}
