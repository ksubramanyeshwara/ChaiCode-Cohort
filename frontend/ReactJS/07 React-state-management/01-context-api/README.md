# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Context API

It is a built in feature that allows you to manage and share global state across multiple components without passing props manually through the components tree.

## Why Context API?

- **Prop Drilling:** Passing props down through multiple levels of nested components can become cumbersome and difficult to maintain. Context API helps avoid this.
- **Global State:** It provides a way to share data that is considered "global" for a tree of React components, such as authenticated user, theme, or language.

## How to use Context API

1. **Create a Context:** Use `createContext()` to create a Context object 
2. **Context Provider:** Wrap your component that need to access the data/context with a `Context.Provider`.
3. **Consume the Context:**
    - **`useContext` Hook:** The most common way to consume context in functional components. It takes the context object as an argument and returns the current context value.

