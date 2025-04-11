import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';  

@Entity("persona")
export class Persona {
    @PrimaryGeneratedColumn('identity')
    id: number;

    @Column('int')
    ci: number;

    @Column('varchar', { length: 50 })
    nombres: string;

    @Column('varchar', { length: 50 })
    primer_apellido: string;

    @Column('varchar', { length: 50 })
    segundo_apellido: string;

    @Column('date')
    fecha_nacimiento: Date;
}






