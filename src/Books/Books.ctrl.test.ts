import BooksController from './Books.ctrl';
import { IBooksRepository } from './Books.type';

describe('BooksController', () => {
  let controller: BooksController;
  let repository: jest.Mocked<IBooksRepository>;

  beforeEach(() => {
    repository = {
      getPublicBooks: jest.fn().mockResolvedValue([
        { name: 'Book 1', author: 'Author 1' },
      ]),
      getPrivateBooks: jest.fn().mockResolvedValue([]),
      addBook: jest.fn().mockResolvedValue(true),
    };

    controller = new BooksController(repository);
  });

  it('should fetch public books', async () => {
    await controller.fetchBooks('public');
    expect(repository.getPublicBooks).toHaveBeenCalledWith('nick');
    expect(controller.booksListVm).toHaveLength(1);
    expect(controller.booksListVm[0].visibleName).toBe('Author 1: Book 1');
  });

  it('should update user', () => {
    controller.updateUser('newUser');
    expect(controller.user).toBe('newUser');
  });
});