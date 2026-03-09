# 📇 Node.js Contacts File Manager

A file-based contact management application built with Node.js. This project demonstrates fundamental backend concepts including file system operations, async/await patterns, ES modules, and modular code architecture.

---

## ✨ Features

### 🗄️ File-Based Data Storage

- Persistent data storage using JSON files
- Automatic file reading/writing with `fs/promises`
- Safe error handling for file operations

### 🎲 Contact Generation

- Generate random contacts with realistic fake data
- Customizable quantity parameter
- Uses `@faker-js/faker` for high-quality mock data

### ➕ Add Contact

- Add single contact with auto-generated UUID
- Automatic timestamp and unique ID assignment
- Instant file update with atomic write operations

### 👁️ View Contacts

- Retrieve and display all stored contacts
- Formatted console output for readability
- Return data for programmatic use

### 🔢 Count Contacts

- Quick count of total contacts in database
- Efficient array length calculation
- Error-resistant implementation

### 🗑️ Remove Contacts

- Remove last contact with confirmation message
- Clear all contacts with single command
- Safe operations with empty-state handling

---

## 🛠️ Technologies Used

- Node.js (JavaScript runtime environment)
- fs/promises (Asynchronous file system operations (async))
- @faker-js/faker (Generate realistic fake contact data)
- ES Modules (Modern JavaScript module system (`import/export`))
- JSON (Lightweight data interchange format)
- npm scripts (Task automation and command shortcuts)

---

## 📁 Project Structure

    nodejs-hw-01/
    ├── src/
    │   ├── constants/
    │   │   └── contacts.js          # Database path constant
    │   ├── db/
    │   │   └── db.json              # Contacts database
    │   ├── scripts/
    │   │   ├── addOneContact.js
    │   │   ├── countContacts.js
    │   │   ├── generateContacts.js
    │   │   ├── getAllContacts.js
    │   │   ├── removeAllContacts.js
    │   │   └── removeLastContact.js
    │   └── utils/
    │       ├── createFakeContact.js
    │       ├── readContacts.js
    │       └── writeContacts.js
    └──    index.js
    ├── .gitignore
    ├── .editorconfig
    ├── .prettierrc
    ├── package.json
    └── README.md

---

## 📦 Available Scripts

| Command               | File Executed                      | Description                |
| --------------------- | ---------------------------------- | -------------------------- |
| `npm run generate`    | `src/scripts/generateContacts.js`  | Generate 5 random contacts |
| `npm run add-one`     | `src/scripts/addOneContact.js`     | Add one random contact     |
| `npm run get-all`     | `src/scripts/getAllContacts.js`    | Display all contacts       |
| `npm run count`       | `src/scripts/countContacts.js`     | Count total contacts       |
| `npm run remove-last` | `src/scripts/removeLastContact.js` | Remove the last contact    |
| `npm run remove-all`  | `src/scripts/removeAllContacts.js` | Remove all contacts        |

---

## 📝 Contact Data Structure

Each contact contains:

```bash
{
  "id": "uuid-string",
  "name": "Full Name",
  "email": "email@example.com",
  "phone": "+1-234-567-8900",
  "jobTitle": "Job Title"
}
```

---

## 🚀 Route Protection Components

- PrivateRoute - Redirects unauthenticated users to login page
- RestrictedRoute - Redirects authenticated users to contacts page

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/nodejs-hw-01.git
```

### 2️⃣ Navigate to project directory

```bash
cd nodejs-hw-01
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run scripts

#### Generate 5 random contacts

```bash
npm run generate
```

#### View all contacts

```bash
npm run get-all
```

#### Count contacts

```bash
npm run count
```

#### Add one more contact

```bash
npm run add-one
```

#### Remove last contact

```bash
npm run remove-last
```

#### Clear all contacts

```bash
npm run remove-all
```

---

## 📌 Purpose of the Assignment

🎯 Learning Objectives

- ✅ Working with Node.js fs/promises module
- ✅ Mastering async/await for asynchronous operations
- ✅ Understanding ES Modules (import/export) syntax
- ✅ Manipulating JSON files for data persistence
- ✅ Structuring code with modular, reusable functions
- ✅ Configuring npm scripts for development workflow
- ✅ Using Faker.js for realistic test data generation
- ✅ Implementing robust error handling patterns
- ✅ Following code style guidelines with ESLint + Prettier

---

## Author

**Kerem Yıldırım**

🟢 Node.js Fundamentals - Homework 01 🟢

---
