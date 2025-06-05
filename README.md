# Станкосоюз Ecommerce

Монорепозиторий интернет-магазина "Станкосоюз". В проекте используется Next.js 14, Medusa.js, PostgreSQL и Redis. Frontend разворачивается на Vercel, backend на Railway.

## Структура
```
frontend/   # Next.js приложение
backend/    # Medusa.js API
database/   # SQL схемы и данные
```

## Быстрый старт
1. Скопируйте `.env.example` в `.env` и установите переменные.
2. Запустите локально:
```bash
docker-compose up --build
```
Сайт будет доступен на `http://localhost:3000`, API на `http://localhost:9000`.

## Скрипты
- `frontend`: `npm run dev` – запуск Next.js
- `backend`: `npm run develop` – запуск Medusa API
- `docker-compose` поднимает PostgreSQL и Redis

## Деплой
Используется GitHub Actions (`.github/workflows/deploy.yml`). Для деплоя необходимо создать секреты `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `RAILWAY_TOKEN`.

## База данных
SQL файлы `database/init.sql` и `database/seed.sql` помогают создать начальную структуру и заполнить тестовыми данными.

## Лицензия
MIT
