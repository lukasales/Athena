import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Footer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    namedata: string

    @Column()
    textdata: string | number

}
