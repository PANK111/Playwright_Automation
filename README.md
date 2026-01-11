# Playwright Automation Project

This repository contains automated tests using [Playwright](https://playwright.dev/).

## Project Structure

- `tests/`: Contains the test files.
- `playwright.config.js`: Configuration file for Playwright.
- `package.json`: Project dependencies and scripts.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Playwright_Automation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

To run the tests, execute the following command:

```bash
npm test
```

Or run playwright directly:

```bash
npx playwright test
```

## Reports

After running the tests, you can view the report by running:

```bash
npx playwright show-report
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
