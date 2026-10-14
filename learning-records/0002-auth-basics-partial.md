# LR-0002: базовая модель аутентификации есть (partial apply)

Знает: пароли — медленным хешем (argon2) со сравнением хешей на сервере; access JWT короткий (10–15 мин) в заголовке, refresh долгий (~7 дней), при refresh выдаётся новая пара. Не знает: где хранить токены на клиенте (спутал localStorage и HttpOnly cookie), серверный отзыв refresh, reuse detection, logout.

Evidence: diagnostic auth.2 = 1.
Implications: урок по auth можно сжать на «зачем короткий access и хеширование» и потратить время на хранение, отзыв/ротацию, IDOR и CORS.
