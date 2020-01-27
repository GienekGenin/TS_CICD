import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Roles } from '../roles/roles.entity';

@Entity({ schema: 'public', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ type: 'integer' })
  roleId: number;
}
