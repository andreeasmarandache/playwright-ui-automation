# 🎭 Playwright UI Automation – Testaurant

This repository contains a UI automation framework built with **Playwright + JavaScript**, structured using the **Page Object Model (POM)** pattern and integrated with **GitHub Actions (CI)**.

The project represents a structured transition from Selenium-based automation to modern Playwright architecture and tooling.

---

## 🚀 Tech Stack

- Playwright Test
- JavaScript (ES Modules)
- Page Object Model (POM)
- Custom Fixtures
- GitHub Actions (CI)
- Chrome (local execution)
- Chromium (CI execution)

---

## 📁 Project Structure

playwright-ui-automation/  
│  
├── playwright.config.js  
│  
├── src/  
│   └── pages/  
│       ├── BasePage.js  
│       ├── HomePage.js  
│       └── components/  
│           ├── MenuSection.js  
│           └── CartSection.js  
│  
├── tests/  
│   ├── fixtures/  
│   │   └── baseTest.js  
│   │  
│   └── e2e/  
│       ├── testaurant-home.spec.js  
│       ├── menu-search.spec.js  
│       └── cart-subtotal.spec.js  
│  
└── README.md  

---

## 🏗 Architecture Overview

### Page Object Model (POM)

The framework follows the Page Object Model pattern:

### Component-Based Sections

The framework uses a component-based structure inside pages:

- `MenuSection` – encapsulates search functionality and menu-related locators.
- `CartSection` – encapsulates cart summary, subtotal logic, and cart-related assertions.

This keeps `HomePage` clean and improves scalability and maintainability.

- **BasePage.js**  
  Contains shared navigation logic.

- **HomePage.js**  
  Encapsulates:
  - Page locators
  - Page-level actions
  - Search functionality

This keeps test files clean and focused only on assertions.

---

### Custom Fixture

A custom fixture (`baseTest.js`) extends Playwright’s test object to inject a ready-to-use `homePage` instance into tests.

This removes repetitive navigation logic and centralizes setup behavior.

---

## 🧪 Implemented Test Scenarios

### ✅ Smoke Test – Page Load

- Navigate to Testaurant
- Verify correct URL
- Verify page is visible

File:
tests/e2e/testaurant-home.spec.js

---

### ✅ Positive Search Test

Scenario:
- Search for "Pasta"
- Verify "Carbonara Pasta" is visible

File:
tests/e2e/menu-search.spec.js

---

### ✅ Cart Subtotal Validation (Add to Cart)

**Scenario:**
- Search for "Pasta"
- Add "Carbonara Pasta" to cart
- Extract item price (RON value)
- Verify that **Subtotal** matches the product price (single item)

File:
tests/e2e/cart-subtotal.spec.js

---

## ▶️ Running Tests

Run all tests:

    npx playwright test

Run a specific test file:

    npx playwright test tests/e2e/menu-search.spec.js

Run using specific project (local Chrome):

    npx playwright test --project=chrome

Run in headed mode (see browser):

    npx playwright test --project=chrome --headed

Run in debug mode (step-by-step execution):

    npx playwright test tests/e2e/menu-search.spec.js --project=chrome --headed --debug

Debug mode includes:
- Playwright Inspector
- Step-by-step execution
- Locator picker tool

---

## 🔍 Locator Strategy

Locators were identified using:

    npx playwright codegen --channel=chrome https://apps.qualiadept.eu/testaurant/

and:

    npx playwright test --debug

Primary locator strategy:
- getByRole() (preferred for accessibility and stability)

Example:

    getByRole('textbox', { name: 'Search menu' })

---

## ⚙️ Configuration Highlights

### Base URL

Configured in playwright.config.js:

https://apps.qualiadept.eu/testaurant/

---

### Local vs CI Configuration

The configuration differentiates between local execution and GitHub Actions:

Local:
- Uses installed Chrome
- Video disabled (avoids ffmpeg dependency)
- Faster execution

GitHub Actions:
- Uses Chromium
- Trace enabled on retry
- Screenshot on failure
- Video on failure

Conditional logic:

    const isGitHubActions = !!process.env.GITHUB_ACTIONS;

---

## 🐛 Debugging & Lessons Learned

During development, several real-world issues were encountered and resolved:

- Windows path issues when running specific test files
- BaseURL behavior with goto('/')
- Differences between local and CI rendering
- ffmpeg dependency when enabling video
- CI timeouts due to stricter headless execution

These were resolved by:
- Adjusting configuration per environment
- Improving navigation anchors
- Using debug mode and trace files
- Making configuration CI-aware

---

## 🎯 What This Project Demonstrates

- Clean Playwright project setup
- Proper Page Object Model structure
- Custom fixture usage
- CI integration with GitHub Actions
- Debug-first automation development
- Structured migration mindset from Selenium to Playwright

---

## 📈 Future Improvements

- Test tagging (@smoke, @regression)
- Advanced list assertions
- Reporting integration (Allure)
- Parallel execution strategy
- Test data management improvements

---

## 👩‍💻 Learning Context

This project represents a structured transition from Selenium-based automation to Playwright, focusing on:

- Modern tooling
- Built-in auto-waiting
- Robust locator strategies
- CI-aware configuration
- Maintainable test architecture
