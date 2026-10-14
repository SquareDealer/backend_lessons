# Карта понятий: Fullstack TypeScript (NestJS + React + PostgreSQL), уровень Middle

Карта описывает, что должен уметь Middle Fullstack-разработчик на стеке NestJS + Prisma + PostgreSQL + React + TanStack Query. Нужна, чтобы выбрать целевой уровень после диагностики и спланировать курс.

## На чём основана карта

- **Официальная документация**: docs.nestjs.com (Fundamentals, Request lifecycle, Injection scopes, Testing), react.dev (Learn, Rules of React, React Compiler), typescriptlang.org Handbook, postgresql.org (гл. 11 «Индексы», 13 «Управление конкурентным доступом», 14 «Производительность»), prisma.io (Migrate, Transactions, Query optimization), TanStack Query (Important Defaults, Invalidation), Testing Library (Guiding Principles).
- **Вакансии**: hh.ru, Хабр Карьера, Djinni, justjoin.it. Типичный набор для РФ/СНГ: TypeScript, NestJS/Express, React, PostgreSQL, REST, Docker, Redis, Git. Часто добавляют очереди (BullMQ/RabbitMQ/Kafka), Redux Toolkit, CI/CD. Тесты обычно идут как «плюс», но на собеседовании про них спрашивают. EU/US: обычно «3+ года», сильный TypeScript, NestJS, React, PostgreSQL (проектирование схемы, оптимизация), Jest/Vitest, Docker, облако (AWS) как плюс, английский B2+.
- **Форматы собеседований**: в РФ это теоретический блиц (JS/TS/React/Node/SQL), live coding, часто ревью кода, а в крупных компаниях (Авито, Т-Банк) с определённого грейда ещё и system design, в том числе для фронтенда. На EU/US обычно 3 этапа: скрининг, техническое интервью или take-home (фича end-to-end: контракт REST, клиентское состояние, SQL под фичу), system design «облегчённый» и behavioral.
- **Признанные источники**: Use The Index, Luke; TkDodo; Kent C. Dodds; Josh Comeau / Dan Abramov / Nadia Makarevich; Kleppmann (DDIA, 2-е изд., 2026); Е. Рогов (Postgres Pro); Yoni Goldberg (Node testing best practices). Подробности в `RESOURCES.md`.

## Шкала глубины

| Метка | Что значит |
|---|---|
| `recall` | Помнит определения и факты, может назвать |
| `explain` | Объясняет «почему» своими словами, приводит пример |
| `apply` | Применяет в коде в типовой ситуации без подсказок |
| `debug` | По симптомам находит причину в чужом коде и исправляет |
| `design` | Выбирает между вариантами, называет trade-offs и проектирует с нуля |

Каждая следующая метка включает предыдущие.

## Сводная таблица

`after:` перечисляет области, которые желательно пройти раньше. Колонки глубины соответствуют уровням L2 и L3 из лестницы в конце файла. Пометка «слабое место» означает слабое место по самооценке ученика (её проверит диагностика).

| # | ID | Область | after: | Middle (L2) | Strong Middle (L3) |
|---|---|---|---|---|---|
| 1 | `ts` | TypeScript для прикладного кода | — | apply | design |
| 2 | `runtime` | JavaScript и рантайм Node.js | — | debug | debug |
| 3 | `http` | HTTP и проектирование REST API | `runtime` | apply | design |
| 4 | `nest` | Архитектура NestJS | `ts`, `runtime`, `http` | debug | design |
| 5 | `pg` | PostgreSQL: SQL, транзакции, индексы (слабое место) | — | debug | design |
| 6 | `orm` | Prisma и доступ к данным: схема, миграции, N+1 (слабое место) | `pg`, `nest` | debug | design |
| 7 | `auth` | Аутентификация, авторизация, безопасность | `http`, `nest` | apply | design |
| 8 | `be-test` | Тестирование бэкенда (слабое место) | `nest`, `orm` | apply | design |
| 9 | `react` | React: модель рендеринга и хуки (слабое место) | `ts` | debug | debug |
| 10 | `fe-data` | Данные и состояние на фронте: TanStack Query, формы, роутинг | `react`, `http` | apply | design |
| 11 | `fe-test` | Тестирование фронтенда (слабое место) | `react`, `fe-data` | apply | debug |
| 12 | `perf` | Производительность и кеширование | `pg`, `react`, `nest` | apply | design |
| 13 | `delivery` | Инфраструктура и доставка: Docker, CI, конфиг, логи | `nest`, `orm`, `be-test` | apply | design |
| 14 | `sysdesign` | System design уровня Middle | `pg`, `auth`, `perf`, `delivery` | apply | design |

Ниже области разложены по слоям зависимостей (топологический порядок). Внутри слоя области независимы, поэтому бэкенд- и фронтенд-ветку можно вести параллельно.

| Слой | Области |
|---|---|
| 0 | `ts`, `runtime`, `pg` |
| 1 | `http` (← runtime), `react` (← ts) |
| 2 | `nest` (← ts, runtime, http), `fe-data` (← react, http) |
| 3 | `orm` (← pg, nest), `auth` (← http, nest), `fe-test` (← react, fe-data), `perf` (← pg, react, nest) |
| 4 | `be-test` (← nest, orm) |
| 5 | `delivery` (← nest, orm, be-test) |
| 6 | `sysdesign` (← pg, auth, perf, delivery) |

---

## 1. `ts`: TypeScript для прикладного кода

**after:** —  **Глубина:** Middle `apply` / Strong Middle `design`

**Зачем:** в обоих рынках требуют «уверенный» или «сильный» TypeScript. Проверяют не гимнастику на уровне типов, а умение типизировать прикладной код: DTO, ответы API, обобщённые утилиты, сужение данных на границе доверия. Авито, например, явно ждёт пользовательские type guards для валидации ответов API.

**Понятия:**
- Структурная типизация; `type` против `interface`; литеральные типы, `as const`, `satisfies`.
- `any`, `unknown`, `never`; `strict`-режим и `strictNullChecks`.
- Narrowing: `typeof`, `in`, `instanceof`, discriminated unions, пользовательские type guards (`x is T`), `asserts`, exhaustive check через `never`.
- Generics: ограничения (`extends`), `keyof`, индексный доступ `T[K]`, вывод типов-аргументов.
- Utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `ReturnType`, `Parameters`, `Awaited`, `NonNullable`. Mapped и conditional types на уровне чтения.
- Граница доверия: `as` — это утверждение, а не проверка. Данные извне проверяются в рантайме (zod / class-validator), тип выводится из схемы.
- Типы для общего контракта фронта и бэка (shared-пакет, генерация из OpenAPI).
- Декораторы и `emitDecoratorMetadata`: на них держится DI в NestJS.

**Middle:** уверенно типизирует сервисы, DTO, хуки и generic-утилиты, не злоупотребляет `as` и `any`, сужает `unknown`. **Strong Middle:** проектирует типобезопасный контракт API между фронтом и бэком, выбирает между runtime-валидацией и кодогенерацией.

## 2. `runtime`: JavaScript и рантайм Node.js

**after:** —  **Глубина:** Middle `debug` / Strong Middle `debug`

**Зачем:** в РФ это классика теоретического блица (event loop, промисы, замыкания, `this`). На бэкенде от этого зависят пропускная способность и корректность обработки ошибок.

**Понятия:**
- Замыкания, `this`, прототипы и классы. Сравнение по ссылке и по значению (важно для React).
- Промисы: состояния, цепочки, `Promise.all`, `allSettled`, `race`, `any`; `async/await` как сахар над промисами; ошибки в async-коде, `unhandledRejection`.
- Event loop в Node: фазы (timers, poll, check), очередь `process.nextTick`, микрозадачи. Разница порядка в CommonJS и ESM. Event loop в браузере (задачи, микрозадачи, рендеринг).
- libuv, thread pool (fs, crypto, dns); почему блокирующий CPU-код ломает весь сервер; `worker_threads`.
- Ограничение конкурентности (не запускать 10 000 промисов разом), `AbortController` и таймауты.
- Streams: readable, writable, transform, backpressure, `pipeline`. Когда стриминг нужен (большие файлы, CSV-экспорт).
- `AsyncLocalStorage`: контекст запроса без протаскивания параметров.
- Модули: ESM и CommonJS. Graceful shutdown (SIGTERM).

**Middle:** предсказывает порядок вывода async-сниппетов, находит ошибки вроде `forEach(async …)` и неограниченного параллелизма. **Strong Middle:** диагностирует блокировку event loop и утечки памяти в работающем сервисе.

## 3. `http`: HTTP и проектирование REST API

**after:** `runtime`  **Глубина:** Middle `apply` / Strong Middle `design`

**Зачем:** на EU/US-интервью проверяют прежде всего «контракт REST». В РФ встречаются вопросы про методы, коды, идемпотентность и CORS.

**Понятия:**
- Семантика методов: safe и idempotent (RFC 9110), коды ответов (400/401/403/404/409/422/429/5xx).
- Моделирование ресурсов, вложенность URL, фильтрация, сортировка.
- Пагинация: offset против cursor/keyset, стабильность и производительность.
- Единый формат ошибок (Problem Details, RFC 9457), валидационные ошибки.
- Идемпотентность записи: заголовок `Idempotency-Key`, безопасные ретраи.
- Версионирование API, обратная совместимость контракта.
- Заголовки кеширования (`Cache-Control`, `ETag`) на уровне протокола; подробно они разбираются в `perf`.
- OpenAPI/Swagger (`@nestjs/swagger`), генерация клиента.
- Долгие операции: `202 Accepted` + статус задачи.

**Middle:** проектирует последовательный CRUD + list API с пагинацией и ошибками. **Strong Middle:** проектирует идемпотентные операции, эволюцию API без поломки клиентов, асинхронные API.

## 4. `nest`: архитектура NestJS

**after:** `ts`, `runtime`, `http`  **Глубина:** Middle `debug` / Strong Middle `design`

**Зачем:** это основной фреймворк вакансий. На интервью спрашивают DI, модули и жизненный цикл запроса, просят разобраться с ошибкой резолва зависимостей.

**Понятия:**
- Модули: `imports`, `exports`, `providers`, инкапсуляция; global и dynamic модули (`forRoot`/`forRootAsync`).
- DI: токены, custom providers (`useClass`, `useValue`, `useFactory`, `useExisting`), `@Inject`, `forwardRef` и почему циклы лучше устранять.
- Scopes: DEFAULT, REQUEST, TRANSIENT. Request scope «всплывает» вверх по цепочке и стоит производительности. Альтернатива — `AsyncLocalStorage` (nestjs-cls).
- Lifecycle hooks: `onModuleInit`, `onApplicationBootstrap`, `onModuleDestroy`, `enableShutdownHooks`.
- Request pipeline: middleware → guards → interceptors (до) → pipes → handler → interceptors (после) → exception filters. Назначение каждого слоя, `ExecutionContext`, `Reflector`, кастомные декораторы.
- Валидация: `ValidationPipe` (whitelist, forbidNonWhitelisted, transform), class-validator и zod.
- Конфигурация: `@nestjs/config`, валидация env при старте, `ConfigService` с типами.
- Обработка ошибок: встроенные `HttpException`, маппинг доменных ошибок, глобальный фильтр.
- Слоистая архитектура: controller → service → repository/data access. SOLID и DI на практике, где граница модуля.
- Логирование через `Logger` и pino, health checks (Terminus), OpenAPI.

**Middle:** собирает модульную структуру, чинит ошибки DI, пишет guard, pipe и interceptor под задачу. **Strong Middle:** проектирует границы модулей и сквозную функциональность (контекст запроса, аудит, мультитенантность) без деградации производительности.

## 5. `pg`: PostgreSQL — SQL, транзакции, индексы

**after:** —  **Глубина:** Middle `debug` / Strong Middle `design`  **Слабое место по самооценке**

**Зачем:** «БД глубже CRUD» — один из главных фильтров на Middle. Транзакции, индексы и EXPLAIN спрашивают в обоих рынках. В вакансиях EU прямо пишут «schema design and performance optimisation».

**Понятия:**
- SQL: JOIN-ы (inner/left), GROUP BY / HAVING, подзапросы, CTE, оконные функции (`row_number`, `rank`, `sum() over`) на базовом уровне, `UPSERT` (`ON CONFLICT`).
- Проектирование схемы: нормализация до 3НФ и осознанная денормализация, ключи (serial/identity против UUID/UUIDv7), FK, `UNIQUE`, `CHECK`, `NOT NULL`. Ограничения как последняя линия защиты.
- ACID; MVCC в общих чертах (версии строк, `VACUUM`).
- Уровни изоляции: Read Committed (по умолчанию), Repeatable Read, Serializable. Аномалии: non-repeatable read, phantom, lost update, write skew. Ошибки сериализации (40001) и ретраи.
- Блокировки: строковые (`SELECT … FOR UPDATE` / `SKIP LOCKED`), дедлоки. Оптимистическая блокировка через колонку `version`.
- Индексы: B-tree (порядок колонок в составном индексе, правило левого префикса, skip scan в PG 18), частичные индексы, индексы по выражению, покрывающие (`INCLUDE`), GIN для jsonb и полнотекстового поиска. Цена индекса на запись.
- `EXPLAIN (ANALYZE, BUFFERS)`: Seq Scan, Index Scan, Index Only Scan, Bitmap; Nested Loop, Hash Join, Merge Join; оценка строк против факта.
- Пагинация keyset против OFFSET на уровне SQL.
- Пул соединений и `max_connections`, PgBouncer в общих чертах.

**Middle:** пишет корректные запросы, выбирает индекс и подтверждает его через EXPLAIN, распознаёт гонку read-modify-write и чинит её. **Strong Middle:** выбирает уровень изоляции и стратегию блокировок под сценарий, проектирует схему под нагрузку.

## 6. `orm`: Prisma и доступ к данным — схема, миграции, N+1

**after:** `pg`, `nest`  **Глубина:** Middle `debug` / Strong Middle `design`  **Слабое место по самооценке**

**Зачем:** ORM в Node фигурирует в большинстве вакансий. На интервью ждут понимания, какой SQL генерирует ORM, и умения безопасно менять схему в проде.

**Понятия:**
- `schema.prisma`: модели, связи 1-1, 1-N и N-M (явная и неявная таблица связи), `@map`/`@@map`, `@@index`, `@@unique`, enum-ы.
- Клиент: `select` против `include`, вложенные чтения и записи, фильтры по связям. Какие SQL-запросы уходят в базу (логирование запросов).
- N+1: как возникает (цикл с `await`), как обнаружить (лог, счётчик запросов в тесте, `pg_stat_statements`), как исправить (`include`, `in`-запрос, батчинг).
- Транзакции в Prisma: вложенные записи, интерактивная транзакция (`tx`), уровень изоляции. Побочные эффекты нельзя вызывать внутри транзакции.
- Миграции: `migrate dev` против `migrate deploy`, shadow database, drift, `--create-only` и ручная правка SQL, baseline.
- Безопасные изменения схемы (expand/contract): переименование колонки, `NOT NULL` на большой таблице, бэкфилл батчами, `CREATE INDEX CONCURRENTLY`.
- Raw SQL (`$queryRaw` и типизированный SQL) и защита от инъекций.
- Подключение Prisma в Nest: provider, закрытие соединения, пул.
- **Версия:** стабильна Prisma ORM 7. Prisma 8 в статусе RC (GA ожидается в октябре 2026), API транзакций и клиента там заметно меняется. Понятия области от версии не зависят.

**Middle:** находит и чинит N+1, пишет и применяет миграции, корректно использует транзакции. **Strong Middle:** планирует миграции без даунтайма, понимает, когда уйти с ORM на SQL.

## 7. `auth`: аутентификация, авторизация, безопасность

**after:** `http`, `nest`  **Глубина:** Middle `apply` / Strong Middle `design`

**Зачем:** «как у вас устроена авторизация» — почти обязательный вопрос. В OWASP Top 10:2025 на первом месте Broken Access Control (IDOR).

**Понятия:**
- Аутентификация и авторизация. Сессии (cookie + серверное хранилище) против JWT: trade-offs, отзыв токенов.
- Access/refresh: время жизни, ротация refresh, обнаружение повторного использования, хранение на клиенте (память, httpOnly cookie, localStorage и риски XSS).
- Cookies: `HttpOnly`, `Secure`, `SameSite`, `Path`, `Domain`.
- Хеширование паролей: argon2id, bcrypt, соль. Почему SHA-256 не подходит.
- Авторизация: RBAC, проверка владения ресурсом (IDOR), guards и декораторы ролей в Nest.
- CORS: что он защищает, а что нет; preflight; `credentials` и allowlist origin-ов.
- CSRF (при cookie-аутентификации), XSS (React экранирует, но `dangerouslySetInnerHTML`), SQL-инъекции (raw-запросы).
- Rate limiting (`@nestjs/throttler`), helmet, секреты в env, а не в коде.
- OWASP Top 10:2025 и OWASP API Security Top 10 на уровне «назвать и привести пример из своего стека».
- OAuth 2.0 / OIDC в общих чертах (вход через Google): authorization code + PKCE.

**Middle:** реализует логин, регистрацию и refresh с ротацией, закрывает IDOR, CORS и валидацию. **Strong Middle:** проектирует модель доступа (роли и владение), объясняет угрозы для выбранной схемы.

## 8. `be-test`: тестирование бэкенда

**after:** `nest`, `orm`  **Глубина:** Middle `apply` / Strong Middle `design`  **Слабое место по самооценке**

**Зачем:** на EU/US без тестов Middle не берут. В РФ тесты всё чаще проверяют на live coding и ревью. Нужно уметь объяснить свою стратегию тестирования.

**Понятия:**
- Виды тестов: unit, integration, e2e; пирамида и testing trophy; что даёт уверенность, а что только покрытие.
- Test doubles: stub, mock, spy, fake. Что мокать (границы системы: внешние API, время), а что нет (свою БД в интеграционных тестах).
- Nest: `Test.createTestingModule`, `overrideProvider`, `useValue` с `vi.fn()`/`jest.fn()`, тестирование guards и pipes.
- Интеграционные и e2e-тесты: supertest поверх `INestApplication`, реальный Postgres (docker-compose / Testcontainers), миграции перед прогоном.
- Изоляция данных: БД или схема на воркер, truncate против отката транзакции, фабрики данных, независимость от порядка тестов.
- Структура теста (Arrange/Act/Assert), проверка поведения, а не реализации; негативные сценарии.
- Flaky-тесты: причины (общие данные, время, порядок, ретраи), диагностика.
- Vitest и Jest: моки модулей, fake timers, покрытие.

**Middle:** пишет unit-тесты сервисов и e2e-тесты эндпоинтов с реальной БД, тесты стабильны. **Strong Middle:** выстраивает стратегию тестирования проекта и CI-прогон, борется с флаки.

## 9. `react`: модель рендеринга и хуки

**after:** `ts`  **Глубина:** Middle `debug` / Strong Middle `debug`  **Слабое место по самооценке**

**Зачем:** «React под капотом» — главный блок фронтенд-интервью на Middle: почему компонент перерендерился, что выведет код, что не так с эффектом.

**Понятия:**
- Рендер — это вызов функции компонента. Фазы render и commit; чистота компонентов (Rules of React); StrictMode и двойной вызов.
- Триггеры ререндера: изменение state (сравнение `Object.is`), ререндер родителя, изменение контекста. Изменение пропсов само по себе ререндер не вызывает.
- Reconciliation: сравнение по типу и позиции, `key` (почему не индекс), сохранение и сброс состояния, сброс через `key`. Fiber на уровне «зачем»: прерываемый рендер, приоритеты.
- State: снимок значения в замыкании, батчинг, функциональные апдейты, очередь обновлений. `useReducer`.
- Размещение состояния: поднятие, колокация, производное состояние вычисляется при рендере, а не хранится; источник истины.
- Эффекты: синхронизация с внешним миром, зависимости, cleanup, гонки запросов, «You Might Not Need an Effect»; `useLayoutEffect`; `useEffectEvent` (React 19.2).
- Refs: `useRef` для мутабельных значений и DOM.
- Мемоизация: `memo`, `useMemo`, `useCallback`, когда они помогают; React Compiler 1.0 (автоматическая мемоизация) и что от этого меняется.
- Context: стоимость обновлений, разделение контекстов, композиция (`children`) как способ избежать ререндеров.
- Конкурентные возможности: `useTransition`, `useDeferredValue`, `Suspense`; React 19: `use`, Actions, `useOptimistic` на уровне «знаю, что это».
- Error boundaries.

**Middle:** предсказывает рендеры и значения state по коду, чинит эффекты (зависимости, гонки, производное состояние), мемоизирует осознанно. **Strong Middle:** то же, но быстро и на больших компонентах, плюс профилирование и рефакторинг архитектуры состояния.

## 10. `fe-data`: данные и состояние на фронте — TanStack Query, формы, роутинг

**after:** `react`, `http`  **Глубина:** Middle `apply` / Strong Middle `design`

**Зачем:** серверное состояние, кеш и инвалидация — повседневная работа фуллстека. В РФ также встречается Redux Toolkit, его стоит знать на уровне «чем отличается и когда нужен».

**Понятия:**
- Server state против client state; где хранить UI-состояние (локальный state, context, Zustand/RTK), URL как состояние.
- TanStack Query: query keys (иерархия, фабрики ключей, `queryOptions`), `staleTime` и `gcTime` (дефолты 0 и 5 мин), refetch on focus/mount/reconnect, `retry`, `enabled`, `select`, `placeholderData`.
- Мутации: `invalidateQueries`, `setQueryData`, optimistic updates с откатом, `onSettled`.
- Зависимые и параллельные запросы, пагинация и бесконечная лента (`useInfiniteQuery`), prefetch.
- Обработка ошибок и загрузки: error boundaries, Suspense-режим (`useSuspenseQuery`).
- Формы: контролируемые и неконтролируемые поля, React Hook Form + zod, серверные ошибки валидации в форме.
- React Router: вложенные маршруты, параметры, search params, loaders (data mode), защищённые маршруты, ленивая загрузка.
- Общий контракт с API (типы и схемы), обработка 401 и refresh на клиенте.

**Middle:** грамотно строит ключи, инвалидацию и optimistic UI, форма с валидацией, URL-состояние. **Strong Middle:** проектирует слой данных приложения (кеш, префетч, согласованность после мутаций).

## 11. `fe-test`: тестирование фронтенда

**after:** `react`, `fe-data`  **Глубина:** Middle `apply` / Strong Middle `debug`  **Слабое место по самооценке**

**Зачем:** на EU/US это ожидаемый навык. В РФ это частый вопрос «как тестируете фронт» и плюс к офферу.

**Понятия:**
- Философия Testing Library: тестировать так, как пользуется пользователь; приоритет запросов (`getByRole` → … → `getByTestId`).
- `getBy`, `queryBy`, `findBy`; `user-event` против `fireEvent`; асинхронность, `waitFor`, предупреждение `act(...)`.
- MSW: мок на уровне сети, handlers и переопределение на тест, `onUnhandledRequest`.
- Тестирование компонентов с TanStack Query: новый `QueryClient` на тест, `retry: false`, провайдеры (обёртка `render`).
- Тестирование хуков (`renderHook`), форм, роутинга (memory router).
- Vitest + jsdom/happy-dom; Vitest browser mode в общих чертах.
- E2E: Playwright (локаторы, авто-ожидания, фикстуры), что покрывать e2e, а что компонентными тестами.
- Распространённые ошибки (Kent C. Dodds), флаки на фронте (таймеры, анимации, общий кеш).

**Middle:** пишет стабильные компонентные тесты с MSW и пару e2e на критический путь. **Strong Middle:** выбирает стратегию (что тестировать на каком уровне), чинит флаки.

## 12. `perf`: производительность и кеширование

**after:** `pg`, `react`, `nest`  **Глубина:** Middle `apply` / Strong Middle `design`

**Зачем:** Redis есть почти в каждой вакансии РФ. Вопросы «как ускорить» задают и про бэк, и про фронт.

**Понятия:**
- Измерять прежде чем оптимизировать: метрики (latency p95/p99, throughput), профилирование (React DevTools Profiler, Chrome Performance, `--inspect`, clinic/0x в общих чертах), EXPLAIN для SQL.
- HTTP-кеширование: `Cache-Control` (`max-age`, `no-cache`, `no-store`, `immutable`, `private`/`public`), `ETag`/`304`, кеширование хешированных бандлов и `index.html`, CDN.
- Redis: типы данных, TTL, политики вытеснения; паттерн cache-aside, инвалидация при записи, stampede (single-flight, jitter), негативное кеширование; `@nestjs/cache-manager`.
- Redis для другого: rate limiting, сессии, очереди (BullMQ), distributed lock в общих чертах.
- Бэкенд: N+1 и индексы (из `pg`/`orm`), пагинация, сжатие, пул соединений, стриминг больших ответов.
- Фронтенд: лишние ререндеры и мемоизация, `useDeferredValue`/`useTransition`, виртуализация длинных списков, code splitting (`lazy`), размер бандла.
- Web Vitals (LCP, INP, CLS) на уровне «что значат и как улучшить».

**Middle:** добавляет Redis-кеш с осознанной инвалидацией, настраивает HTTP-кеш статики, находит лишние ререндеры профайлером. **Strong Middle:** проектирует многоуровневое кеширование, защиту от stampede, бюджет производительности.

## 13. `delivery`: инфраструктура и доставка — Docker, CI, конфиг, логи

**after:** `nest`, `orm`, `be-test`  **Глубина:** Middle `apply` / Strong Middle `design`

**Зачем:** Docker и CI/CD есть почти во всех вакансиях. Middle сам поднимает окружение, пишет Dockerfile и пайплайн.

**Понятия:**
- Docker: image против container, слои и кеш сборки, multi-stage для Node/Nest, `.dockerignore`, non-root пользователь, PID 1 и сигналы.
- docker-compose: сервисы и сеть (имя сервиса = хост), volumes, `depends_on` + healthcheck, env-файлы.
- Конфигурация по 12-factor: env, валидация на старте, разные окружения, секреты не в образе и не в git.
- Миграции в пайплайне: `migrate deploy` до старта приложения, один раз на релиз.
- CI (GitHub Actions): lint, typecheck, unit, интеграционные тесты с Postgres как service container, build, кеш pnpm; CD: образ с тегом commit SHA, деплой на staging.
- Логирование: структурные логи (JSON, pino), уровни, correlation/request id, что не логировать (PII, токены).
- Наблюдаемость в общих чертах: метрики, трассировка (OpenTelemetry), health/readiness probes.
- Git-флоу: ветки, PR, ревью, conventional commits.

**Middle:** поднимает проект в compose, пишет Dockerfile и CI с тестами на БД, логирует так, чтобы по логам можно было разобрать инцидент. **Strong Middle:** проектирует пайплайн релиза (миграции, откат, окружения) и наблюдаемость.

## 14. `sysdesign`: system design уровня Middle

**after:** `pg`, `auth`, `perf`, `delivery`  **Глубина:** Middle `apply` / Strong Middle `design`

**Зачем:** в крупных компаниях РФ system design проводят с определённого грейда, на EU/US часто бывает «облегчённый» дизайн. На Middle ждут не проектирования «Twitter для миллиарда», а работающей схемы фичи: API, данные, фоновые задачи, отказоустойчивость.

**Понятия:**
- Ход ответа: требования (функциональные и нефункциональные), оценка нагрузки «на салфетке», API, модель данных, схема компонентов, узкие места, trade-offs.
- Горизонтальное масштабирование stateless-API: что мешает (in-memory состояние, локальные файлы, cron, websockets), балансировщик, пул соединений к БД.
- Фоновая обработка: очереди (BullMQ, RabbitMQ, Kafka на уровне различий), воркеры, ретраи с backoff, DLQ, `202` + статус.
- Надёжность: идемпотентность, at-least-once и идемпотентные консьюмеры, transactional outbox (проблема dual write), таймауты, circuit breaker в общих чертах.
- Хранение: реляционная БД, кеш и объектное хранилище (S3, presigned URL); реплики для чтения; когда шардирование (на уровне «знаю, что есть»).
- Согласованность: строгая и eventual, что видит пользователь.
- Real-time: polling, SSE, WebSocket — выбор.
- Монолит, модульный монолит и микросервисы: когда что; события между модулями.
- Фронтенд system design (Т-Банк, Авито): архитектура SPA, слой данных, кеш, состояние, производительность.

**Middle:** проектирует фичу end-to-end с очередью и хранилищем, объясняет выбор. **Strong Middle:** уверенно ведёт 45-минутную секцию, обсуждает отказы, согласованность и масштабирование.

---

## Лестница уровней

Уровни сформулированы через наблюдаемые умения: что человек делает сам, без подсказок, в коде и на собеседовании.

### L1. Strong Junior+
- По готовой постановке делает CRUD-фичу end-to-end: Nest-модуль с DTO-валидацией и guard, Prisma-модель со связью и миграцией, React-страница с `useQuery`/`useMutation` и формой.
- Объясняет event loop, правила хуков и причины ререндера на простых примерах. Предсказывает вывод простых async-сниппетов.
- Пишет SQL с JOIN и GROUP BY. Знает, что такое индекс и транзакция, но гонки и N+1 находит только с подсказкой.
- Пишет unit-тест сервиса с моками через `TestingModule` и компонентный тест «счастливого пути».
- Поднимает проект в docker-compose по образцу.
- **Рынок:** проходит Junior+ и часть «младших Middle» в РФ. На EU/US это уровень Junior.

### L2. Middle — целевой минимум для обоих рынков
- Сам декомпозирует фичу и доводит её до прода: контракт API (пагинация, ошибки, идемпотентность), миграция, транзакция там, где она нужна, с объяснением почему.
- Находит и чинит N+1, обосновывает индекс через `EXPLAIN ANALYZE`, распознаёт lost update и чинит его атомарным `UPDATE` или блокировкой.
- Реализует access/refresh с ротацией и правильным хранением на клиенте, закрывает IDOR, CORS и валидацию.
- Пишет интеграционные и e2e-тесты бэкенда с реальным Postgres и компонентные тесты на RTL + MSW. Тесты не флакают.
- Находит лишние ререндеры через Profiler, чинит эффекты (зависимости, гонки, производное состояние), управляет кешем TanStack Query (ключи, инвалидация, optimistic update).
- Пишет multi-stage Dockerfile, compose и CI с тестами на БД.
- На system design уровня фичи (экспорт, уведомления) даёт рабочую схему с очередью и объясняет её.
- **Рынок:** проходит Middle-интервью в большинстве продуктовых компаний и аутсорса РФ. На EU/US это mid-level в стартапах и аутсорсе, если есть достаточный английский и опыт подаётся убедительно.

### L3. Strong Middle
- Всё из L2, плюс проектирует подсистему с учётом конкурентного доступа: уровни изоляции и ретраи на 40001, optimistic locking, outbox, идемпотентные консьюмеры.
- Строит многоуровневое кеширование (HTTP, Redis, TanStack Query) с осознанной инвалидацией и защитой от stampede.
- Расследует инциденты по структурным логам с request id: блокировку event loop, утечку памяти, медленный запрос.
- Ведёт 45-минутную секцию system design и обсуждает trade-offs вслух (для EU/US по-английски).
- Ревьюит чужой код по тестируемости, безопасности и производительности и аргументирует замечания.
- **Рынок:** уверенный Middle и Middle+ в РФ, включая секции big tech. На EU/US это mid-level с запасом.

### L4. Middle+ / начало Senior-трека — ориентир, не цель на этот срок
- Проектирует системы из нескольких сервисов и их эволюцию, отвечает за production (SLO, инциденты), менторит, принимает архитектурные решения с долгим горизонтом.
- При опыте меньше года и 10–15 ч/нед. за 3–4 месяца это недостижимо: здесь решают коммерческий опыт и ownership, а не знания.

**Оценка планировщика:** за 3–4 месяца (~150–200 ч) реалистична цель L2, а L3 достижим частично, в 2–4 областях (например `pg`, `react`, `be-test`). Окончательный выбор делается после диагностики. На EU/US рынке требование «3+ года» — ограничение по опыту, а не по знаниям, и учебный план его не снимает. Помогут портфолио-проект с тестами, CI и README, а также английский.
