import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'public', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;
}
