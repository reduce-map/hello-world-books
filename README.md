- isPublic, isPrivate book
- Loading state
- shared index.ts for wrapping all exports
- components Atomic Design, than Shared -> shared
- console error -> notifcation service

- на будущее, но спорно

const fetchBooksByType: Record<BookFilterType, () => Promise<BookList>> = {
public: () => this.repository.getPublicBooks(this.user),
private: () => this.repository.getPrivateBooks(this.user),
};

const books = await (fetchBooksByType[type] ?? (() => Promise.resolve([])))();

- capitalise css - специально добавил чистую функцию

- BookFilterType - make global

- form validation -> declative way
