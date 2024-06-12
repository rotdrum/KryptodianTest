import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PortfolioEntity } from 'src/entity/portfolio.entity';
import { UserEntity } from 'src/entity/user.entity';
import { CryptoEntity } from 'src/entity/crypto.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @InjectRepository(PortfolioEntity)
    private readonly portfolioRepository: Repository<PortfolioEntity>,
  ) {}

  async createPortfolio(user: UserEntity, crypto: CryptoEntity, amount: number): Promise<PortfolioEntity> {
    const portfolio = this.portfolioRepository.create({ user, crypto, amount });
    return this.portfolioRepository.save(portfolio);
  }

  async findPortfoliosByUser(user: UserEntity): Promise<PortfolioEntity[]> {
    return this.portfolioRepository.find({ where: { user }, relations: ['crypto'] });
  }
}
