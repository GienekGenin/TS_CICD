import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'public', name: 'users' })
export class Users {
  @PrimaryColumn({ type: 'integer' })
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;
}
