import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { CryptoService } from 'src/service/crypto.service';
import { PortfolioService } from 'src/service/portfolio.service';
import { UserService } from 'src/service/user.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(
    private readonly portfolioService: PortfolioService,
    private readonly userService: UserService,
    private readonly cryptoService: CryptoService,
  ) {}

  @Post()
  async addCryptoToPortfolio(
    @Body('userId') userId: number,
    @Body('cryptoId') cryptoId: number,
    @Body('amount') amount: number,
  ) {
    const user = await this.userService.findUserById(userId);
    const crypto = await this.cryptoService.findCryptoById(cryptoId);
    return this.portfolioService.createPortfolio(user, crypto, amount);
  }

  @Get()
  async getUserPortfolio(@Request() req) {
    const user = await this.userService.findUserByEmail(req.user.email);
    return this.portfolioService.findPortfoliosByUser(user);
  }
}
