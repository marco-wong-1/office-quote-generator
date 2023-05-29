import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Quote } from './quote/quote.entity';
import { QuoteModule } from './quote/quote.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'office_quotes.sql',
      entities: [Quote],
    }),
    QuoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
