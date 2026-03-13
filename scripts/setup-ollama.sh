#!/usr/bin/env bash
set -euo pipefail

echo "=== assist.ai — Ollama Model Setup ==="
echo ""

# Check Ollama is installed
if ! command -v ollama &> /dev/null; then
  echo "ERROR: Ollama is not installed."
  echo "Install it from: https://ollama.com/download"
  exit 1
fi

echo "Pulling models..."
echo ""

echo "[1/3] phi3:mini (reasoning model)"
ollama pull phi3:mini

echo ""
echo "[2/3] qwen2:1.5b (conversation model)"
ollama pull qwen2:1.5b

echo ""
echo "[3/3] nomic-embed-text (embedding model)"
ollama pull nomic-embed-text

echo ""
echo "=== All models pulled successfully ==="
echo ""
echo "Available models:"
ollama list
