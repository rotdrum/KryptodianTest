import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortfolioController } from 'src/controller/portfolio.controller';
import { PortfolioEntity } from 'src/entity/portfolio.entity';
import { PortfolioService } from 'src/service/portfolio.service';
import { UserModule } from './user.module';
import { CryptoModule } from './crypto.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PortfolioEntity]),
    UserModule,
    CryptoModule
  ],
  providers: [PortfolioService],
  controllers: [PortfolioController],
  exports: [PortfolioService],
})
export class PortfolioModule {}
