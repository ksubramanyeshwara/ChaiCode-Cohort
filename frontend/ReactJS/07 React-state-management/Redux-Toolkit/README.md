# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Redux Toolkit

RTK is the official, opinionated, batteries-included toolset for efficient Redux development.

## Why Redux Toolkit?

- Reduces boilerplate code by providing utilities like `configureStore`, `createSlice` and `createAsyncThunk`.
- Simplify common tasks like store setup, reducer logic, and async handling.
- Improved Performance: RTK uses Immer for efficient immutable state updates.

## Redux Toolkit terms

- Store: Container that holds entire state of your application.
- Slice: Represents one feature/section that manages the specific state(user, cart, counter).
- Action: It describes what happened. It is the event that triggers the state change.
- Reducer: Function that changes the state based on an action.
- Dispatch: Function you use to send an action to the store.
- Selector: Function to read data from the store.
- Async Thunk: Handles the async operations (like API calls).
- Provider: React component that connects your app to the Redux store.
- Immer: It lets you "mutate" state directly while keeping it immutable.
  - You write code as if mutating the state directly.
  - Immer detects the changes you made.
  - Immer creates a new state object with those changes, leaving the original state intact.
  - You write `state.value += 1;`
  - Immer does `return { ...state, value: state.value + 1 };`
