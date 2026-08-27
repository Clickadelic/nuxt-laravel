# Nuxt + Laravel Docker Workspace

This repository contains a Nuxt frontend and a Laravel API backend.

## Run the stack

```powershell
docker compose up --build
```

Open:

- frontend: http://localhost:3000
- backend: http://localhost:8000
- API health check: http://localhost:8000/api/health

The source folders are bind-mounted for development. Docker named volumes preserve `node_modules`, Nuxt's generated files, and Laravel's Composer dependencies inside the containers.

## Stop the stack

```powershell
docker compose down
```
