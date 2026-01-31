# IT23206014_V3 - Singlish to Sinhala Translator Test Suite

## Overview

This project contains a comprehensive automated test suite for the **Swift Translator** web application, which converts Singlish (English phonetic transcription of Sinhala) to proper Sinhala script.

## Project Details

- **Application**: Swift Translator (https://www.swifttranslator.com/)
- **Purpose**: Automated testing of Singlish-to-Sinhala translation functionality
- **Test Framework**: Playwright
- **Language**: JavaScript
- **Assignment**: IT23206014_V3

## Features Tested

The test suite includes:
- **24 Positive Test Cases**: Various scenarios including greetings, complex sentences, narratives, and edge cases
- **10 Negative Test Cases**: Invalid inputs, stress tests, and boundary conditions
- **1 UI Test**: User interface validation
- **Total**: 35 comprehensive test scenarios

### Test Categories

1. **Positive Scenarios**: Valid Singlish inputs that should translate correctly
   - Daily greetings and phrases
   - Complex sentences with time and conditions
   - Long narrative paragraphs
   - Seasonal greetings
   - Mixed case and formatting

2. **Negative Scenarios**: Invalid or edge-case inputs
   - Ambiguous informal commands
   - Missing spaces between words
   - Extreme word joining
   - Improper casing
   - Complex sentences with typos
   - Multiple spaces between words
   - Stress testing

3. **UI Tests**: Application interface validation

## Project Structure

```
.
├── tests/
│   ├── assignment.spec.js    # Main test suite (35 test cases)
│   └── example.spec.js       # Example tests
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── README.md                 # This file
├── playwright-report/        # Test execution reports
└── test-results/             # Test result artifacts
```

## Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/malindujayawickrama462/IT23206014_V3.git
   cd IT23206014_V3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run specific test file:
```bash
npx playwright test tests/assignment.spec.js
```

### Run tests in headed mode (visible browser):
```bash
npx playwright test --headed
```

### Run with specific browser:
```bash
npx playwright test --project=chromium
```

### Run in debug mode:
```bash
npx playwright test --debug
```

### Run UI mode (interactive):
```bash
npx playwright test --ui
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Dependencies

- **@playwright/test**: ^1.58.1 - End-to-end testing framework
- **@types/node**: ^25.1.0 - TypeScript definitions for Node.js

## Test Configuration

Playwright is configured in `playwright.config.js` with settings for:
- Multiple browsers (Chromium, Firefox, WebKit)
- Base URL and timeout settings
- Screenshot and video capture on failures
- Parallel test execution

## Test Execution Details

- **Input Field**: Textarea with placeholder "Type in Singlish..."
- **Output Field**: Div with class `.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap`
- **Wait Time**: 3 seconds per translation (accounts for processing)
- **Expected Behavior**: Accurate Singlish to Sinhala script conversion

## Repository

- **GitHub**: [malindujayawickrama462/IT23206014_V3](https://github.com/malindujayawickrama462/IT23206014_V3)
- **Issues**: [Report Issues](https://github.com/malindujayawickrama462/IT23206014_V3/issues)

## License

ISC

## Author

Malindu Jayawickrama

---

**Last Updated**: January 2026