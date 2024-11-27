# Fast-Test Books App

## Functional Requirements
1. Refactoring the Existing Solution:
   - Separate logic from the UI to implement a "Fast-test" approach.
   - Create a page displaying a list of books with a button to add a book (mocked data).
   - Use the provided API to fetch the list of books.
   - Add a switch to toggle between "All Books" and "Private Books" views.

2. Power-up Task:
   - Implement a counter for private books (e.g., "Your books: 30").
   - Add a toggle (buttons or radio buttons) to switch between "All Books" and "Private Books."

3. Architecture Pattern:
   - Follow the MVP pattern:
     - View: Presentation logic.
     - Controller: A MobX class for observability.
     - Repository (optional): For data service logic if required.

## Non-Functional Requirements
1. Code Quality:
   - Use the following file structure:
     ```
     ComponentName.tsx       - React View, render only
     ComponentName.ctrl.ts   - MobX store for data handling
     ComponentName.models.ts - Models for data fetching and saving
     ```
   - Maintain a clear separation of concerns: store/logic/rendering.

2. Testing:
   - Cover MobX stores with tests (e.g., `ComponentName.ctrl.spec.ts`).
   - Remove unused code and debug messages (`console.debug`).

3. Performance:
   - Use a global MobX store for shared data if needed.

4. Readability:
   - Avoid using `any` types; define explicit types for Views/Models.
   - Minimize logic duplication by consolidating functionality into controllers.

5. Documentation:
   - Include a description of the file structure and responsibilities in the project.
   - Reference MobX async actions usage [MobX Actions Guide](https://mobx.js.org/actions.html).

## Improvements

### Minor
1. Add `isPublic` and `isPrivate` property to each book on UI.
2. Add a loading state.
3. Create a shared `index.ts` file to wrap exports inside a directory.
4. Align atomic design principles for components. Rename the current `Shared` folder to `shared` for consistency.
5. Add a notification service to standardize error handling and improve user feedback.
6. Implement form validation (declarative way) using `react-hook-form` or `formik`.

---

### Improvements
1. Fetch Books by Type:
   Refactor the fetching logic using a clean `Record` structure:
   ```typescript
   const fetchBooksByType: Record<BookFilterType, () => Promise<BookList>> = {
       public: () => this.repository.getPublicBooks(this.user),
       private: () => this.repository.getPrivateBooks(this.user),
   };

   const books = await (fetchBooksByType[type] ?? (() => Promise.resolve([])))();

   return books;
    ```