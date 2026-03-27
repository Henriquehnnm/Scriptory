from os import path, makedirs
import sqlite3
from rich.traceback import install
from contextlib import contextmanager

install(show_locals=True)

DB_PATH = path.join("~", ".local", "share", "scriptory", "db", "snippets.sqlite")
BASE_DIR = path.dirname(path.abspath(__file__))
SQL_FILE = path.join(BASE_DIR, "snippets.sql")


@contextmanager
def get_connection():
    makedirs(path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()


def init_db():
    if not path.exists(SQL_FILE):
        print("ERROR: SQL file not found.")
        return

    with open(SQL_FILE, "r") as f:
        sql_script = f.read()

    with get_connection() as conn:
        conn.executescript(sql_script)
        conn.commit()


if __name__ == "__main__":
    init_db()
