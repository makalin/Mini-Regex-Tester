# Mini Regex Tester

## Overview
Mini Regex Tester is a simple offline regex tester built using Electron. This lightweight application allows users to quickly write and test regular expressions (regex) in a user-friendly interface. The app runs on macOS, Windows, and Linux.

## Features
- **Offline Usage:** No internet connection required.
- **Cross-Platform:** Works on Windows, macOS, and Linux.
- **Intuitive Interface:** User-friendly interface to test and visualize regex patterns.
- **Real-Time Feedback:** Instant feedback as you type your regex.

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (Latest LTS version recommended)
- **npm** (Node package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mini-regex-tester.git
   cd mini-regex-tester
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Usage
To start the application, run the following command:
```bash
npm start
```
This will launch the Mini Regex Tester application.

## File Structure
```
mini-regex-tester/
├── package.json  # Project metadata and scripts
├── main.js       # Electron main process file
├── index.html    # User interface (HTML)
├── style.css     # Styling for the app (optional, if exists)
└── renderer.js   # Client-side JavaScript logic (optional, if exists)
```

## Scripts
- **`npm start`**: Starts the application.
- **`npm run build`**: Builds the application using Electron Builder.

## Technologies Used
- **Electron**: Used for creating cross-platform desktop apps.
- **HTML/CSS/JavaScript**: For the user interface and logic.

## Development
If you'd like to contribute, follow these steps:
1. Fork the project.
2. Create a feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

---

Happy Regex Testing!
