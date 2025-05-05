# Kanban Task Manager

Kanban Task Manager is a simple and easy to use task manager that allows you to manage your tasks and projects in a simple and easy to use interface.

### .prettierrc

Prettier configuration file, where you set your formatting rules.

### .prettierignore

Prettier configuration file, where you tell prettier to skip specific files or folders when formatting.

### "type" : "module"

You tell Node.js that your project is using ES Modules (ECMAScript Modules) instead of CommonJS.

### .env, .env.example, .env.local

Used to manage environment variables

**.env** : It holds default environment variables for all environments.

**.env.local** : It is used for local development only. Used for things like secret keys, dev API URLs, etc. This file is gitignored (you should not commit it).

**.env.example** : It is a template or reference file.

### public

Used to store static files like images, fonts, etc. which should be directly accessible by the browser. It is not included in the build.

- 🖼️ Static assets : Store images, fonts, icons, etc.
- 🌐 HTML metadata : Favicon (favicon.ico), manifest.json for PWAs
- 📜 Robots and others : Files like robots.txt and sitemap.xml
- 🧪 Third-party files : Anything that shouldn’t be processed by the build system

### .gitkeep

Git does not track empty directories, so we create a .gitkeep file to force git to track the directory.

### Folders

#### 📁 controllers/

- Handles business logic for each route
- Called by route files when a specific endpoint is hit
- Keeps logic clean and separate from route definitions
- Example functions: login, register, createPost, etc.

#### 📁 routes/

- Defines API endpoints and maps them to controller functions
- Keeps routing separate from logic
- Usually grouped by feature/module (e.g., userRoutes.js, authRoutes.js, postRoutes.js)

#### 📁 models/

- Defines data schema and structure for the database
- Used especially with Mongoose (MongoDB) or Sequelize (SQL)
- Represents collections like User, Product, Post, etc.

#### 📁 middlewares/

- Functions that run before or after a request hits the controller
- Examples:
  - Authentication check (e.g., JWT)
  - Error handling
  - Logging
  - Rate limiting

#### 📁 utils/

- Contains helper functions and reusable logic
- Examples:
  - Token generation
  - Email sending
  - Random string creation
  - File upload handler

#### 📁 validators/

- Validates incoming request data (body, params, query)
- Uses packages like express-validator or Joi
- Ensures data is valid before reaching controller

#### 📁 db/ or config/

- Stores database connection logic or app-level config
- Examples:
  - db.js → connects to MongoDB using Mongoose
  - config.js → reads and exports values from .env

#### healthcheck.controllers.js

It is a simple API route, that provides details about whether your server/app is up and running

It helps DevOps, monitoring tools (like AWS ELB, Kubernetes, or Docker), and developers to verify the app's status.

#### mailgen

A Node.js package that generates clean, responsive HTML e-mails for sending transactional mail.

#### Nodemailer

It is a module for Node.js applications to send easy e-mails
