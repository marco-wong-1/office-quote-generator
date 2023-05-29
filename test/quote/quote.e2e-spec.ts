import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './../../src/quote/quote.entity';
import { QuoteModule } from './../../src/quote/quote.module';

describe('QuoteController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'office_quotes.sql',
          entities: [Quote],
          synchronize: true,
        }),
        QuoteModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Get all quotes [GET /quotes]', () => {
    return request(app.getHttpServer())
      .get('/quotes')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });
  
  it('Get random quote [GET /quotes/random]', () => {
    return request(app.getHttpServer())
      .get('/quotes/random')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });

  it('Get all quotes [GET /quotes/:id]', () => {
    return request(app.getHttpServer())
      .get('/quotes/0')
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeDefined();
      });
  });
});
