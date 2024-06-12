import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'cryptoes' }) 
export class CryptoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column()
  logoUrl: string;
}
