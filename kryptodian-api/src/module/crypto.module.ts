import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptoController } from 'src/controller/crypto.controller';
import { CryptoEntity } from 'src/entity/crypto.entity';
import { CryptoService } from 'src/service/crypto.service';

@Module({
  imports: [TypeOrmModule.forFeature([CryptoEntity])],
  providers: [CryptoService],
  controllers: [CryptoController],
  exports: [CryptoService],
})
export class CryptoModule {}
