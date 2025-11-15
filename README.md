# Full Stack Project

A simple multi-stack demo application with a static/frontend React app, a Node.js server, and a Spring Boot service.

## Tech Stack
- Frontend: React + Redux + Vite
- API (Node): Node.js + Express (assumed)
- API (Java): Spring Boot (Maven)

## Repository Structure
- `frontend/` Frontend application
- `server/` Node.js API server
- `spring-app/` Spring Boot service
- `.gitignore` Git ignore rules
- `README.md` This file

## Prerequisites
- Node.js LTS (>= 18 recommended) and npm
- Java 17+ and Maven (for Spring Boot)
- Git

## Setup
### 1) Frontend
```bash
# from repo root
cd "frontend"
npm install
```

### 2) Node server
```bash
# from repo root
cd "server"
npm install
```

### 3) Spring Boot app
```bash
# from repo root
cd "spring-app"
mvn clean package
```

## Running
### Frontend (static or dev server)
If it is a static site, open `frontend/index.html` in a browser or serve it with a simple HTTP server.
```bash
# Example using npm http-server (if added to devDependencies)
# from frontend/
npx http-server . -p 5173
```

### Node server
```bash
# from server/
npm start
# or
npm run dev
```
Default port is typically 3000 (check `server` source or scripts).

### Spring Boot
```bash
# from spring-app/
mvn spring-boot:run
```
Default port is typically 8080 (check `application.properties`).

## Environment Variables
Create `.env` files as needed. The repo ignores `.env` by default.
- `server/.env` for Node server secrets/config
- `frontend/` may use `.env.*` depending on tooling
- `spring-app/src/main/resources/application.properties` for Spring config

Do not commit secrets. If needed, add `.env.example` files to illustrate required keys.

## Common Scripts
- Node server
  - `npm start` — start the server
  - `npm run dev` — start with hot reload (if configured)
- Spring Boot
  - `mvn spring-boot:run` — run app
  - `mvn test` — run tests
  - `mvn clean package` — build JAR

## Development Workflow
1. Start Spring Boot on 8080
2. Start Node server on 3000
3. Serve frontend (static or dev server)
4. Configure the frontend to call API(s) at the right base URLs

## Git Hygiene
This repo ignores large dependency/build folders (`node_modules`, `target`, `dist`, `build`, etc.) and `.env` files. If these were previously tracked, they must be removed from the Git index with `git rm --cached` once (already handled if you followed the prior steps).

## Troubleshooting
- Node modules still appear in `git status`: ensure `.gitignore` exists at repo root and run `git rm -r --cached <folder>` once.
- Port already in use: change ports in scripts or config files.
- Spring Boot build issues: verify Java version and run `mvn -v`.

## License
MIT License
