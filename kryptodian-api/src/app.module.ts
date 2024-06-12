import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { PortfolioEntity } from './entity/portfolio.entity';
import { CryptoEntity } from './entity/crypto.entity';
import { UserModule } from './module/user.module';
import { PortfolioModule } from './module/portfolio.module';
import { CryptoModule } from './module/crypto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'kryptodian',
      entities: [UserEntity, PortfolioEntity, CryptoEntity],
      synchronize: true,
    }),
    UserModule,
    PortfolioModule,
    CryptoModule,
  ],
})
export class AppModule {}
