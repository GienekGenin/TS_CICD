import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'public', name: 'roles' })
export class Roles {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 255 })
  name: string;
}
