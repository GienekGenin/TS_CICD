import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ schema: 'public', name: 'role' })
export class Role {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 255 })
  name: string;
}
