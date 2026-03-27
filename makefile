.PHONY: run install shell clean lock build

# Nome do executável principal
APP = src/main.py

# Roda a TUI
run:
	@poetry run python $(APP)

# Instala as dependências
install:
	@poetry install

# Entra no shell do ambiente virtual
shell:
	@poetry shell

# Atualiza o lock file e instala
lock:
	@poetry lock
	@poetry install

# Limpa lixos do Python e cache
clean:
	@find . -type d -name "__pycache__" -exec rm -rf {} +
	@find . -type d -name ".pytest_cache" -exec rm -rf {} +
	@find . -type d -name ".mypy_cache" -exec rm -rf {} +

# Build do pacote (se for distribuir no PyPI ou local)
build:
	@poetry build

# Ajuda
help:
	@echo "Scriptory - Local Gist Manager"
	@echo ""
	@echo "Comandos disponíveis:"
	@echo "  make run      - Inicia a interface Textual"
	@echo "  make install  - Instala dependências via Poetry"
	@echo "  make shell    - Abre o shell do venv"
	@echo "  make clean    - Remove arquivos temporários"
