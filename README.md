# Dev Stack

A modern React + TypeScript application built to explore web development technologies and visually assemble a custom tech stack in real-time.

---

## 💡 Overview & Learning Goals

This project was built to practice core React concepts such as state management, component composition, prop drilling, and side-effects handling. 

While building this, I aimed to achieve three main UI/UX goals:
1. Load dynamic data from a local JSON dataset gracefully with a dynamic loading state.
2. Prevent duplicate entries in the user's selected list while keeping the state synchronized across both the grid and sidebar components.
3. Provide crisp UI feedback using customizable toast notifications whenever an interactive action occurs.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Library:** React (with TypeScript for strict type-checking)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 + DaisyUI
- **Icons & UI Extras:** `react-icons`
- **Notifications:** `react-toastify`

---

## ✨ Key Features

- **Interactive Technology Grid:** Displays 12 different technologies with ratings, difficulty levels, and categorized badges.
- **Smart Duplicate Prevention:** Clicking "Add to Stack" checks if the item is already selected. If present, it triggers a warning toast; otherwise, it appends the item and visually disables the action button with a `✓ Added` state.
- **Dynamic Stack Sidebar:** Real-time updates showing total item counts, individual remove action (`✕`), and a one-click "Remove All" stack reset feature.
- **Clean Responsive Layout:** Built using modern flexbox & grid utility classes, providing a smooth layout transition across mobile, tablet, and desktop views.

---

## 📝 React Concept Q&A

### 1. What is JSX, and why is it used in React?
**My Answer:**  
JSX (JavaScript XML) is a syntax extension that allows us to write HTML-like elements directly inside JavaScript code. I prefer using JSX because it makes component templates visual and intuitive to read. Under the hood, Babel transpiles JSX into `React.createElement()` calls, but writing raw JS elements manually would quickly become tedious and hard to maintain in large applications.

### 2. What is the difference between props and state?
**My Answer:**  
- **Props (Properties):** Immutable data passed down from a parent component to a child component. A child component receives props as read-only parameters and cannot modify them directly.
- **State:** Internal, mutable data managed directly within a component using hooks like `useState`. When component state changes, React automatically re-renders that component to update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
**My Answer:**  
`useState` enables functional components to maintain local memory between renders. In this project, I utilized `useState` in a few key places:
- `technologies`: Holds the array of tech items fetched from our JSON data.
- `loading`: Tracks boolean status (`true`/`false`) while fetching data.
- `stack`: Stores the array of technologies selected by the user.
- Component-level state in `Navbar` to manage mobile dropdown toggles.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**My Answer:**  
`useEffect` handles side-effects (operations outside the standard render flow, such as API calls, subscriptions, or manual DOM tweaks). In my `Technologies` component, I used `useEffect` with an empty dependency array (`[]`) so that the `fetch('/data/technologies.json')` request runs exactly once when the component initially mounts onto the DOM.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**My Answer:**  
React relies on unique `key` props to keep track of individual elements across re-renders during its reconciliation process. When items are added, removed, or reordered, keys help React identify *exactly* which item changed so it only updates that specific DOM node. Without unique keys, React might re-render unnecessary nodes or cause unexpected UI bugs.

### 6. What is conditional rendering? Show one place you used it.
**My Answer:**  
Conditional rendering is the practice of rendering specific UI elements based on evaluated JavaScript logic or state conditions.  
**Example from my project:**  
In `YourStack.tsx`, I evaluated the length of the stack array:
```tsx
{stack.length === 0 ? (
  <p className="text-sm text-base-muted">
    No technologies selected yet. Click "Add to Stack" on any card to get started.
  </p>
) : (
  <div className="flex flex-col gap-3">
    {/* Stack list mapping */}
  </div>
)}