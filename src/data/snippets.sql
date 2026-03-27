CREATE TABLE IF NOT EXISTS snippets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    language TEXT,
    content TEXT,
    description TEXT,
    created_at DATETIME,
    tags TEXT
)
