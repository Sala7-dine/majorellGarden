#!/bin/bash

echo "🚀 Starting development environment..."

# Démarrer les conteneurs en mode détaché
docker compose up -d

echo "✅ Development containers started!"
echo "🌐 App running at: http://localhost:3000"
echo ""
echo "📝 Available commands:"
echo "  - View logs: docker compose logs -f web"
echo "  - Stop: docker compose down"
echo "  - Restart: ./dev-restart.sh"