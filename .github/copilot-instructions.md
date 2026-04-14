# Playwright Testing Project Instructions

## Architecture
This is a Playwright end-to-end testing project focused on browser automation and testing. Tests are organized in the `tests/` directory, with configuration in `playwright.config.ts`. The setup supports parallel execution across Chromium, Firefox, and WebKit browsers, with CI-specific settings for retries and single-worker mode.

## Key Files
- `playwright.config.ts`: Central configuration defining test directory (`./tests`), parallel execution, CI retries, HTML reporting, trace collection on retries, and browser projects.
- `tests/`: Main test suites, e.g., `example.spec.ts` for basic navigation and assertion tests, `Week1/assrtion.spec.ts` for assertion patterns.
- `specs/`: Directory for test plans and documentation.
- `playwright-report/`: Generated HTML reports after test runs.
- `test-results/`: Trace files and artifacts from test executions.

## Workflows
- **Running Tests**: Execute `npx playwright test` for all tests. Target specific files with `npx playwright test tests/example.spec.ts`. Use `npx playwright test --headed` for visual debugging.
- **Debugging**: Traces auto-collect on first retry; view via `npx playwright show-trace test-results/...`. Open HTML report at `playwright-report/index.html` for detailed results.
- **CI Integration**: Config forbids `test.only` in CI, applies 2 retries, and uses single worker to avoid flakiness.

## Patterns
- **Test Structure**: Group related tests with `test.describe()`, define individual tests with `test()`.
- **Assertions**: Use soft assertions (`expect(locator).toBeVisible()`) for auto-retrying checks; hard assertions (`await expect(page).toHaveTitle()`) for immediate failures without retry.
- **Locators**: Prefer semantic locators like `page.getByRole('link', { name: 'Get started' })` over CSS selectors.
- **Timeouts**: Override defaults with `test.setTimeout(10000)` for operations needing more time.
- **File Naming**: Test files end in `.spec.ts`; some utility JS files (e.g., `Week1/grade.js`) for supporting logic.

## Examples
From `tests/Week1/assrtion.spec.ts`:
- Soft assertion with retry: `expect(page.locator('text=Example')).toBeVisible();`
- Hard assertion: `await expect(page).toHaveTitle('Example');`

From `tests/example.spec.ts`:
- Page navigation: `await page.goto('https://playwright.dev/');`
- Role-based locator: `await page.getByRole('link', { name: 'Get started' }).click();`