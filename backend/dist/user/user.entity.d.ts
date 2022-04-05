import { AbstractEntity } from 'src/common/abstract-entity';
export declare class UserEntity extends AbstractEntity {
    email: string;
    username: string;
    password: string;
    comparePassword(attempt: string): boolean;
    toJson(): Record<string, any>;
}
