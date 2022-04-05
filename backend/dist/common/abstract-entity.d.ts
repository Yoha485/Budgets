import { BaseEntity } from 'typeorm';
export declare abstract class AbstractEntity extends BaseEntity {
    id: number;
    created: Date;
    updated: Date;
}
