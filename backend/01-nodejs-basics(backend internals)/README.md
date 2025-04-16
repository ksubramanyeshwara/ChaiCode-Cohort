# NodeJS

NodeJS is a JavaScript runtime environment built on the Chrome V8 JavaScript engine

NodeJS was developed by **Ryan Dahl**, to allow you to run JavaScript on the server side (outside the browser).

Spider Monkey was the original engine to be written for the Netscape browser (Brendan Eich created SpiderMonkey in 1996 while working at Netscape Communications.)

## 🚀 Key Features of Node.js:

- Built on Chrome’s V8 JavaScript engine (very fast).
- Non-blocking, event-driven architecture — handles many requests at once.
  Asynchronous & Event-Driven - Uses non-blocking I/O operations, making it efficient for handling multiple requests simultaneously.
- Single-threaded but highly scalable.
- Comes with npm (Node Package Manager) — to install packages like Express, React, etc.

## 🧱 Core Components of Node.js:

- V8 JavaScript Engine

  - Compiles JavaScript code into machine code.

- libuv - A C-based library that provides:

  - The event loop
  - Asynchronous I/O
  - Thread pool for heavy tasks
  - Filesystem access
  - Networking capabilities

- Node.js Core Modules - Built-in modules to handle:

  - File System (fs): For interacting with the file system.
  - HTTP (http): For creating web servers and making HTTP requests.
  - Path (path): For working with file and directory paths.
  - Operating System (os): For getting information about the operating system.
  - Buffer (buffer): For handling binary data.
  - Stream (stream): For working with streaming data.
  - Events (events) etc.

- Event Loop

  - The heart of Node.js’s non-blocking, async nature.
  - Handles multiple operations without waiting for any to finish.

- Single-threaded Architecture

  - Uses a single thread for most operations.
  - Offloads blocking tasks to background workers via libuv.

- npm (Node Package Manager)

  - Comes with Node.js.
  - Helps install and manage third-party libraries (like express, mongoose, etc.).

> Node.js = V8 (speed) + Libuv (async magic) + Core Modules (basic tools) + npm (extra tools)

### Think of Node.js like a fast food chain:

- V8 = The kitchen (cooks JS code super fast).
- Libuv = The order manager (handles multiple requests efficiently).
- npm = The menu (tons of pre-made "dishes" you can use).

## Other JavaScript Runtime Environments:

### Deno created by Ryan Dahl (same as Node.js)

- Native TypeScript support (no config needed).
- Secure by default (explicit permissions for FS/network access).
- Built-in tools (testing, linting, formatting).
- Uses ES Modules (no require()).
- Compatible with npm packages via CDN.

### Bun created by Jarred Sumner

- Blazing fast (written in Zig, uses JavaScriptCore engine).
- Built-in package manager (faster than npm/yarn), bundler, and test runner.
- Node.js-compatible (runs most npm packages).
- Integrated SQLite, WebSocket, and test runner.
- Built-in support for TypeScript and JSX.

> Bun is a drop-in replacement for NodeJS. Drop-in means a component or library that can be substituted for an existing one without requiring any code changes or configuration adjustments in the application using it.

## Module import in Node.js

1. CommonJS (require()): Older approach, traditional way of importing modules in Node.js. It's synchronous.
2. ECMAScript Modules (ES Modules) (import/export): Modern approach, It's asynchronous in nature but can behave synchronously in Node.js in certain contexts.

### Import and Export in CommonJS

**Importing Modules (CJS)**

```JS
// Import a core module
const fs = require('fs');

// Import an npm package
const axios = require('axios');

// Import a local file
const myModule = require('./myModule.js');
```

**Exporting Modules (CJS)**

```JS

// Export a single function/variable
module.exports = myFunction;

// Export a function
exports.myFunction = function() {
  // ...
};

// Export multiple items
module.exports = { func1, func2 };

// OR (alternative syntax)
exports.func1 = func1;
exports.func2 = func2;
```

### Import and Export in ECMAScript Modules (ES Modules)

Add `type`: `module` in `package.json` OR use `.mjs` file extension.

**Importing Modules (ESM)**

```JS
// Import a core module
import fs from 'fs';

// Import an npm package
import axios from 'axios';

// Import a local file
import { myFunction } from './myModule.js';
```

**Exporting Modules (ESM)**

```JS
// Default export
export default myFunction;

// Named exports
export const func1 = () => {};
export const func2 = () => {};
```

### Node.js Module Systems Comparison: CommonJS vs. ESM

| Feature                   | CommonJS (CJS)                     | ECMAScript Modules (ESM)                       |
| ------------------------- | ---------------------------------- | ---------------------------------------------- |
| **Syntax**                | `require()` / `module.exports`     | `import` / `export`                            |
| **Default in Node.js**    | ✅ Yes (default for `.js`)         | ❌ No (needs `"type": "module"` or `.mjs`)     |
| **File Extensions**       | `.js`, `.cjs`                      | `.js` (with `type: module`), `.mjs`            |
| **Loading**               | Synchronous                        | Asynchronous (supports static analysis)        |
| **Dynamic Import**        | `require()` (sync)                 | `import()` (async only)                        |
| **Top-Level `await`**     | ❌ Not allowed                     | ✅ Allowed                                     |
| **Browser Support**       | ❌ Not supported                   | ✅ Native support                              |
| **Performance**           | Slower (due to sync nature)        | Faster (optimized static loading)              |
| **Circular Dependencies** | Supported (but can be complex)     | Supported with better handling                 |
| **Use Case**              | Legacy Node.js apps, quick scripts | Modern JS apps, full-stack, browser-compatible |
| **TypeScript + ES6 apps** | ❌ Not ideal                       | ✅ Recommended                                 |
| **Live Bindings**         | ❌ No                              | ✅ Yes                                         |
| **Tree Shaking**          | ❌ No                              | ✅ Yes                                         |

> 💡 **Tip:** For modern development, especially when using frameworks or TypeScript, prefer **ESM**.

> **Tree Shaking**: A process that removes unused code from a final JavaScript bundle, improving performance. ESM supports tree shaking because it uses static imports.

> **Live Bindings**: In ESM, when a module updates a variable, other modules importing it also see the updated value in real time. CommonJS doesn’t have this feature since it exports values as copies.

### Key Differences

1. **Loading Mechanism**:
   - CJS: Synchronous (blocks execution)
   - ESM: Asynchronous (enables tree-shaking)
2. **Compatibility**:
   - CJS: Works in all Node.js versions
   - ESM: Requires Node.js ≥ v12 or `"type": "module"`
3. **Static vs. Dynamic**:
   - ESM imports are static (parsed at compile-time)
   - CJS `require()` is dynamic (runtime resolution)

### When to Use?

- **Choose CJS** if:
  - Maintaining legacy Node.js code
  - Using npm packages that don't support ESM
- **Choose ESM** if:
  - Writing new code with modern JS features
  - Need browser compatibility
  - Using libraries like React/Vue that prefer ESM

### Named vs Default Exports

**📦 In CommonJS (CJS)**
CommonJS only supports default-style exports, using module.exports. There’s no real concept of named exports like in ESM.

```JS
// utils.js
function greet(name) {
  return `Hello, ${name}`;
}
module.exports = greet; // exporting a single value

// app.js
const utils = require('./utils');
console.log(utils('John')); // "Hello, John"
```

**📦 In ECMAScript Modules (ESM)**
ESM supports both Named and Default exports.

✅ Named Export (ESM style)

```JS
// utils.js
export function greet(name) {
  return `Hello, ${name}`;
}

export const PI = 3.14;

// app.js
import { greet, PI } from './utils';
console.log(greet('John')); // "Hello, John"
console.log(PI); // 3.14
```

✅ Default Export (ESM style)

```JS
// utils.js
export default function greet(name) {
  return `Hello, ${name}`;
}

// app.js
import utils from './utils';
console.log(utils('John')); // "Hello, John"
```

# 📊 Comparison: Named vs Default Exports (CommonJS vs ESM)

| Feature                       | CommonJS (CJS)                     | ECMAScript Modules (ESM)              |
| ----------------------------- | ---------------------------------- | ------------------------------------- |
| **Named Exports**             | ❌ Not supported directly          | ✅ Supported                          |
| **Default Export**            | ✅ `module.exports =`              | ✅ `export default`                   |
| **Multiple Exports**          | ❌ Only via object structure       | ✅ Multiple named exports allowed     |
| **Import Syntax**             | `const x = require('./file')`      | `import x from` / `import { x } from` |
| **Interop with other system** | `require('./mod').default` for ESM | Needs wrapper for CJS interop         |
| **Tree Shaking**              | ❌ Not supported                   | ✅ Supported by bundlers              |
| **Top-level `await`**         | ❌ Not supported                   | ✅ Supported                          |
| **Browser Support**           | ❌ Not natively supported          | ✅ Native browser support             |

> ✅ **Named exports**: Use when you want to export multiple functions/constants.  
> ✅ **Default export**: Use when exporting a single main item.

## Module wrapper function

In Node.js, every module you write is wrapped in a function to create a private scope. This prevents variable collisions between modules and the pollution of the global namespace.

```JS
(function (exports, require, module, __filename, __dirname) {
  // Your module's actual code goes here...
});
```

| Parameter    | Description                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| exports      | An object that is used to export values from the module. By default it is an empty object. You can add properties to this object to export them. |
| require      | A function is used to import other modules.                                                                                                      |
| module       | An object that represents the current module.                                                                                                    |
| \_\_filename | Absolute path of the current module file.                                                                                                        |
| \_\_dirname  | Absolute path of the directory that contauns the current module                                                                                  |

## 🔧 How `require()` Works Internally in Node.js

When you call:

```js
const moduleA = require("./moduleA");
```

Node.js performs the following steps internally:

---

## 🧭 1. Resolve the File Path

- Node.js resolves the path passed to `require()`.
- It checks:
  1. **Core modules** (`fs`, `http`, etc.)
  2. **Relative or absolute paths**
  3. **`node_modules` directory**

If given `./moduleA`, it tries:

- `moduleA.js`
- `moduleA.json`
- `moduleA.node`

---

## 📄 2. Read the File

Once the correct file is located, Node.js reads its contents as a string.

---

## 📦 3. Wrap the Code (Module Wrapper)

Node wraps the module code in a function to provide local scope:

```js
(function (exports, require, module, __filename, __dirname) {
  // Your module code here
});
```

---

## 🧠 4. Compile the Code

Node compiles the wrapped function using the V8 engine:

```js
const wrappedFn = new Function(
  "exports",
  "require",
  "module",
  "__filename",
  "__dirname",
  codeString
);
```

---

## 🚀 5. Execute the Function

Node executes the function:

```js
wrappedFn(module.exports, require, module, __filename, __dirname);
```

This populates `module.exports` with exported values.

---

## 💾 6. Cache the Module

Node caches the module after execution to optimize subsequent `require()` calls.

```js
require.cache[require.resolve("./moduleA")];
```

You can delete the cache like this:

```js
delete require.cache[require.resolve("./moduleA")];
```

---

## 🔁 Summary Flow

```text
require('module') →
→ Resolve module path
→ Read file content
→ Wrap code in function
→ Compile to executable function
→ Execute with exports/require/module
→ Cache result
→ Return module.exports
```

---

> This internal mechanism makes `require()` powerful and efficient for module loading in CommonJS!

### 📦 Version Symbols in `package.json`

Semantic Versioning (SemVer) helps manage dependency versions in projects.

---

#### 🔢 SemVer Format

```
MAJOR.MINOR.PATCH
```

Example: `4.21.2`

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward-compatible)
- **PATCH**: Bug fixes (backward-compatible)

---

### ✅ Common Version Symbols

| Symbol | Meaning                            | Example                               | Resolves To               |
| ------ | ---------------------------------- | ------------------------------------- | ------------------------- |
| `^`    | Compatible with latest minor+patch | `^1.2.3`                              | `>=1.2.3 <2.0.0`          |
| `~`    | Allows only patch updates          | `~1.2.3`                              | `>=1.2.3 <1.3.0`          |
| `>`    | Greater than                       | `>1.2.3`                              | All versions after 1.2.3  |
| `<`    | Less than                          | `<2.0.0`                              | All versions before 2.0.0 |
| `=`    | `=4.21.2`                          | **Exactly** this version (no updates) | 4.21.2                    |
| `>=`   | Greater than or equal to           | `>=1.2.3`                             | 1.2.3 and above           |
| `<=`   | Less than or equal to              | `<=1.2.3`                             | 1.2.3 and below           |
| `*`    | Any version                        | `*`                                   | All versions              |
| Exact  | Specific version only              | `1.2.3`                               | Only version 1.2.3        |

---

### 📌 Use Cases

- `^` → Use when you want **feature updates**, but avoid breaking changes.
- `~` → Use when you only want **bug fixes**, no new features.
- `*` → Use when **any version** is acceptable.
- Exact version → Use when stability is more important than getting updates.

### 🔒 package-lock.json — Why it's important

The package-lock.json file is automatically generated by npm when you install the dependencies in a project. It contains the exact versions of the dependencies that are used in the project, and can be used to ensure that the same versions are used in different environments.

## 📌 Purpose of package-lock.json

- **Locks Exact Versions** - Locks the exact version of every package (and sub-package) used in your project.

- **Ensures consistency** - Guarantees that everyone working on the project installs the same exact versions, even if package.json allows version ranges (like ^1.2.3).

- **Speeds up installs** - npm can skip version resolution and fetch exact versions directly, improving performance.

- **Security** - Helps auditing tools (like npm audit) check for known vulnerabilities.

- **Dependency tree snapshot** - It includes a full dependency graph, showing which version of each dependency (and its dependencies) is used.

### ✅ Best Practices

- Always commit package-lock.json to version control (like Git).
- Don’t edit it manually.
- Regenerate it by deleting and running npm install if it gets corrupted.

## 📌 curl

curl stands for **Client URL**. It is a command-line tool used to transfer data to or from a server using various protocols such as:

- HTTP / HTTPS
- FTP
- SFTP
- SCP
- LDAP and many others

#### 💡 Examples

1. Make a GET request:

```JS
curl https://api.example.com/users
```

2. Make a POST request with JSON:

```JS
curl -X POST https://api.example.com/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John", "email": "john@example.com"}'
```

3. Download a file:

```JS
curl -O https://example.com/file.txt
```

4. Send request with headers:

```JS
curl -H "Authorization: Bearer <token>" https://api.example.com/protected
```

## NodeJS Process Lifecycle

Node.js runs JavaScript code on a single main thread (non-blocking and event-driven).

## Initialization:

### Process Creation:

- Node.js starts a single main process with V8 engine + libuv(for async I/O and event loop).
- Initializes the module system, core APIs (e.g., fs, http), and global objects (e.g., process).

### Environment Setup:

- Loads command-line arguments (process.argv).
- Reads environment variables (process.env).

### Event Loop Setup:

libuv initializes the event loop, timers, and worker threads (for blocking I/O). The event loop starts after the main script execution.

## Code Execution:

### Phase 1: Top-Level Code

- Executes synchronous code in your entry file (e.g., `index.js`).
- Processes `require()` statements (modules are loaded and cached).
- Schedules async operations (e.g., `setTimeout`, I/O tasks) and registers event listeners (e.g., `http.createServer()`).
- Microtasks (e.g., `process.nextTick()`, `Promise.then()`) are queued but not executed yet.

### Phase 2: Event Loop Activation

Event loop phases (in order):

- Timers: Executes expired setTimeout/setInterval callbacks.
- Pending I/O: Processes deferred I/O callbacks (e.g., completed filesystem/network operations).
- Idle/Prepare: Internal libuv tasks.
- Poll: Retrieves new I/O events (e.g., HTTP requests, file reads).
- Check: Runs `setImmediate()` callbacks.
- Close: Handles `close` events (e.g., closing sockets socket.on('close') or files).

### Phase 3: Microtask Queues (Processed after each phase and before the next phase):

- `process.nextTick()`: Highest priority (executed immediately after the current phase).
- Promise callbacks: Run after nextTick tasks.

### Phase 4: Shutdown & Cleanup

**Natural Exit:**

- Occurs when the event loop has **no active handles** (e.g., no open servers, timers, or connections).
- Emits `beforeExit` → Allows delaying `exit` with async tasks.
- If the loop remains empty, emits the `exit` event (sync cleanup only).

**Forced Exit:**

- `process.exit(code)`: Skips `beforeExit` and terminates immediately. skipping `beforeExit` and `exit`.

**Error Handling:**

- `uncaughtException`: Catches unhandled errors (prevents crash but risky; use for logging).
- `unhandledRejection`: Catches unhandled Promise rejections.

### Thread pool

- The thread pool is part of libuv, not the event loop itself.
- It handles blocking or CPU-intensive work off the main thread.

### Thread pool working mechanism:

- Top-Level Code runs (e.g., calling fs.readFile()).
- Node registers the async operation and offloads it to the thread pool via libuv.
- While the task is running in the background, Node.js continues executing the rest of your code.
- Once the thread pool finishes the task, it pushes the callback into the Event Loop.
- The callback is executed when its turn comes.

## 📌 Summary

- Node.js is a runtime environment for JavaScript.
- It provides a non-blocking, event-driven architecture for handling multiple requests at once.
- It uses the V8 JavaScript engine and the libuv library for I/O operations.
- It uses the CommonJS module system for organizing code into modules.
- It supports asynchronous programming with callbacks and promises.
- It has a built-in package manager called npm for managing dependencies.
