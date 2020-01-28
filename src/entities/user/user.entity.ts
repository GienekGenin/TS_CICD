import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Role } from '../role/role.entity';

@Entity({ schema: 'public', name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id?: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @ManyToOne(
    type => Role,
    role => role.id,
  )
  @JoinColumn()
  role: number;
}
