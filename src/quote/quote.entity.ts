import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Quote {
    @PrimaryColumn()
    quote_id: number;

    @Column()
    quote: string;

    @Column()
    character: string;
}