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

The local backend uses the MySQL service from Docker Compose. Its development database is `laravel`, with username `laravel` and password `laravel`. The database data is stored in the `mysql_data` named volume.

## GitHub Actions deployment

The workflows use `prod` as the production branch. CI checks the `frontend` and `backend` projects independently. Deployment generates a static Nuxt site and uploads it to webgo over SSH, then uploads Laravel separately.

Configure these production environment secrets in GitHub:

- `DEPLOY_HOST`
- `DEPLOY_PORT` (optional, defaults to `22`)
- `DEPLOY_USER`
- `DEPLOY_SSH_PRIVATE_KEY_B64`
- `DEPLOY_FRONTEND_PATH` (the document root for `demo.tobias-hopp.de`)
- `DEPLOY_BACKEND_PATH` (a non-public PHP-capable path)

Upload the production Laravel `.env` directly to `DEPLOY_BACKEND_PATH` on the server. The deployment preserves that file and uses its MySQL settings, including `DB_CONNECTION=mysql`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD`.

The web server must map `/api` on the subdomain to Laravel's `backend/public/index.php`, or provide a separate API host and set `NUXT_PUBLIC_API_BASE` accordingly. Standard webspace should not be assumed to run Docker; the local Compose setup remains for development.

## Stop the stack

```powershell
docker compose down
```
