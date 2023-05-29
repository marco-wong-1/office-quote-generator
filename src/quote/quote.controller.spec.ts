import { Test, TestingModule } from '@nestjs/testing';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { Quote } from './quote.entity';

const mockAllQuotes: Quote[] = [
  {
    quote_id: 0,
    quote: 'mock quote 1',
    character: 'Michael',
  },
  {
    quote_id: 1,
    quote: 'mock quote 2',
    character: 'Michael',
  },
];

describe('QuoteController', () => {
  let quoteController: QuoteController;
  let quoteService: QuoteService;

  beforeEach(async () => {
    const quote: TestingModule = await Test.createTestingModule({
      controllers: [QuoteController],
      providers: [
        {
          provide: QuoteService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mockAllQuotes),
            findRandom: jest
              .fn()
              .mockResolvedValue(
                mockAllQuotes[Math.floor(Math.random()) * mockAllQuotes.length],
              ),
            findOne: jest.fn().mockImplementation((id: number) => {
              return {
                quote_id: id,
                quote: 'random mock quote',
                character: 'Michael',
              };
            }),
          },
        },
      ],
    }).compile();

    quoteController = quote.get<QuoteController>(QuoteController);
    quoteService = quote.get<QuoteService>(QuoteService);
  });

  describe('findAll()', () => {
    it('should find all quotes', async () => {
      const allQuotes = await quoteController.findAll();
      expect(quoteService.findAll).toHaveBeenCalled();
      expect(allQuotes).toEqual(mockAllQuotes);
    });
  });

  describe('findRandom()', () => {
    it('should return 1 quote', async () => {
      const randomQuote = await quoteController.findRandom();
      expect(quoteService.findRandom).toHaveBeenCalled();
      expect(mockAllQuotes).toContain(randomQuote);
    });
  });

  describe('findOne()', () => {
    it('should return quote with given quote_id', async () => {
      const randomId = 1;
      const quoteWithId = await quoteController.findOne(randomId);
      expect(quoteService.findOne).toHaveBeenCalled();
      expect(quoteWithId).toHaveProperty('quote_id', randomId);
    });
  });
});
