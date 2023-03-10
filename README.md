# Restaurant Management

The Restaurant Management project includes a simple web application and a related backend API that work together to manage important information such as menu, employees, and customer data for the restaurant. The project also includes a database for storing various restaurant-related data.

這個 Restaurant Management 專案包含一個簡單的網頁應用程式和相關的後端 API，它們可以協同運作，管理餐廳的菜單、員工與客戶資料等重要資訊。此專案亦包含數據庫，用於儲存各種餐廳相關的資料。

> 我已經把建構此專案的過程寫成文章記錄，請到 [Mango Blog](https://et860525.github.io/)

# Environment

- Node.js (>= 18)
- Docker

# Getting started

1. Download project
2. Install all dependencies:
   ```bash
   cd restaurant-management
   pnpm install
   ```
3. Create a database with `docker-compose.yaml`:
   ```bash
   docker compose up -d
   ```
4. Migrate
   ```bash
   pnpx prisma migrate dev
   # or
   pnpx prisma migrate reset
   ```
5. Initial data
   ```bash
   pnpm ts-node src/repository/initData.ts
   ```
6. Start the server
   ```bash
   pnpm dev
   ```
   The server is now running on http://localhost:3000
