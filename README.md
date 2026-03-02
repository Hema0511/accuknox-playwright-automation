# AccuKnox QA Trainee – Automation Task

## Project Overview
This project is created as part of the AccuKnox QA Trainee assignment.
It includes both manual testing documentation and automation testing.

The automation covers the User Management – Admin module of the OrangeHRM demo application.

Application URL:
https://opensource-demo.orangehrmlive.com/

## Tech Stack
- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

## Project Structure
AccuKnox-user-management-tests
- pages
  - LoginPage.js
  - AdminPage.js
- tests
  - userManagement.spec.js
- playwrightconfig.cjs
- package.json
- package-lock.json
- README.md

## Manual Test Cases
Manual test cases are prepared in Excel format and include:
- Navigate to Admin Module
- Add New User
- Search User
- Edit User
- Validate Updated User
- Delete User

File: AccuKnox_Manual_Test_Cases.xlsx

## Automated Test Scenarios
Automated using Playwright:
1. Login to OrangeHRM
2. Navigate to Admin module
3. Add new user

Automation follows Page Object Model for maintainability.

## How to Run the Tests

1. Install dependencies:
npm install

2. Run tests:
npx playwright test

3. Run tests in headed mode:
npx playwright test --headed

4. View HTML report:
npx playwright show-report

## Problem Statement 2: Python Automation Scripts

### 1. System Health Monitoring Script

**File:** `scripts/system_health.py`

**Description:**
- Monitors CPU usage
- Monitors memory usage
- Monitors disk usage
- Shows warning if usage exceeds threshold

**How to Run:**
python scripts/system_health.py

### 2. Log File Analyzer Script

**File:** `scripts/log_analyzer.py`

**Description:**
- Reads log file
- Counts ERROR, WARNING, INFO messages
- Finds most frequent error messages

**Sample Log File:** `scripts/sample.log`

**How to Run:**
python scripts/log_analyzer.py

### Python Scripts Folder Structure
scripts
- system_health.py
- log_analyzer.py
- sample.log

## Author
Hema