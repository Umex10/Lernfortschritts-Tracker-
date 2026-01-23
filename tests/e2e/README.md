# E2E Tests

## Test Data Strategy

The E2E tests use **dummy test data** from `tests/fixtures/dummyData.js` instead of the real `module.json` file. This ensures:

- **Predictable test scenarios**: Tests always run against known data
- **No side effects**: Real production data remains untouched
- **Isolated testing**: Tests don't depend on external file changes

## How It Works

1. **Test Setup** (`beforeEach`):
   - Intercepts HTTP requests to `module.json` using Playwright's route interception
   - Responds with test data from `dummyData.js`
   - Injects test data into `localStorage`
   - Reloads the page to trigger normal app flow

2. **Test Execution**:
   - The app runs normally but uses test data
   - All DOM interactions are real (true E2E)
   - Filters, searches, and UI interactions work as in production

3. **Production vs Tests**:
   - **Production**: App loads real `module.json` from server
   - **Tests**: Playwright intercepts and provides test data
   - Same codebase, different data sources

## Test Organization

Tests are split into logical feature files for better maintainability:

- **[initialization.e2e.spec.js](initialization.e2e.spec.js)** – Tests initial page load and data rendering
- **[status-filter.e2e.spec.js](status-filter.e2e.spec.js)** – Tests status filter functionality (todo, in progress, done, all)
- **[search-filter.e2e.spec.js](search-filter.e2e.spec.js)** – Tests search functionality with valid and invalid queries
- **[combined-filters.e2e.spec.js](combined-filters.e2e.spec.js)** – Tests simultaneous search and status filtering

## Adding New Test Data

Edit `tests/fixtures/dummyData.js` to add or modify test modules. Make sure the structure matches `module.json`:

```javascript
{
  id: number,                    // Unique identifier
  title: string,                 // Task title
  category: string,              // Category (optional)
  status: "todo" | "in progress" | "done",  // Task status
  description: string,           // Task description (optional)
  default: boolean,              // Whether it's a default task
  archive: [{                    // Status change history (optional)
    status: string,
    timestamp: string
  }],
  waitingFor: number            // ID of task this depends on (optional)
}
```

## Running Tests

```bash
# Run all tests in headless mode
npm test

# Run tests with visible browser
npm run test:headed

# Run specific test file
npx playwright test tests/e2e/status-filter.e2e.spec.js
```

## Best Practices

1. **Use test data**: Always use `testModules` from `dummyData.js`, never rely on production data
2. **Wait for elements**: Use `waitForSelector` before interacting with elements
3. **Isolated tests**: Each test should be independent and not rely on other tests
4. **Descriptive names**: Test names should clearly describe what is being tested
5. **BeforeEach setup**: Always include the full setup in `beforeEach` for consistency
