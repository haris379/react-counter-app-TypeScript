# React TypeScript Counter App

A simple and interactive **Counter Management App** built with **React.js and TypeScript**. This project demonstrates important React concepts such as state management, props, reusable components, array methods, and TypeScript interfaces.

## 🚀 Features

* ➕ Increment counter
* ➖ Decrement counter
* 🗑️ Delete individual counters
* 🔄 Reset all counters
* ➕ Add new counters
* 📊 Display total active counters
* ⚛️ Reusable React components
* 🔷 TypeScript for type safety
* 📱 Responsive UI using Bootstrap

## 🛠️ Technologies Used

* **React.js**
* **TypeScript**
* **Vite**
* **Bootstrap**
* **CSS**
* **JavaScript / ES6+**

## 📂 Project Structure

```text
src/
├── components/
│   ├── Counters.tsx
│   ├── Counter.tsx
│   └── Navbar.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

## 🧠 Concepts Practiced

This project was created to practice the following concepts:

### React

* `useState`
* Props
* Event handling
* Component communication
* Conditional rendering
* Rendering lists using `map()`

### TypeScript

* Interfaces
* Type annotations
* Typed state
* Typed function parameters
* Type-safe props

### JavaScript

* `map()`
* `filter()`
* Spread operator
* Array manipulation
* Object manipulation

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/react-typescript-counter.git
```

Navigate into the project:

```bash
cd react-typescript-counter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL shown in your terminal.

## 📸 How It Works

The application maintains a list of counters using React's `useState`.

Each counter contains:

```ts
interface CounterObject {
  id: number;
  value: number;
}
```

Users can increment, decrement, reset, delete, and add counters. The application also keeps track of how many counters currently have a value greater than zero.

## 🎯 Purpose of the Project

The main purpose of this project is to strengthen my understanding of **React with TypeScript**, particularly how components communicate with each other and how React state should be updated without directly mutating existing state.


