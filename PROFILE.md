# Profile

Диагностика: 2026-10-14, 20 вопросов (сырые оценки: `.teachify/diagnostic-results.md`).
Шкала: none < recall < apply < debug/design.

## Области (CONCEPT-MAP.md)
- ts: none (система типов) — evidence: ts.2=0 (pick без generics, только interface + деструктуризация), ts.1=0 (any/unknown/never). Базовые `interface`/аннотации пишет.
- runtime: recall (частично) — evidence: runtime.2=1- (micro/macrotask, nextTick раньше промисов, таймеры = macrotask; порядок вывода не дал; не знает, что тело async до первого await синхронно).
- http: recall (частично) — evidence: http.2=0+ (GET + sort ок; userId в пути вместо токена, нет пагинации/формата ответа/контракта ошибок). http.1 не задан.
- nest: none — evidence: nest.2=0+ (догадка «нужен import», без export/инкапсуляции), nest.1=0 (request lifecycle).
- pg: recall (частично) — evidence: pg.2=1- (A/C выбрал верно, причина для B неверна, левый префикс не знает; знает EXPLAIN ANALYZE), pg.1=0 (I/D в ACID, уровни изоляции). Транзакция = «атомарно + откат» — знает.
- orm: recall (частично) — evidence: orm.2=1- (узнаёт N+1, считает 51; не чинит, не знает как обнаружить), orm.1=1- (миграции = версии схемы; migrate dev/deploy не знает).
- auth: apply (частично) — evidence: auth.2=1 (argon2, сравнение хешей; access 10–15 мин в заголовке, refresh 7 дней, новая пара при refresh; хранение на клиенте спутано; нет серверного отзыва, reuse detection, logout).
- be-test: recall/apply (частично) — evidence: be-test.2=1- (хорошие сценарии: идемпотентность, откат, недостаток средств; идея реальной БД для транзакций; но тестировал не тот юнит, нет TestingModule/useValue, синтаксис не jest/vitest).
- react: none/recall — evidence: react.2=0, react.1=0 (знает только «ререндер при смене state»).
- fe-data: none — evidence: fe-data.2=0 (TanStack Query не знает), fe-data.1=0 (server vs client state).
- fe-test: none — evidence: fe-test.2=0, fe-test.1=0 (RTL не знает).
- perf: не проверялась — предположительно none (зависит от react/pg/nest, где база слабая).
- delivery: none — evidence: delivery.2=0 (сеть compose, healthcheck, миграции).
- sysdesign: none — evidence: sysdesign.1=0 («изолировать в сети докер»).

## Стек и инструменты
- Linux (WSL2), Node 25, pnpm, Docker (установлен).
- Практика: NestJS + Prisma + PostgreSQL; React (Vite) + TanStack Query + React Router; vitest.
- Коммерческий опыт < 1 года. Самооценка «писал Node/Nest API, React+TS, SQL» диагностикой подтверждена только на уровне узнавания терминов.

## Переносимые сильные стороны
- Мышление тест-кейсами: сам предложил идемпотентность, откат транзакции, граничный случай «списать больше, чем есть».
- Безопасность на уровне здравого смысла: медленный хеш (argon2), короткий access-токен «чтобы быстро отозвать».
- Знает названия ключевых проблем (N+1, EXPLAIN ANALYZE, micro/macrotask) — словарь есть, механики нет.
- Честно говорит «не знаю» — диагностика надёжная.

## Слабые места
- Фундамент TS (generics, keyof, utility types, unknown/never) — блокирует Nest, React и тесты.
- React: модель рендеринга, снимки state, хуки — почти с нуля.
- Nest: модули/DI/lifecycle — почти с нуля.
- Postgres глубже CRUD: ACID/изоляция, индексы (левый префикс), гонки.
- Тесты фронта и бэка (инструменты), Docker/compose, system design.

## Зафиксированные заблуждения
См. `errors.md` (4 строки от 2026-10-14).

## Предпочтения в практике
- Язык: русский; код — английский.
- Формат: _уточнить в первых уроках_.
