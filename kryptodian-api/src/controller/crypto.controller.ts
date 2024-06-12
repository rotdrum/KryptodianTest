import { Body, Controller, Get, Post } from '@nestjs/common';
import { CryptoService } from 'src/service/crypto.service';

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Post()
  async create(@Body() createCryptoDto: any) {
    // push DTO later
    try {
      const createdCrypto = await this.cryptoService.createCrypto(createCryptoDto.name, createCryptoDto.symbol, createCryptoDto.logoUrl);
      return { message: 'Crypto created successfully', crypto: createdCrypto };
    } catch (error) {
      return { message: 'Failed to create crypto', error };
    }
  }
  
  @Get()
  async findAll() {
    return this.cryptoService.findAllCryptos();
  }
}
