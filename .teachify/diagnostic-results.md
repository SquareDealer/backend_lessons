# Diagnostic results (scratch, 2026-10-14)

| # | item | score | remark |
|---|---|---|---|
| 1 | react.2 | 0 | "не знаю" |
| 2 | react.1 | 0 | знает только триггер "изменился state"; ни ререндера родителя, ни context, ни фаз |
| 3 | pg.2 | 1- | выбор A,C верный, но причина для B неверна ("now() пересчитывается") — правило левого префикса не назвал; про сортировку в A и фильтр status в C нет; знает EXPLAIN ANALYZE. Misconception: now() мешает индексу |
| 4 | pg.1 | 0 | A=атомарность, C=целостность (ок), I="идемпотентность" (неверно, isolation), D не знает; знает транзакции = атомарность + откат; уровни изоляции не знает |
| 5 | orm.2 | 1- | назвал N+1 и 51 запрос верно; исправления (include/in) не дал; как обнаружить — нет; сам: "не совсем понимаю как работает" |
| 6 | orm.1 | 1- | миграции = версии схемы, ALTER TABLE — общая идея есть; migrate dev vs deploy не знает; shadow DB, _prisma_migrations, зачем коммитить — нет |
| 7 | be-test.2 | 1- | тестировал PaymentsService вместо OrdersService (не тот юнит); нет Test.createTestingModule/useValue, мок зависимостей Nest не показан; assertEquals (не jest/vitest). Плюс: сценарии продуманы (идемпотентность, откат, недостаток средств), идея реальной БД для сложных транзакций |
| 8 | fe-test.2 | 0 | "замокаю API и проверю бизнес-логику по статусу" — без MSW/RTL/userEvent/async ожидания |
| 9 | fe-test.1 | 0 | RTL не знает → fe-test = none |
| 10 | nest.2 | 0+ | догадка "нужен import" без export/инкапсуляции модулей; альтернатива "@Injectable нет" — мимо; про циклическую зависимость/forwardRef — ничего |
| 11 | nest.1 | 0 | порядок/назначение middleware-guards-interceptors-pipes-filters не знает → nest ниже recall |
| 12 | auth.2 | 1 | access 10–15 мин в заголовке, refresh 7 дней, выдача новой пары при refresh (ротация в зачатке); argon2 для паролей (частично закрывает auth.1). Misconception: "localStorage с пометкой HttpOnly cookie" — смешивает хранилища. Нет: хеш refresh на сервере/отзыв, reuse detection, logout, XSS-аргумент |
| 13 | fe-data.2 | 0 | TanStack Query не знает |
| 14 | fe-data.1 | 0 | не знает server vs client state; не назвал, чем грузит данные → практический React-опыт, вероятно, минимальный (самооценка "React/TS frontend" не подтверждена) |
| 15 | runtime.2 | 1- | порядок не дал; модель на уровне recall: micro/macrotask, nextTick приоритетнее промисов, таймеры = macrotask. Нет: тело async до await синхронно. Неточность: "колбэки попадают в очереди из call stack" |
| 16 | ts.2 | 0 | без generics: интерфейсы User/UserDto + деструктуризация, keyof/Pick не использует; функция не дописана |
| 17 | ts.1 | 0 | any/unknown/never не знает → ts ниже recall для системы типов (базовые interface/type — есть) |
| 18 | http.2 | 0+ | GET + sort=-createdAt + фильтр — ок; userId в пути (не из токена → IDOR-риск), нет пагинации/limit/cursor, формата ответа, контракта ошибок; URL не ресурсный (ordersList) |
| 19 | delivery.2 | 0 | "не знаю" (сеть compose, depends_on/healthcheck, миграции) |
| 20 | sysdesign.1 | 0 | "изолировать в сети докер" — stateless/сессии/cron/пул соединений не назвал |
