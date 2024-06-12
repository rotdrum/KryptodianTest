import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CryptoEntity } from 'src/entity/crypto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CryptoService {
  constructor(
    @InjectRepository(CryptoEntity)
    private readonly cryptoRepository: Repository<CryptoEntity>,
  ) {}

  async createCrypto(name: string, symbol: string, logoUrl: string): Promise<CryptoEntity> {
    const crypto = this.cryptoRepository.create({ name, symbol, logoUrl });
    return this.cryptoRepository.save(crypto);
  }

  async findAllCryptos(): Promise<CryptoEntity[]> {
    return this.cryptoRepository.find();
  }

  async findCryptoById(id: number): Promise<CryptoEntity | undefined> {
    return this.cryptoRepository.findOne({ where: { id } });
  }
}
