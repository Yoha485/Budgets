import { Column, Entity } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { IsEmail, MinLength } from 'class-validator';
import { AbstractEntity } from 'src/common/abstract-entity';
import { Exclude, instanceToPlain } from 'class-transformer';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
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
