import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quote } from './quote.entity';

@Injectable()
export class QuoteService {
  constructor(
    @InjectRepository(Quote)
    private readonly quotesRepository: Repository<Quote>,
  ) {}

  findAll(): Promise<Quote[]> {
    return this.quotesRepository.find();
  }

  findOne(id: number): Promise<Quote> {
    return this.quotesRepository.findOneBy({ quote_id: id });
  }

  async findRandom(): Promise<Quote | null> {
    const totalQuotes = await this.quotesRepository.count()
    const randomId = Math.floor(Math.random() * totalQuotes)
    return this.quotesRepository.findOneBy({ quote_id: randomId })
  }
}