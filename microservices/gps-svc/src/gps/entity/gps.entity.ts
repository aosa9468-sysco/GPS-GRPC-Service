import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gps extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public imei!: string;

  @Column({ type: 'varchar' })
  public longitude!: string;

  @Column({ type: 'varchar' })
  public latitude!: string;

}