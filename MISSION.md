# Mission: Fullstack TypeScript (NestJS + React) — уровень Middle (ядро)

## Why
К середине февраля 2027 начать проходить собеседования на позицию Middle Fullstack (NestJS + React + TypeScript + PostgreSQL) — и на рынке РФ/СНГ, и на remote EU/US — и получить оффер. Сейчас: < 1 года коммерческого опыта, уровень по диагностике — Junior.

## Target level
**L2-ядро** (выбран 2026-10-14 после диагностики): Middle-глубина в `ts`, `nest`, `pg`, `orm`, `auth`, `react`, `fe-data`; уровень L1 (Strong Junior+) в `be-test`, `fe-test`, `perf`, `delivery`, `sysdesign`; `runtime` и `http` — до apply.

## Success looks like
- Сам декомпозирует CRUD-фичу и доводит её end-to-end: Nest-модуль (DI, DTO-валидация, guard), Prisma-схема + миграция, React-страница на TanStack Query.
- Пишет generic-функции и типы (`keyof`, mapped/utility types, `unknown` + сужение) и валидирует внешние данные на границе.
- Объясняет и чинит Nest-ошибки DI/модулей; знает request lifecycle (middleware → guards → interceptors → pipes → handler → filters).
- Обосновывает индекс через `EXPLAIN ANALYZE`, находит и чинит N+1, распознаёт lost update и чинит атомарным `UPDATE` или `SELECT … FOR UPDATE`; знает уровни изоляции Postgres.
- Проектирует REST-контракт: cursor-пагинация, контракт ошибок, пользователь из токена.
- Реализует access/refresh с ротацией, отзывом и правильным хранением на клиенте; закрывает IDOR и CORS.
- Предсказывает ререндеры и вывод snapshot/батчинг-сниппетов; чинит эффекты (зависимости, гонки, производное состояние); управляет кешем TanStack Query (ключи, инвалидация, optimistic update).
- (L1) Пишет unit-тест сервиса через `TestingModule` и компонентный тест на RTL; поднимает проект в docker-compose; на system design объясняет stateless-масштабирование.

## Constraints
- Темп: 15+ ч/неделю (поднят с 10–15 под цель), дедлайн ~4 месяца: старт 2026-10-14 → собесы с ~2027-02-15
- Стек практики: NestJS + Prisma + PostgreSQL; React (Vite) + TanStack Query + React Router; TypeScript везде; тесты — vitest
- Окружение: Linux (WSL2), Node 25, pnpm, Docker
- Язык курса: русский; код и идентификаторы — английский

## Out of scope
- GraphQL (только REST)
- Алгоритмы / LeetCode (готовится отдельно)
- Глубина L2+ в perf, delivery, sysdesign, тестах (только L1) — после февраля
