# EPAM Client Work Test

## Test Scenario

This test automates the following user workflow on the EPAM website:

1. **Navigate to EPAM Website**: Open https://www.epam.com/
2. **Select Services Menu**: Click on "Services" in the header navigation menu
3. **Access Client Work**: Click the "Explore Our Client Work" link
4. **Verify Content**: Confirm that "Client Work" text is visible on the resulting page

## Test File

- **Location**: `tests/epam-client-work.spec.ts`
- **Framework**: Playwright Test (TypeScript)
- **Browser**: Chromium (default)

## Test Cases

### Primary Test: Full Workflow
- **Test Name**: `should navigate to Services, click Explore Our Client Work, and verify Client Work text`
- **Steps**:
  1. Navigate to https://www.epam.com/
  2. Wait for page to load (networkidle)
  3. Locate and click "Services" menu item in header
  4. Wait for Services page to load
  5. Locate and click "Explore Our Client Work" link
  6. Wait for Client Work page to load
  7. Verify "Client Work" text is visible
  8. Verify "Client Work" text appears in page content

### Secondary Tests
- **Services Menu Accessibility**: Verifies the Services menu is accessible from the header
- **Client Work Content Verification**: Fallback test with conditional navigation to verify Client Work page content

## Selectors Used

- **Header Navigation**: `page.locator('header')`
- **Services Link**: `header.locator('a, button').filter({ hasText: /^Services$/i })`
- **Explore Client Work Link**: `page.locator('a').filter({ hasText: /Explore Our Client Work/i })`
- **Client Work Text**: `page.locator('text=/Client Work/i')`

## Running the Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/epam-client-work.spec.ts

# Run with UI mode
npx playwright test --ui

# Run with headed browser
npx playwright test --headed
```

## Test Execution Notes

- Tests use `waitForLoadState('networkidle')` to ensure pages are fully loaded
- Selectors are case-insensitive to handle variations in text
- Tests include fallback options for robust navigation
- All assertions verify visibility and content presence

## Browser Compatibility

- Chromium (default)
- Firefox (configurable)
- WebKit (configurable)

## Notes

The tests are designed to be maintainable and reusable. They use Playwright's recommended best practices:
- Locators with text filters for resilience
- Proper wait strategies
- Clear test descriptions
- Multiple assertion approaches for verification
