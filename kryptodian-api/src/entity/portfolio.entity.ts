import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { UserEntity } from './user.entity';
import { CryptoEntity } from './crypto.entity';

@Entity({ name: 'portfolioes' }) 
export class PortfolioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @ManyToOne(() => CryptoEntity)
  crypto: PortfolioEntity;

  @Column('decimal')
  amount: number;
}
