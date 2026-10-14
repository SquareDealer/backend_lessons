# Roadmap: Fullstack TypeScript (NestJS + Prisma + PostgreSQL · React + TanStack Query)
Target: L2-ядро — Middle в `ts`, `nest`, `pg`, `orm`, `auth`, `react`, `fe-data`; `runtime` и `http` до apply; L1 в `be-test`, `fe-test`, `perf`, `delivery`, `sysdesign` · Pace: 15+ ч/нед · Workspace started: 2026-10-14

**Обзор.** 9 модулей, 49 уроков, 9 milestones. Уроки занимают ≈170 ч, milestones ≈60 ч, итого ≈230 ч. С повторениями (~10%, разминки по `reviews.md`) выходит ≈253 ч, то есть ≈17 недель при 15 ч/нед. Программа заканчивается 08.02.2027, дальше буфер 09.02–14.02, собеседования с ~15.02.2027. Диагностика ничего не подтвердила на уровне apply, поэтому пропущенных уроков нет.

**Сквозной проект «Маркет»** (монорепо на pnpm: `packages/contracts`, `apps/api`, `apps/web`; каталог, корзина, заказы, продавцы). Каждый milestone добавляет к нему слой: от типизированного клиента до compose, CI и system design. К февралю это портфолио-проект с тестами и README.

**Пометки.** «(L1, по образцу)» — короткий урок до уровня L1 с готовым образцом. «(сжато)» — тема частично знакома (LR-0002). Prisma везде версии 7, не v8 RC.

**Календарь** (часы модуля без учёта повторений; даты с учётом ~10% на повторения):
- Модуль 1 · нед. 1–3 · 14.10–29.10 · ~31 ч · система типов TS и async-рантайм (общая база)
- Модуль 2 · нед. 3–5 · 30.10–13.11 · ~30 ч · PostgreSQL и REST-контракт (бэк)
- Модуль 3 · нед. 5–7 · 14.11–27.11 · ~27 ч · модель рендеринга React и хуки (фронт)
- Модуль 4 · нед. 7–9 · 28.11–10.12 · ~25.5 ч · архитектура NestJS (бэк)
- Модуль 5 · нед. 9–11 · 11.12–25.12 · ~28.5 ч · TanStack Query, роутинг, формы, RTL (фронт)
- Модуль 6 · нед. 11–13 · 26.12–06.01 · ~24.5 ч · Prisma, транзакции, тесты бэка (бэк; новогодние праздники)
- Модуль 7 · нед. 13–14 · 07.01–18.01 · ~22 ч · аутентификация и безопасность end-to-end
- Модуль 8 · нед. 14–16 · 19.01–30.01 · ~24.5 ч · кеш, Docker/CI, system design (L1)
- Модуль 9 · нед. 16–17 · 31.01–08.02 · ~17 ч · готовность к собеседованиям
- Буфер · нед. 17–18 · 09.02–14.02 · на отставание или дополнительное mock-интервью

**Контрольная точка 10.12** (конец модуля 4, см. LR-0003). Если отставание больше недели, сокращать в первую очередь L42, L44, L49 и деплойную часть milestone 8, а не уроки ядра.

## Module 1: Фундамент — система типов TypeScript и асинхронный рантайм Node
- [ ] L01 Сужать `unknown` и union-типы без `as`: `typeof`/`in`/`instanceof`, discriminated unions, type guard `x is T`, exhaustive check через `never` · goal: apply · after: — · ~4.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: From scratch — функции-сужатели + type tests (vitest `expectTypeOf`, `tsc --noEmit`, `strict: true`); начать с any vs unknown vs never (диагностика ts.1=0); sources: TS Handbook: Narrowing; Total TypeScript Essentials -->
- [ ] L02 Писать generic-функции с ограничениями: `<T, K extends keyof T>`, индексный доступ `T[K]`, вывод типов-аргументов · goal: apply · after: L01 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: From scratch — `pick`, `groupBy`, `sortBy` с type tests; `pick<T, K>` из диагностики ts.2 (там было 0) как контрольная задача; sources: TS Handbook: Generics; TS Handbook: Creating Types from Types (keyof, indexed access) -->
- [ ] L03 Выводить типы из типов: DTO через `Pick`/`Omit`/`Partial`/`Record`, `typeof` + `as const`, `satisfies`; читать mapped и conditional types · goal: apply · after: L02 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: From scratch — модель `Product` → `CreateProductDto`/`UpdateProductDto`/`ProductResponse`, конфиг маршрутов через `as const` + `satisfies`; type tests; sources: TS Handbook: Utility Types; TS Handbook: Creating Types from Types -->
- [ ] L04 Валидировать внешние данные на границе доверия через zod и выводить тип из схемы (`z.infer`) вместо `as` · goal: apply · after: L01, L03 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — готовый fetch-клиент к mock API; ученик пишет схемы и слой parse → `Result`-union в TODO(human); vitest с битыми ответами; тезис «`as` — утверждение, не проверка»; sources: Zod; TS Handbook: Narrowing -->
- [ ] L05 Предсказывать поведение замыканий, `this` и сравнения по ссылке (`===`, `Object.is`) в блиц-сниппетах · goal: explain · after: — · ~2.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 4 сниппета: замыкание в цикле var/let, потерянный `this` в колбэке и методе класса, мутация объекта vs новая ссылка (мостик к React и `Object.is`); sources: learn.javascript.ru; Node.js Design Patterns, 4th ed. -->
- [ ] L06 Предсказывать порядок вывода async-сниппетов: синхронный код, `process.nextTick`, микрозадачи, таймеры, `setImmediate`, тело `async` до первого `await` · goal: apply · after: — · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 4 сниппета: предсказать, потом запустить в Node 25, сравнить CJS и ESM для nextTick; misconception (errors.md): «колбэки попадают в очереди из call stack» → колбэки ставят в очереди API (таймеры, промисы, I/O), event loop переносит их в пустой стек; диагностика runtime.2: не знал, что тело async до первого await выполняется синхронно; sources: Node.js: The Event Loop, Timers, and process.nextTick(); learn.javascript.ru «Event loop» -->
- [ ] L07 Писать конкурентный async-код с ограничением параллелизма и таймаутом (`AbortController`), выбирать `all`/`allSettled`/`race`/`any` и чинить `forEach(async …)` · goal: apply · after: L06 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — `mapWithConcurrency(items, limit, fn)` и `withTimeout` в TODO(human), vitest с fake timers; дополнительно — что блокирующий CPU-цикл делает с сервером; sources: learn.javascript.ru «Промисы, async/await»; Node.js: Don't Block the Event Loop -->
- [ ] Milestone: «Маркет» v0. Пакет `packages/contracts` и типизированный API-клиент: zod-схемы товара и заказа, `Result`-union ответов, generic `request<T>()`, батч-загрузка с лимитом параллелизма и таймаутом. Посреди работы тьютор-заказчик добавляет новый статус товара (`archived`): exhaustive check должен поймать его при компиляции · ~5 ч
  <!-- portfolio: основа контрактов для api и web; community: @ts_cool -->

## Module 2: Данные и контракт — PostgreSQL и REST API
- [ ] L08 Проектировать схему заказов с ограничениями (PK, FK, `UNIQUE`, `CHECK`, `NOT NULL`) и писать к ней запросы с JOIN, GROUP BY/HAVING, CTE и `ON CONFLICT` · goal: apply · after: — · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — docker-compose с Postgres 18 и сидом; ученик пишет DDL и SQL в TODO(human), vitest гоняет их на реальной БД и проверяет результаты и срабатывание ограничений; одна задача на оконные функции базового уровня; sources: «Основы технологий баз данных» (Postgres Pro); PostgreSQL Wiki: Don't Do This -->
- [ ] L09 Выбирать составной индекс по правилу левого префикса и подтверждать выбор через `EXPLAIN (ANALYZE, BUFFERS)` · goal: debug · after: L08 · ~4.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 4 запроса к таблице на ~1 млн строк: предсказать Seq/Index/Index Only/Bitmap Scan, проверить EXPLAIN ANALYZE; частичный индекс, индекс по выражению, цена индекса на запись; misconception (errors.md): «индекс не помогает, потому что now() пересчитывается» → now() стабильна в рамках запроса, причина в левом префиксе (воспроизвести запрос B из диагностики pg.2); sources: Use The Index, Luke; PostgreSQL Docs: Using EXPLAIN -->
- [ ] L10 Предсказывать аномалии на уровнях изоляции Read Committed / Repeatable Read / Serializable и объяснять ACID · goal: explain · after: L08 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — две psql-сессии: non-repeatable read, phantom, lost update, write skew на трёх уровнях; предсказать, потом выполнить; ошибка 40001 и ретрай; misconception (errors.md): «I в ACID = идемпотентность» → I = Isolation, а идемпотентность — свойство операций и HTTP-методов (разобрать различие явно); sources: PostgreSQL Docs: Concurrency Control (гл. 13); Хабр: «MVCC-1. Изоляция» (Рогов) -->
- [ ] L11 Распознавать lost update в read-modify-write и чинить его атомарным `UPDATE … WHERE stock >= $1`, `SELECT … FOR UPDATE` или колонкой `version` · goal: debug · after: L10 · ~4.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — списание остатка через драйвер `pg`; тест запускает 50 параллельных заказов на остаток 10; ученик чинит тремя способами в TODO(human) и сравнивает их; опора на сильную сторону из диагностики (сам придумал кейс «списать больше, чем есть»); sources: PostgreSQL Docs: Explicit Locking; «PostgreSQL 18 изнутри» (Рогов), часть про блокировки -->
- [ ] L12 Проектировать REST-контракт ресурса: ресурсные URL, safe/idempotent методы, коды ответов, ошибки в формате Problem Details (RFC 9457), пользователь из токена, а не из пути · goal: apply · after: L06 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 4 «плохих» эндпоинта (userId в пути → IDOR, 200 с ошибкой в теле, POST для чтения, URL `ordersList`): предсказать проблему, переписать контракт, проверить на готовом mock-сервере через vitest; диагностика http.2 (те же ошибки); sources: Zalando RESTful API Guidelines; RFC 9457 -->
- [ ] L13 Реализовать cursor (keyset) пагинацию в SQL и в контракте API: стабильная сортировка с tie-breaker, `nextCursor`, индекс под неё · goal: apply · after: L09, L12 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — эндпоинт на `node:http` + `pg`; ученик пишет keyset-запрос `(created_at, id) < ($1, $2)` и кодирование курсора; тест на стабильность при вставках во время листания; EXPLAIN для OFFSET 100000 и для keyset; sources: Use The Index, Luke (пагинация); Zalando RESTful API Guidelines (pagination) -->
- [ ] Milestone: «Маркет» — схема данных и контракт API. SQL-миграции (users, products, orders, order_items) с ограничениями; индексы под 3 главных запроса, обоснованные EXPLAIN ANALYZE на сид-данных; списание остатка без lost update; в `docs/api.md` описаны `GET /orders` (cursor, фильтр по статусу) и `POST /orders` с Problem Details. Посреди работы тьютор меняет требование: продавцу нужен список заказов по его товарам с сортировкой по сумме, поэтому индексы и курсор надо пересмотреть · ~6 ч
  <!-- portfolio: модель данных для apps/api; community: @pgsql (показать план EXPLAIN) -->

## Module 3: Модель рендеринга React и хуки
- [ ] L14 Предсказывать, какие компоненты перерендерятся и почему: рендер — это вызов функции, фазы render и commit, триггеры (state через `Object.is`, ререндер родителя, контекст) · goal: explain · after: L03, L05 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 4 Vite-сниппета со счётчиками рендеров: предсказать, проверить в React DevTools; StrictMode и двойной вызов; разобрать заблуждение «пропсы сами вызывают ререндер»; диагностика react.1/2=0; sources: react.dev: Render and Commit; Josh W. Comeau: Why React Re-Renders -->
- [ ] L15 Предсказывать значение state после серии обновлений (снимок, батчинг, функциональные апдейты) и выносить логику в `useReducer` · goal: apply · after: L14 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis + Core inside a scaffold — 3 сниппета на снимок и батчинг (предсказать вывод), затем корзина «Маркета» на `useReducer` с actions в виде discriminated union из L01; sources: react.dev: State as a Snapshot; react.dev: Learn (Queueing a Series of State Updates, Extracting State Logic into a Reducer) -->
- [ ] L16 Размещать состояние: поднимать и колоцировать, вычислять производное при рендере, сохранять и сбрасывать state через позицию и `key` · goal: apply · after: L15 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — каталог с фильтрами: убрать дублирующееся и производное состояние, починить «state прилип к другому товару» через key, ключи списка не по индексу; sources: react.dev: Choosing the State Structure; react.dev: Preserving and Resetting State -->
- [ ] L17 Писать эффект синхронизации с внешней системой: зависимости, cleanup, `useRef` для мутабельных значений, `useEffectEvent` · goal: apply · after: L16 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — подписка на WebSocket-мок, таймер и событие `storage` с корректным cleanup; включён линтер exhaustive-deps; sources: react.dev: Lifecycle of Reactive Effects; react.dev: Separating Events from Effects -->
- [ ] L18 Находить и убирать лишние эффекты и гонки запросов: производное состояние и обработчики событий вместо эффекта, игнорирование устаревшего ответа fetch · goal: debug · after: L17 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis + fix — 4 компонента: цепочка эффектов, гонка ответов при быстром переключении товара, бесконечный цикл из-за объекта в зависимостях (связь с L05), лишний state; предсказать баг, потом починить; sources: react.dev: You Might Not Need an Effect; Dan Abramov: A Complete Guide to useEffect -->
- [ ] L19 Находить лишние ререндеры в React Profiler и устранять их композицией (`children`, перенос state вниз, разделение контекста) или мемоизацией (`memo`, `useMemo`, `useCallback`); понимать, что меняет React Compiler · goal: debug · after: L18 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — медленный список и контекст корзины: предсказать эффект `memo` без `useCallback`, замерить Profiler'ом, сравнить с включённым React Compiler; sources: Dan Abramov: Before You memo(); Josh W. Comeau: Understanding useMemo and useCallback -->
- [ ] Milestone: «Маркет» web v0 (`apps/web`, Vite + React + TS). Каталог с фильтрами и сортировкой на производном состоянии, карточка товара через клиент из M1 без гонок, корзина на `useReducer`; данные отдаёт mock-сервер из каркаса по контракту M2. Посреди работы тьютор меняет требование: корзина должна синхронизироваться между вкладками. На защите ученик объясняет каждый эффект и каждый ререндер · ~6 ч
  <!-- portfolio: первый экран web; community: @react_js или Reactiflux -->

## Module 4: Архитектура NestJS
- [ ] L20 Собирать модули Nest (`imports`/`exports`/`providers`) и чинить ошибки «Nest can't resolve dependencies»; понимать, как декораторы и `emitDecoratorMetadata` обеспечивают DI · goal: debug · after: L03, L07, L12 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold + bug hunt — модули Products/Orders/Inventory, 4 сломанные конфигурации (нет export, провайдер не в том модуле, цикл, interface вместо токена): прочитать ошибку и починить; диагностика nest.2: «нужен import» без export и инкапсуляции; sources: NestJS Docs (Overview: Modules, Providers); NestJS: Circular dependency -->
- [ ] L21 Подменять реализации через токены и custom providers (`useClass`/`useValue`/`useFactory`) и собирать конфиг через `ConfigModule` с валидацией env · goal: apply · after: L04, L20 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — токен `PRODUCTS_REPOSITORY` с InMemory-реализацией (в M6 заменится на Prisma), `useFactory` с ConfigService, env-схема на zod из L04; scopes, «всплывание» request scope и AsyncLocalStorage — теория на уровне explain; sources: NestJS: Custom providers; NestJS: Configuration -->
- [ ] L22 Объяснять порядок request pipeline (middleware → guards → interceptors → pipes → handler → interceptors → filters) и выбирать слой под задачу · goal: explain · after: L20 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — каркас логирует вход и выход каждого слоя; 4 сценария (guard отклонил запрос, pipe упал на валидации, исключение в handler, interceptor меняет ответ): предсказать лог, выполнить curl; диагностика nest.1=0; sources: NestJS: Request lifecycle; NestJS Docs (Overview) -->
- [ ] L23 Валидировать вход через DTO и `ValidationPipe` (`whitelist`, `forbidNonWhitelisted`, `transform`) и превращать доменные ошибки в Problem Details глобальным exception filter · goal: apply · after: L21, L22 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — `CreateOrderDto` с вложенными items; `OutOfStockError`/`NotFoundError` → filter → RFC 9457 из контракта M2; e2e-тесты на supertest готовые; mass assignment из OWASP API объясняет, зачем whitelist; sources: NestJS: Validation; RFC 9457 -->
- [ ] L24 Писать guard, interceptor и кастомный декоратор под задачу (`ExecutionContext`, `Reflector`), включая обработку `Idempotency-Key` для `POST /orders` · goal: apply · after: L23 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — interceptor идемпотентности с in-memory хранилищем ключей (повтор → тот же ответ, параллельный дубль → 409), декоратор `@Public()` и guard-заглушка; тесты готовые; заодно повторить errors.md «I в ACID = идемпотентность» с другой стороны: что такое идемпотентная операция; sources: NestJS Docs (Guards, Interceptors, Custom decorators); Stripe: Designing robust and predictable APIs with idempotency -->
- [ ] Milestone: «Маркет» api v0 (`apps/api`, Nest 11). Модули products/orders/inventory с репозиториями за токенами (пока in-memory), DTO-валидация, Problem Details, cursor-пагинация `GET /products` по контракту M2, идемпотентный `POST /orders`, interceptor, логирующий длительность запроса. Посреди работы тьютор меняет требование: заказ резервирует товар, а при нехватке API отвечает 409 с машиночитаемым `code` и списком недостающих позиций · ~7 ч
  <!-- portfolio: бэкенд, к которому подключится web в M5; community: @nest_ru -->

## Module 5: Данные на фронте — TanStack Query, роутинг, формы (+ тесты фронта L1)
- [ ] L25 Загружать серверное состояние через `useQuery`: отличать server state от client state, настраивать `staleTime`/`gcTime`, `enabled`, `select`, понимать refetch-триггеры · goal: apply · after: L12, L18 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis + Core inside a scaffold — предсказать число запросов при фокусе окна и ремаунте (с дефолтами и с `staleTime`), проверить в Network и Devtools; затем перевести карточку товара из M3 с useEffect-fetch на useQuery; Redux Toolkit — на уровне «чем отличается и когда нужен»; диагностика fe-data.1/2=0; sources: TanStack Query: Important Defaults; Kent C. Dodds: Application State Management with React -->
- [ ] L26 Строить иерархию query keys (фабрика ключей, `queryOptions`) и бесконечную ленту на cursor-пагинации (`useInfiniteQuery`), делать prefetch · goal: apply · after: L13, L25 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — фабрика `productKeys`, лента каталога на `nextCursor` из api M4, prefetch карточки при hover; sources: TkDodo: Effective Query Keys + The Query Options API; TanStack Query: Query Keys -->
- [ ] L27 Писать мутации с инвалидацией (`invalidateQueries`), `setQueryData` и optimistic update с откатом · goal: apply · after: L26 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — смена статуса заказа и «в избранное» оптимистично; mock-сервер иногда отвечает 409/500, проверить откат; `onSettled` инвалидирует нужный уровень ключей; error boundary и `useSuspenseQuery` — обзорно; sources: TanStack Query: Optimistic Updates; TkDodo: Mastering Mutations in React Query -->
- [ ] L28 Строить маршруты React Router (вложенные, с параметрами, ленивые) и хранить состояние фильтров в URL (search params) · goal: apply · after: L16, L25 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — каталог `/products?category=&sort=`: URL как источник истины, связь search params с query key; вложенный `/orders/:id`; `lazy` для раздела продавца; sources: React Router (режимы declarative/data); Kent C. Dodds: Application State Management with React -->
- [ ] L29 Собирать форму на React Hook Form + zod (общая схема из `packages/contracts`) и показывать серверные ошибки валидации из Problem Details у полей · goal: apply · after: L04, L23, L27 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — форма создания товара, zod-резолвер, маппинг `errors[]` из ответа 422 на `setError`; sources: React Hook Form; Zod -->
- [ ] L30 (L1, по образцу) Писать компонентный тест на RTL + user-event с сетевым моком MSW и отдельным `QueryClient` на тест (`retry: false`) · goal: apply · after: L27 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold, по образцу — готовый тест-образец и обёртка `renderWithProviders`; ученик пишет 2 теста (счастливый путь и ошибка сервера) на `getByRole`/`findBy`; диагностика fe-test.1/2=0 («замокаю API» без MSW и асинхронных ожиданий); sources: Kent C. Dodds: Common mistakes with React Testing Library; TkDodo: Testing React Query -->
- [ ] Milestone: «Маркет» web v1 на реальном `apps/api` из M4. Каталог с фильтрами в URL и бесконечной лентой, карточка с prefetch, оформление заказа через форму с серверными ошибками, оптимистичная отмена заказа, 2 компонентных теста. Посреди работы тьютор меняет требование: после оформления заказа остаток в каталоге обновляется без перезагрузки; ученик решает, какие ключи инвалидировать, и объясняет почему · ~7 ч
  <!-- portfolio: фронт и бэк впервые работают вместе; community: TanStack Discord -->

## Module 6: Prisma и данные в приложении (+ тесты бэкенда L1)
- [ ] L31 Описывать модели и связи в `schema.prisma` и вести миграции: `migrate dev` vs `migrate deploy`, shadow DB, `--create-only` с ручной правкой SQL (переименование без потери данных, идея expand/contract) · goal: apply · after: L08, L21 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — Prisma 7 и Nest-провайдер с `onModuleDestroy`; перенести схему M2 в Prisma и заменить InMemory-репозиторий через токен из L21; одну миграцию поправить вручную; диагностика orm.1: не знает migrate dev/deploy; перед уроком перепроверить статус Prisma 8 (RESOURCES → Gaps); sources: Prisma Migrate: Development and production; Prisma Migrate: Customizing migrations -->
- [ ] L32 Находить N+1 по логу запросов и счётчику в тесте и чинить через `include`/`select` или `in`-запрос · goal: debug · after: L31 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis + fix — 4 варианта кода списка заказов с позициями: предсказать число SQL-запросов, проверить логом Prisma `query`, затем закрепить тестом «не больше 2 запросов»; диагностика orm.2: узнаёт N+1 (51 запрос), но не умеет обнаружить и починить; sources: Prisma: Query optimization (N+1); Prisma ORM 7 Docs (select/include) -->
- [ ] L33 Оформлять заказ в интерактивной транзакции Prisma и защищать остаток от lost update (условный `updateMany`, `SELECT … FOR UPDATE` через `$queryRaw`, ретрай на конфликте) без побочных эффектов внутри транзакции · goal: debug · after: L11, L31 · ~4.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — checkout-сервис; тест на реальном Postgres: 50 параллельных заказов на остаток 10 дают ровно 10 успешных; `$queryRaw` (tagged template) vs `$queryRawUnsafe` и SQL-инъекция; повтор L10/L11 в контексте ORM; sources: Prisma: Transactions (v7); PostgreSQL Docs: Explicit Locking -->
- [ ] L34 (L1, по образцу) Писать unit-тест сервиса через `Test.createTestingModule` с `useValue`-моками на `vi.fn()` и `overrideProvider` · goal: apply · after: L21, L33 · ~2.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold, по образцу — тест-образец для ProductsService; ученик пишет тесты OrdersService (успех, нехватка остатка, идемпотентный повтор); диагностика be-test.2: тестировал не тот юнит (PaymentsService вместо OrdersService), не было TestingModule/useValue — разобрать, что здесь юнит и где граница; sources: NestJS: Testing; Vitest: Mocking -->
- [ ] L35 (L1, по образцу) Писать e2e-тест эндпоинта: supertest поверх `INestApplication` и реальный Postgres (Testcontainers), миграции перед прогоном, изоляция данных между тестами · goal: apply · after: L34 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold, по образцу — global setup с Testcontainers, `migrate deploy` и truncate между тестами уже готовы; ученик пишет e2e для `POST /orders` и `GET /orders` с проверкой Problem Details; опора на сильную сторону (сам предлагал реальную БД для транзакций); sources: NestJS: Testing; Node.js Testing Best Practices (Goldberg) -->
- [ ] Milestone: «Маркет» api v1 на Postgres + Prisma. Миграции в репозитории, транзакционный checkout без lost update (нагрузочный тест на 50 параллельных заказов), список заказов без N+1 (ассерт на число запросов), unit- и e2e-тесты. Посреди работы тьютор меняет требование: цены переходят в копейки (`price` → `priceCents`) без даунтайма, нужна миграция expand/contract с бэкфиллом · ~7 ч
  <!-- portfolio: реальная БД под api и web; community: Prisma Discord или @pgsql -->

## Module 7: Аутентификация и безопасность end-to-end
- [ ] L36 (сжато) Реализовать регистрацию и логин в Nest: argon2id, короткий access JWT, JWT-guard и `@CurrentUser()`; объяснять trade-offs сессий и JWT · goal: apply · after: L24, L31 · ~2.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — знакомое по LR-0002 (argon2, короткий access) только повторить вопросами; практика: guard и декоратор, пользователь берётся из токена; sources: OWASP Password Storage Cheat Sheet; NestJS: Authentication -->
- [ ] L37 Реализовать refresh-токены с ротацией, хешем на сервере, reuse detection и отзывом (logout, «выйти везде»); хранить refresh в cookie `HttpOnly; Secure; SameSite` с узким `Path` · goal: apply · after: L33, L36 · ~4 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — таблица `refresh_tokens` с family id; ученик пишет rotate/revoke в TODO(human); тест: повтор старого refresh отзывает всю семью; misconception (errors.md): «токен в localStorage с пометкой HttpOnly cookie» → это разные хранилища, HttpOnly бывает только у cookie; sources: OWASP JSON Web Token Cheat Sheet; MDN: Cookies -->
- [ ] L38 Хранить токены на клиенте (access в памяти, refresh в HttpOnly cookie), обновлять access по 401 без гонок (single-flight refresh) и защищать маршруты · goal: apply · after: L28, L37 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — обёртка api-клиента: 401 → один общий refresh → повтор; 3 параллельных запроса не должны вызвать 3 refresh; protected route в React Router; тест на MSW; то же заблуждение из errors.md проверить в DevTools (`document.cookie` не видит HttpOnly); sources: OWASP JSON Web Token Cheat Sheet; React Router -->
- [ ] L39 Закрывать IDOR (BOLA) проверкой владения ресурсом и ролевым guard'ом (`@Roles()` + `Reflector`) · goal: apply · after: L36 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis + fix — 4 эндпоинта «Маркета»: предсказать, может ли покупатель B прочитать или изменить заказ A, а продавец — чужой товар; проверить curl'ом с двумя токенами; закрыть через `where: { id, ownerId }` и RBAC; диагностика http.2: userId в пути (IDOR-риск); sources: OWASP API Security Top 10 (API1 BOLA); OWASP Top 10:2025 (A01) -->
- [ ] L40 Настраивать CORS (allowlist origin, `credentials`, preflight), helmet, rate limiting и CSRF-защиту при cookie-auth; объяснять, от чего CORS не защищает · goal: apply · after: L37 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 4 сценария: запрос с другого origin с credentials и без, preflight на PUT с JSON, форма с чужого сайта при `SameSite=Lax`, XSS через `dangerouslySetInnerHTML`; предсказать, затем проверить на двух Vite-origin'ах; sources: MDN: CORS; OWASP CSRF Prevention Cheat Sheet -->
- [ ] Milestone: «Маркет» с аутентификацией end-to-end. Роли buyer/seller/admin, регистрация и логин, refresh с ротацией, тихое обновление на фронте, защищённые маршруты, продавец редактирует только свои товары. Посреди работы тьютор меняет требование: нужны «выйти на всех устройствах» и блокировка аккаунта админом с немедленным эффектом; ученик решает, что делать с уже выданными access-токенами · ~6 ч
  <!-- portfolio: полноценное приложение с пользователями; community: Code Review Stack Exchange или @nodejs_ru -->

## Module 8: Производительность, доставка и system design (L1)
- [ ] L41 (L1, по образцу) Добавлять Redis-кеш по схеме cache-aside с TTL и инвалидацией при записи (`@nestjs/cache-manager`); знать, что такое stampede · goal: apply · after: L33 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold, по образцу — кеш карточки товара: get → miss → БД → set с TTL и jitter; инвалидация в `update`; тест: после смены цены кеш не отдаёт старое значение; sources: NestJS: Caching; AWS Builders' Library: Caching challenges and strategies -->
- [ ] L42 (L1, по образцу) Настраивать HTTP-кеш статики и API (`Cache-Control: immutable` для хешированных бандлов, `no-cache` для `index.html`, `ETag`/304) и делить бандл через `lazy` · goal: apply · after: L28 · ~2.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 4 ответа с разными заголовками: предсказать поведение браузера при повторном визите и после деплоя, проверить в DevTools Network; размер бандла до и после `lazy`; `useTransition`/`useDeferredValue`, виртуализация и Web Vitals — на уровне «знаю, что это и когда применять»; sources: MDN: HTTP caching; web.dev: Learn Performance -->
- [ ] L43 (L1, по образцу) Упаковывать Nest-приложение в multi-stage Dockerfile (non-root, `.dockerignore`) и поднимать стек в docker-compose: сеть по имени сервиса, `depends_on` + healthcheck, `migrate deploy` до старта · goal: apply · after: L31, L35 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold, по образцу — образец Dockerfile для другого сервиса; ученик пишет Dockerfile для `apps/api` и compose для api + web + pg + redis; проверка: `docker compose up` с нуля поднимает рабочий стек; диагностика delivery.2=0; sources: Docker: Multi-stage builds; Docker Compose: Control startup order -->
- [ ] L44 (L1, по образцу) Собирать CI в GitHub Actions (lint, typecheck, unit, e2e с Postgres service container, кеш pnpm) и писать структурные логи pino с request id · goal: apply · after: L43 · ~2.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold, по образцу — готовый workflow-образец; ученик добавляет e2e-job с Postgres service и `nestjs-pino` с request id; проверка: зелёный прогон и лог инцидента, по которому находится нужный запрос; sources: GitHub Actions: PostgreSQL service containers; Pino + NestJS: Logger -->
- [ ] L45 (L1) Масштабировать stateless-API горизонтально: находить, что ломается на 3 репликах (in-memory состояние, локальные файлы, cron, пул соединений к БД) · goal: explain · after: L37, L43 · ~2.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — compose с `--scale api=3` за nginx; 4 сценария (in-memory idempotency-хранилище из L24, загрузка файла на диск, `@Cron` отправляет письмо трижды, `max_connections`): предсказать, затем воспроизвести; диагностика sysdesign.1: ответ «изолировать в сети докер»; sources: Hello Interview: System Design in a Hurry; The Twelve-Factor App -->
- [ ] L46 (L1, по образцу) Выносить долгую операцию в очередь: `202 Accepted` и статус задачи, воркер BullMQ с ретраями и backoff, идемпотентный обработчик; уметь назвать проблему dual write и outbox · goal: apply · after: L41, L45 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold, по образцу — экспорт заказов продавца в CSV: эндпоинт ставит job, воркер пишет файл стримом (`pipeline`); ученик пишет обработчик и эндпоинт статуса; sources: BullMQ Docs + NestJS: Queues; microservices.io: Transactional Outbox -->
- [ ] Milestone: system design фичи и «Маркет» в compose. Часть 1 (~3 ч, тьютор в роли интервьюера): спроектировать уведомления покупателю о смене статуса заказа (email и in-app): требования, API, данные, очередь, ретраи, что видит пользователь. Посреди работы тьютор добавляет real-time в открытой вкладке, нужно выбрать между polling, SSE и WebSocket. Часть 2 (~5 ч): весь «Маркет» поднимается `docker compose up` с нуля, CI зелёный, каталог кешируется в Redis, в README есть архитектурная схема · ~8 ч
  <!-- portfolio: проект готов к показу; community: r/node или @nodejs_ru (ревью архитектуры) -->

## Module 9: Готовность к собеседованиям
- [ ] L47 Отвечать на теоретический блиц по TS/JS/React/Node/SQL кратко и точно (формат РФ-собеседований), включая все темы из `errors.md` · goal: explain · after: L46 · ~3 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — 3 раунда по 15 вопросов и 4 задачи «что выведет код» на время; слабые места → в reviews.md; все 4 заблуждения из errors.md (ACID, now()/левый префикс, localStorage/HttpOnly, очереди event loop) обязательно в раундах; sources: roadmap.sh (Full Stack, React, Node.js) как чек-лист; hh.ru и Хабр Карьера — 10–15 актуальных вакансий для калибровки -->
- [ ] L48 Делать ревью чужого PR и live-coding фичи за 60 минут: находить IDOR, N+1, гонку, лишний эффект, `any`; проговаривать решения вслух · goal: apply · after: L47 · ~3.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Core inside a scaffold — PR-диф «Маркета» с 6 посаженными проблемами из всех модулей и задача на live-coding «добавить эндпоинт и экран со списком» под таймер; sources: Node.js Best Practices (Goldberg); react.dev: Rules of React -->
- [ ] L49 Рассказывать о портфолио-проекте и опыте по STAR на русском и английском: архитектура, trade-offs, «что бы сделал иначе» · goal: explain · after: L47 · ~2.5 ч
  - [ ] Theory → (заполнится при сборке)
  - [ ] Practice → (заполнится при сборке)
  - [ ] Mastered (delayed quiz ≥80%, ≥3 days later)
  <!-- format: Case analysis — тьютор задаёт 6 вопросов «почему так» по «Маркету» и 4 behavioral; ответ → разбор → повтор; EN-версия для remote EU/US; sources: Hello Interview: System Design in a Hurry (структура ответа); Djinni и justjoin.it (требования EU-вакансий) -->
- [ ] Milestone: финальное mock-интервью, 2 сессии по ~2 ч плюс разбор. (1) RU, техническое: блиц по всем областям и live-coding фичи «Маркета»; посреди задачи тьютор меняет требование. (2) EN: облегчённый system design фичи (например, отложенная публикация товаров) и behavioral. Итог: список тем на доработку до 15.02 и обновлённый `PROFILE.md` · ~8 ч
  <!-- community: @javascript_jobs / @nodejs_jobs — калибровка требований и вилок; r/cscareerquestionsEU -->
