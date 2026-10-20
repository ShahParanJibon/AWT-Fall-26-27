# Krown Dex Backend – Setup & Run Guide

This guide explains how to configure, install, and run the NestJS backend locally.

## Student Information

- **Name:** MD. SHAH PARAN JIBON
- **Student ID:** 23-54674-3
- **Section:** E
## 🚀 Prerequisites

Ensure the following are installed:

- Node.js v22 or later
- PostgreSQL
- Redis
- pnpm, npm, or Yarn
- Docker (optional, for running Redis)

## 📦 Install Dependencies

Navigate to the project root directory and install dependencies:

```bash
pnpm install
```

Alternatively:

```bash
npm install
# or
yarn install
```

## 🔧 Environment Variables

1. Navigate to the project root directory.
2. Find the `.env.example` file.
3. Create a `.env` file.
4. Copy the contents of `.env.example` into `.env`.
5. Update the environment variables for your local setup.

```bash
cp .env.example .env
```

**Note:** On Windows PowerShell, you can use:

```powershell
Copy-Item .env.example .env
```

Update the PostgreSQL and Redis credentials in `.env` as required.

## 🗄️ Database Setup & Migrations

### 1. Create the Database

Open PostgreSQL using `psql` or pgAdmin.

Using SQL:

```sql
CREATE DATABASE krown_dex_db;
```

Make sure the database name matches the value configured in `.env`.

### 2. Run Migrations

After configuring the database connection, run:

```bash
pnpm run migration:run
```

Alternatively:

```bash
npm run migration:run
# or
yarn migration:run
```

Ensure that the migration script exists in `package.json` before running it.

## ⚡ Redis Setup

Redis is required for the backend if the application uses Redis services.

### Option 1: Run Redis with Docker

```bash
docker run -d --name krown-redis -p 6379:6379 redis:7-alpine
```

### Option 2: Native Installation

Install Redis using a supported local setup and start the Redis server.

Configure the corresponding environment variables in `.env`:

```env
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
```

Use the actual values required by your project configuration.

## ▶️ Running the Backend (Development)

Start the NestJS application:

```bash
pnpm run start:dev
```

Alternatively:

```bash
npm run start:dev
# or
yarn start:dev
```

The server will run at the configured port, typically:

```text
http://localhost:3000
```

## 🏗️ Production Build

Build the application:

```bash
pnpm run build
```

Alternatively:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
pnpm run start:prod
```

Alternatively:

```bash
npm run start:prod
# or
yarn start:prod
```

## 📁 Project Structure

```text
project-root/
├── src/
│   ├── modules/
│   ├── common/
│   ├── config/
│   ├── main.ts
│   └── app.module.ts
├── migrations/
├── test/
├── .env.example
├── package.json
└── tsconfig.json
```

*The directory structure above is an overview. Actual folders may differ depending on the project.*

## 🌐 API Endpoints

Add the endpoints implemented in your project below.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check the application response, if configured |
| GET | `/api/...` | Replace with an actual endpoint |
| POST | `/api/...` | Replace with an actual endpoint |
| PATCH | `/api/...` | Replace with an actual endpoint |
| DELETE | `/api/...` | Replace with an actual endpoint |

Refer to the NestJS controllers and route definitions for the complete endpoint list.

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

For end-to-end tests:

```bash
pnpm test:e2e
```

Check `package.json` for the available test scripts.


