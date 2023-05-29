import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuoteService } from './quote.service';
import { Quote } from './quote.entity';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  findAll(): Promise<Quote[]> {
    return this.quoteService.findAll();
  }

  @Get('random')
  findRandom(): Promise<Quote> {
    return this.quoteService.findRandom();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Quote> {
    return this.quoteService.findOne(id);
  }
}
