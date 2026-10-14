# Errors — журнал заблуждений

Формат: `- {date} · {lesson} · {wrong belief} → {correct idea} · caught by: {quiz|bughunt|teach-back|task|diagnostic}`

- 2026-10-14 · diagnostic · «I в ACID = идемпотентность» → I = Isolation (изоляция параллельных транзакций); идемпотентность — свойство HTTP-методов/операций · caught by: diagnostic (pg.1)
- 2026-10-14 · diagnostic · «индекс не помогает запросу B, потому что now() пересчитывается» → now() стабильна в рамках запроса и индексу не мешает; B не использует (user_id, created_at), потому что условие только на вторую колонку (правило левого префикса) · caught by: diagnostic (pg.2)
- 2026-10-14 · diagnostic · «токен хранится в localStorage с пометкой HttpOnly cookie» → localStorage и cookie — разные хранилища; HttpOnly бывает только у cookie (JS его не читает); access — в памяти, refresh — в HttpOnly cookie · caught by: diagnostic (auth.2)
- 2026-10-14 · diagnostic · «колбэки попадают в очереди из call stack» → колбэки ставят в очереди API (таймеры, промисы, I/O); event loop переносит их в пустой call stack · caught by: diagnostic (runtime.2)
