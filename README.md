# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project Documentation

## Overview

This project is a simple string calculator built using JavaScript. It handles basic operations for summing numbers from a string input, supports custom delimiters, and ignores certain characters like quotes and colons.

## Process

### 1. Implemented the Calculator Function

I developed a function to process a string input that includes numbers separated by delimiters. The function can handle custom delimiters and ignores non-numeric characters. Here's a summary of the logic:

- **Delimiter Handling**: The function checks if a custom delimiter is specified (e.g., `//;\n`). It then uses this delimiter to split the numbers.
- **Character Ignoring**: Characters like quotes (`"`) and colons (`:`) are ignored in the calculation.
- **Number Summation**: The numbers are parsed, validated, and summed up. Non-numeric characters are excluded.

### 2. Created a React Component

I developed a React component (`CalComp`) that provides a user interface for input and displays the result. The component includes:

- **Input Handling**: Captures user input and updates the state.
- **Calculation Handling**: Calls the calculator function upon form submission and displays the result or any errors.

### 3. Testing and Verification

To ensure the functionality, I tested the calculator function with various input cases to verify it handles custom delimiters, ignores unnecessary characters, and processes inputs correctly.

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
npm install
npm run dev
```
