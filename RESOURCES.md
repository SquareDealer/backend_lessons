# Ресурсы: Fullstack TypeScript (NestJS + React + PostgreSQL), Middle

Сюда отобраны только источники с высоким доверием: официальная документация, первоисточники (RFC, OWASP), признанные авторы и книги. Все ссылки проверены 2026-10-14. ID областей совпадают с `CONCEPT-MAP.md`.

## Knowledge

### `ts`: TypeScript
- [TS Handbook: Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html): официальный разбор сужения типов, discriminated unions, type guards, `never`. Читать первым.
- [TS Handbook: Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html): ограничения, `keyof`, вывод типов-аргументов. Основа для generic-утилит и сервисов.
- [TS Handbook: Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html): `keyof`, `typeof`, indexed access, conditional и mapped types. Хватит уровня «читаю и пишу простое».
- [TS Handbook: Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html): справочник `Pick`, `Omit`, `Partial`, `ReturnType`, `Awaited` и др.
- [Total TypeScript Essentials (Matt Pocock)](https://www.totaltypescript.com/books/total-typescript-essentials): бесплатная онлайн-книга о TypeScript для прикладного кода, хорошо закрывает пробелы после Handbook.
- [Effective TypeScript (Dan Vanderkam)](https://effectivetypescript.com/): книга-сборник правил (2-е изд.) про `any`/`unknown`, вывод типов, проектирование типов. Для уровня L3.
- [Zod](https://zod.dev/): runtime-валидация с выводом типов. Нужна для «границы доверия» (данные из API, env, формы).

### `runtime`: JavaScript и Node.js
- [learn.javascript.ru](https://learn.javascript.ru/): современный учебник JS на русском; разделы [«Промисы, async/await»](https://learn.javascript.ru/async) и [«Event loop»](https://learn.javascript.ru/event-loop) закрывают блиц-вопросы РФ-собеседований.
- [Node.js: The Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick): официальное описание фаз event loop и `nextTick`.
- [Node.js: Don't Block the Event Loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop): официальный гайд о том, почему CPU-код и ReDoS убивают сервер и что делать (worker pool, разбиение работы).
- [Node.js: Backpressuring in Streams](https://nodejs.org/en/learn/modules/backpressuring-in-streams): backpressure и `pipeline`. Пригодится для экспорта CSV и больших файлов.
- [Node.js API: AsyncLocalStorage](https://nodejs.org/api/async_context.html): контекст запроса без передачи параметров; основа для request id и текущего пользователя.
- [Node.js Design Patterns, 4th ed. (Casciaro, Mammino)](https://www.nodejsdesignpatterns.com/): лучшая книга по рантайму, асинхронным паттернам, стримам и масштабированию (обновлена под Node 24). Глава про стримы бесплатна.
- [Node.js Best Practices (Yoni Goldberg)](https://github.com/goldbergyoni/nodebestpractices): большой чек-лист по структуре, ошибкам, безопасности и продакшену. Удобен для самопроверки.

### `http`: HTTP и REST API
- [RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html): первоисточник по методам (safe/idempotent, разд. 9) и кодам ответов (разд. 15). Читать выборочно.
- [RFC 9457: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457.html): стандартный формат ошибок API.
- [Zalando RESTful API Guidelines](https://opensource.zalando.com/restful-api-guidelines/): зрелый корпоративный гайд по именованию, пагинации, ошибкам, совместимости. Удобен как эталон при проектировании.
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines): второй эталонный гайд, полезен для сравнения подходов.
- [Stripe: Designing robust and predictable APIs with idempotency](https://stripe.com/blog/idempotency): классическая статья про `Idempotency-Key` и безопасные ретраи.
- [AWS Builders' Library: Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/): та же тема глубже, с гонками и хранением ключей.
- [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP): справочник по заголовкам, кешированию, CORS и cookies (английская версия актуальнее русской).

### `nest`: NestJS
- [NestJS Docs](https://docs.nestjs.com/): официальная документация. Обязательно прочитать Overview и Fundamentals целиком.
- [NestJS: Request lifecycle](https://docs.nestjs.com/faq/request-lifecycle): точный порядок middleware, guards, interceptors, pipes и filters. Частый вопрос на собеседовании.
- [NestJS: Injection scopes](https://docs.nestjs.com/fundamentals/injection-scopes): request и transient scope, «всплывание» scope, стоимость, durable providers.
- [NestJS: Circular dependency](https://docs.nestjs.com/fundamentals/circular-dependency): `forwardRef` и почему циклы лучше устранять.
- [NestJS: Custom providers](https://docs.nestjs.com/fundamentals/custom-providers): `useClass`, `useValue`, `useFactory`, токены. Нужно и для тестов.
- [NestJS: Configuration](https://docs.nestjs.com/techniques/configuration) и [Validation](https://docs.nestjs.com/techniques/validation): `ConfigModule` с валидацией env, `ValidationPipe`.
- [nestjs-cls](https://papooch.github.io/nestjs-cls/): популярная библиотека-обёртка над AsyncLocalStorage для Nest. Альтернатива request scope.
- [Prisma: The new way to use Prisma ORM 8 in NestJS (2026-09)](https://www.prisma.io/blog/prisma-orm-8-nestjs): официальная схема интеграции Prisma 8 в Nest (провайдер, закрытие пула, явные `@Inject`).
- [NestJS Courses](https://courses.nestjs.com/): официальные платные курсы. Необязательно, документации достаточно.

### `pg`: PostgreSQL
- [PostgreSQL Docs: Concurrency Control (гл. 13)](https://www.postgresql.org/docs/current/mvcc.html): MVCC, [уровни изоляции](https://www.postgresql.org/docs/current/transaction-iso.html) и [явные блокировки](https://www.postgresql.org/docs/current/explicit-locking.html). Первоисточник для вопросов про транзакции.
- [PostgreSQL Docs: Indexes (гл. 11)](https://www.postgresql.org/docs/current/indexes.html): типы индексов, [составные индексы и skip scan](https://www.postgresql.org/docs/current/indexes-multicolumn.html), частичные и по выражениям.
- [PostgreSQL Docs: Using EXPLAIN](https://www.postgresql.org/docs/current/using-explain.html): как читать план запроса; читать с открытым psql.
- [Use The Index, Luke (Markus Winand)](https://use-the-index-luke.com/): лучший бесплатный текст об индексах и планах глазами разработчика, с примерами для PostgreSQL.
- [«PostgreSQL 18 изнутри» (Е. Рогов, Postgres Pro)](https://postgrespro.ru/education/books/internals): бесплатная книга (PDF) на русском о MVCC, блокировках, индексах и планировщике. Читать части про изоляцию и индексы.
- [«Основы технологий баз данных» (Postgres Pro)](https://postgrespro.ru/education/books/dbtech): бесплатный учебник на русском по реляционной модели, транзакциям и проектированию схем.
- [Хабр: «MVCC-1. Изоляция» (Е. Рогов)](https://habr.com/ru/companies/postgrespro/articles/442804/): первая статья цикла про изоляцию и MVCC на русском.
- [Хабр: «Индексы в PostgreSQL — 1» (Е. Рогов)](https://habr.com/ru/companies/postgrespro/articles/326096/): первая статья цикла про индексы на русском.
- [PostgreSQL Wiki: Don't Do This](https://wiki.postgresql.org/wiki/Don%27t_Do_This): антипаттерны схем и запросов от сообщества PostgreSQL.
- [explain.dalibo.com](https://explain.dalibo.com/): визуализатор планов EXPLAIN; удобен для разбора.
- [Designing Data-Intensive Applications, 2nd ed. (Kleppmann, Riccomini, 2026)](https://dataintensive.net/): главы про транзакции и изоляцию (write skew, lost update) объясняют «почему». Для уровня L3.

### `orm`: Prisma
- [Prisma ORM 7 Docs](https://www.prisma.io/docs/orm/v7): документация стабильной версии; рекомендуется для практики, пока Prisma 8 не вышла в GA.
- [Prisma: Release status](https://www.prisma.io/docs/orm/release-status): статус Prisma 8 (RC, GA ожидается в октябре 2026) и список функций, которых в v8 пока нет.
- [Prisma Migrate: Development and production](https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production): `migrate dev` и `migrate deploy`, shadow database.
- [Prisma Migrate: Customizing migrations](https://www.prisma.io/docs/orm/prisma-migrate/workflows/customizing-migrations): переименование без потери данных, expand/contract, ручная правка SQL.
- [Prisma: Query optimization (N+1)](https://www.prisma.io/docs/orm/prisma-client/queries/query-optimization-performance): как возникает N+1, батчинг `findUnique`, `include` и join-стратегия.
- [Prisma: Transactions](https://www.prisma.io/docs/orm/prisma-client/queries/transactions): интерактивные транзакции, побочные эффекты, ретраи на ошибках сериализации (страница уже про v8; для v7 смотреть [эту версию](https://www.prisma.io/docs/orm/v7/prisma-client/queries/transactions)).
- [Prisma: Relations](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations): связи 1-1, 1-N, N-M в схеме.

### `auth`: безопасность
- [OWASP Top 10:2025](https://top10.owasp.org/2025): актуальный список главных рисков веб-приложений (A01 Broken Access Control и др.).
- [OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x11-t10/): риски именно для API (BOLA/IDOR, mass assignment, rate limiting).
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html): argon2id, bcrypt и их параметры. Первоисточник для вопроса про пароли.
- [OWASP JSON Web Token Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/JSON_Web_Token_Cheat_Sheet.html): типовые ошибки с JWT, хранение и отзыв токенов.
- [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html): сессии, атрибуты cookies, ротация.
- [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html): когда CSRF актуален (cookie-auth) и как защищаться.
- [OWASP Node.js Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html): чек-лист безопасности для Node-бэкенда.
- [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) и [MDN: Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies): точная механика preflight, `credentials`, `SameSite`.
- [NestJS: Authentication](https://docs.nestjs.com/security/authentication): официальный рецепт guard-а с JWT; от него отталкиваться при реализации refresh-схемы.

### `be-test`: тестирование бэкенда
- [NestJS: Testing](https://docs.nestjs.com/fundamentals/testing): `Test.createTestingModule`, `overrideProvider`, e2e через supertest.
- [Node.js Testing Best Practices (Yoni Goldberg)](https://github.com/goldbergyoni/nodejs-testing-best-practices): лучший практический гайд по интеграционным тестам Node-бэкенда с реальной БД (изоляция данных, Docker, моки внешних сервисов).
- [JavaScript & Node.js Testing Best Practices (Yoni Goldberg)](https://github.com/goldbergyoni/javascript-testing-best-practices): более общий сборник правил про структуру тестов и антипаттерны.
- [Testcontainers for Node.js](https://node.testcontainers.org/): поднимает реальный Postgres в контейнере прямо из теста.
- [Martin Fowler: The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html): классика о видах тестов и балансе между ними.
- [Martin Fowler: Test Double](https://martinfowler.com/bliki/TestDouble.html): точная терминология (stub, mock, spy, fake).
- [Unit Testing: Principles, Practices, and Patterns (V. Khorikov)](https://www.manning.com/books/unit-testing): лучшая книга о том, что и как мокать и как писать устойчивые к рефакторингу тесты. Есть русский перевод «Принципы юнит-тестирования».
- [Vitest: Mocking](https://vitest.dev/guide/mocking): моки модулей, функций, таймеров в Vitest.

### `react`: модель рендеринга и хуки
- [react.dev: Learn](https://react.dev/learn): официальный учебник. Ключевые страницы: [Render and Commit](https://react.dev/learn/render-and-commit), [State as a Snapshot](https://react.dev/learn/state-as-a-snapshot), [Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state), [Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure).
- [react.dev: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect): главный текст про лишние эффекты и производное состояние. Читать обязательно.
- [react.dev: Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects) и [Separating Events from Effects](https://react.dev/learn/separating-events-from-effects): зависимости эффектов и `useEffectEvent`.
- [react.dev: Rules of React](https://react.dev/reference/rules): чистота компонентов и правила хуков. Формальная основа для ответов на интервью.
- [react.dev: React Compiler](https://react.dev/learn/react-compiler): что делает автоматическая мемоизация (Compiler 1.0) и как она меняет практику `useMemo`/`useCallback`.
- [Josh W. Comeau: Why React Re-Renders](https://www.joshwcomeau.com/react/why-react-re-renders/): лучшее наглядное объяснение триггеров ререндера.
- [Josh W. Comeau: Understanding useMemo and useCallback](https://www.joshwcomeau.com/react/usememo-and-usecallback/): когда мемоизация помогает, а когда нет.
- [Dan Abramov: A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/): ментальная модель эффектов и замыканий. Текст до react.dev, но модель актуальна.
- [Dan Abramov: Before You memo()](https://overreacted.io/before-you-memo/): композиция и перенос состояния вниз как альтернатива мемоизации.
- [Nadia Makarevich: React re-renders guide](https://www.developerway.com/posts/react-re-renders-guide): систематический справочник паттернов ререндеров. Автор книги [Advanced React](https://advanced-react.com/) с глубоким разбором производительности и reconciliation.

### `fe-data`: TanStack Query, формы, роутинг
- [TanStack Query: Important Defaults](https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults): дефолты (`staleTime: 0`, `gcTime: 5 мин`, ретраи, refetch on focus). Без этого кеш не понять.
- [TanStack Query: Query Invalidation](https://tanstack.com/query/latest/docs/framework/react/guides/query-invalidation), [Query Keys](https://tanstack.com/query/latest/docs/framework/react/guides/query-keys), [Optimistic Updates](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates): официальные гайды по главным механикам.
- [TkDodo: Practical React Query](https://tkdodo.eu/blog/practical-react-query): серия от мейнтейнера TanStack Query, эталонный источник практик. Начать с [Effective Query Keys](https://tkdodo.eu/blog/effective-react-query-keys), [Mastering Mutations](https://tkdodo.eu/blog/mastering-mutations-in-react-query), [The Query Options API](https://tkdodo.eu/blog/the-query-options-api), [React Query as a State Manager](https://tkdodo.eu/blog/react-query-as-a-state-manager).
- [Kent C. Dodds: Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react): где держать состояние, колокация, server и client state.
- [React Router](https://reactrouter.com/home): официальная документация; сначала [режимы (declarative, data, framework)](https://reactrouter.com/start/modes).
- [React Hook Form](https://react-hook-form.com/): формы с минимумом ререндеров; в связке с zod через resolver.

### `fe-test`: тестирование фронтенда
- [Testing Library: Guiding Principles](https://testing-library.com/docs/guiding-principles): философия «тестируй как пользователь».
- [Testing Library: About Queries](https://testing-library.com/docs/queries/about): приоритет запросов и `getBy`/`queryBy`/`findBy`.
- [Testing Library: user-event](https://testing-library.com/docs/user-event/intro): реалистичные взаимодействия вместо `fireEvent`.
- [Kent C. Dodds: Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library): список типичных ошибок; прочитать до первого теста.
- [Kent C. Dodds: Testing Implementation Details](https://kentcdodds.com/blog/testing-implementation-details) и [Stop mocking fetch](https://kentcdodds.com/blog/stop-mocking-fetch): почему проверять поведение и мокать сеть, а не модули.
- [Kent C. Dodds: The Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications): баланс static, unit, integration и e2e для фронта.
- [MSW Docs](https://mswjs.io/docs/): мок API на уровне сети; одни и те же handlers для тестов и разработки.
- [TkDodo: Testing React Query](https://tkdodo.eu/blog/testing-react-query): `QueryClient` на тест, `retry: false`, обёртки.
- [Playwright Docs](https://playwright.dev/docs/intro): e2e-тесты (локаторы, авто-ожидания, фикстуры).

### `perf`: производительность и кеширование
- [MDN: HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching): `Cache-Control`, валидация, стратегии для статики. Лучший сводный текст.
- [AWS Builders' Library: Caching challenges and strategies](https://aws.amazon.com/builders-library/caching-challenges-and-strategies/): cache-aside, stampede, негативное кеширование, отказ кеша. Взгляд инженеров с продакшен-опытом.
- [Redis Docs: Develop](https://redis.io/docs/latest/develop/): типы данных, TTL, вытеснение. Официальный справочник.
- [NestJS: Caching](https://docs.nestjs.com/techniques/caching): `@nestjs/cache-manager`, Redis-store, interceptor кеширования.
- [react.dev: useDeferredValue](https://react.dev/reference/react/useDeferredValue) и [memo](https://react.dev/reference/react/memo): официальные инструменты отзывчивости и мемоизации.
- [TanStack Virtual](https://tanstack.com/virtual/latest): виртуализация длинных списков и таблиц.
- [web.dev: Learn Performance](https://web.dev/learn/performance) и [Web Vitals](https://web.dev/articles/vitals): курс Google по веб-производительности и метрики LCP, INP, CLS.

### `delivery`: Docker, CI, конфиг, логи
- [Docker: Get started](https://docs.docker.com/get-started/) и [Multi-stage builds](https://docs.docker.com/build/building/multi-stage/): официальная база по образам и многоступенчатой сборке.
- [Docker Compose](https://docs.docker.com/compose/) и [Control startup order](https://docs.docker.com/compose/how-tos/startup-order/): сети, volumes, `depends_on` с `service_healthy`.
- [Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md): официальные рекомендации образа Node (non-root, сигналы, `NODE_ENV`).
- [GitHub Actions Docs](https://docs.github.com/en/actions) и [PostgreSQL service containers](https://docs.github.com/en/actions/tutorials/use-containerized-services/create-postgresql-service-containers): CI с реальной БД.
- [The Twelve-Factor App](https://12factor.net/ru/): принципы конфигурации, логов и процессов (есть русский перевод).
- [Pino](https://getpino.io/) и [NestJS: Logger](https://docs.nestjs.com/techniques/logger): структурное JSON-логирование в Nest.
- [NestJS: Health checks (Terminus)](https://docs.nestjs.com/recipes/terminus): liveness и readiness для контейнеров.

### `sysdesign`: system design уровня Middle
- [Designing Data-Intensive Applications, 2nd ed.](https://dataintensive.net/): фундамент для рассуждений о данных, репликации, согласованности и очередях. Читать выборочно.
- [Hello Interview: System Design in a Hurry](https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction): структура ответа на интервью и базовые строительные блоки. Бесплатная часть хорошо подходит для старта.
- [System Design Primer](https://github.com/donnemartin/system-design-primer): большой открытый конспект (кеши, очереди, БД, масштабирование). Использовать как справочник.
- [microservices.io: Transactional Outbox](https://microservices.io/patterns/data/transactional-outbox.html): первоисточник паттерна (Chris Richardson) для надёжной публикации событий.
- [BullMQ Docs](https://docs.bullmq.io/) и [NestJS: Queues](https://docs.nestjs.com/techniques/queues): очереди на Redis в Node и интеграция с Nest. Самый частый стек очередей в вакансиях.
- [ByteByteGo (Alex Xu)](https://bytebytego.com/): автор «System Design Interview»; наглядные разборы, частично платно.

### Ориентиры по рынку и чек-листы
- [roadmap.sh: Node.js](https://roadmap.sh/nodejs), [React](https://roadmap.sh/react), [Backend](https://roadmap.sh/backend), [Full Stack](https://roadmap.sh/full-stack): поддерживаемые сообществом карты тем. Использовать как чек-лист, а не учебник.
- [hh.ru](https://hh.ru/) и [Хабр Карьера](https://career.habr.com/): требования РФ-вакансий. Стоит раз в месяц сверять 10–15 вакансий со стеком.
- [Djinni](https://djinni.co/) и [justjoin.it](https://justjoin.it/): remote и европейские вакансии (Восточная Европа, Польша), ориентир требований EU-рынка.

## Wisdom (Communities)

### Русскоязычные
- [@nest_ru: NestJS, русскоязычное сообщество](https://t.me/nest_ru): самый активный RU-чат по Nest (~2.8k). Для новичков есть [@nest_basic](https://t.me/nest_basic).
- [@nodejs_ru: Node.js, русскоговорящее сообщество](https://t.me/nodejs_ru): ~7.7k участников, вопросы по рантайму и архитектуре бэкенда.
- [@react_js: React, русскоговорящее сообщество](https://t.me/react_js): крупнейший RU-чат по React (~13k), можно показывать код и спрашивать про архитектуру.
- [@ts_cool: TypeScript](https://t.me/ts_cool): RU-чат по TypeScript (~5.8k), подходит для вопросов по сложной типизации.
- [@pgsql: PostgreSQL](https://t.me/pgsql): RU-чат сообщества PostgreSQL (~13.7k), где отвечают опытные DBA; хорошее место, чтобы показать план EXPLAIN.
- [Хабр Q&A](https://qna.habr.com/): вопросы с тегами (NestJS, React, PostgreSQL); ответы медленнее, зато публичные и индексируемые.
- [@javascript_jobs](https://t.me/javascript_jobs) и [@nodejs_jobs](https://t.me/nodejs_jobs): вакансии и обсуждение поиска работы. Полезно для калибровки требований и вилок.

### Англоязычные
- [Reactiflux (Discord)](https://www.reactiflux.com/): крупнейшее React-сообщество, есть help-каналы и ревью кода.
- [NestJS Official Discord](https://discord.gg/nestjs): официальный сервер, где отвечают в том числе участники core-команды.
- [TanStack Discord](https://tlinz.com/discord): сервер мейнтейнеров TanStack Query и Router.
- [Prisma Discord](https://pris.ly/discord): официальный сервер Prisma, полезен в период перехода v7 → v8.
- [TypeScript Community Discord](https://discord.gg/typescript): помощь с типами, есть бот-плейграунд.
- [Code Review Stack Exchange](https://codereview.stackexchange.com/): ревью рабочего кода; подходит для портфолио-проекта.
- [Database Administrators Stack Exchange](https://dba.stackexchange.com/): вопросы по индексам, планам и блокировкам в PostgreSQL.
- [PostgreSQL Mailing Lists](https://www.postgresql.org/list/): pgsql-novice и pgsql-general, официальные рассылки, где отвечают разработчики PostgreSQL.
- Reddit: r/node, r/reactjs, r/Nestjs_framework, r/PostgreSQL, r/typescript для вопросов и обсуждений; r/cscareerquestionsEU для поиска работы в Европе.

## Gaps

- **Prisma 8 в переходном периоде.** v8 в RC (GA ожидается в октябре 2026), API транзакций и клиента меняется, часть функций (уровни изоляции, `$extends`, большинство вложенных записей) в v8 пока недоступна. Сторонние туториалы в основном про v5/v6. Рекомендация: практика на v7, понятия (N+1, миграции, транзакции) не зависят от версии. Тьютору стоит перепроверить статус v8 к середине курса.
- **Тестирование Nest + Prisma с реальной БД.** Канонического гайда нет: официальная документация Nest показывает в основном моки, а Prisma — моки клиента. Ближе всего репозиторий Goldberg (общий для Node) и Testcontainers. Связку придётся собирать самим.
- **Глубокие темы NestJS** (внутренности DI, request scope против ALS, архитектура больших модулей). Кроме официальной документации, источники разрозненные (блоги разного качества), и нет актуальной книги под Nest 11.
- **Внутренности React** (Fiber, планировщик, lanes). Официальная документация намеренно их не описывает, а статьи сообщества часто устарели относительно React 19 и Compiler. Для интервью хватает уровня react.dev и Makarevich/Comeau.
- **System design для Middle-уровня.** Почти все материалы рассчитаны на Senior и FAANG-масштаб, их придётся сознательно «уменьшать» до задачи уровня фичи. Фронтенд system design (секции Т-Банка, Авито) покрыт в основном платными или неофициальными источниками.
- **Форматы РФ-собеседований.** Надёжных первоисточников мало: компании публикуют описание этапов редко, а банки вопросов (enigmai и т.п.) неофициальны и разного качества. Калибровать лучше по вакансиям и через чаты.
- **Миграции без даунтайма в Prisma/Postgres.** Паттерн expand/contract описан в Prisma Docs кратко. Подробные практические разборы (блокировки при `ALTER TABLE`, `CREATE INDEX CONCURRENTLY` в Prisma-миграциях) разбросаны по блогам.
- **Кеширование в Node-стеке.** Документация Redis частично маркетинговая. Лучший нейтральный источник — AWS Builders' Library, но он не про Node, так что применять придётся самостоятельно.
