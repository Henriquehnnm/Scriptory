from textual.app import App, ComposeResult
from textual.widgets import Footer, Header, Static, ListView, ListItem, Label
from textual.containers import Horizontal, Vertical


class Scriptory(App):
    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        with Horizontal():
            with Vertical(id="sidebar"):
                yield Static("SNIPPETS", classes="section-title")
                yield ListView(
                    ListItem(Label("FastAPI Auth")),
                    ListItem(Label("React Hook Form")),
                    ListItem(Label("Docker Compose PG")),
                    id="snippet-list",
                )

            with Vertical(id="code-view"):
                yield Static("Code area", id="display")

        yield Footer()
