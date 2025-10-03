#!/bin/bash

echo "🔄 Restarting Docker containers for development..."

# Arrêter les conteneurs
echo "⏹️  Stopping containers..."
docker compose down

# Reconstruire et redémarrer
echo "🔨 Building and starting containers..."
docker compose up --build -d

echo "✅ Development environment is ready!"
echo "🌐 App running at: http://localhost:3000"
echo ""
echo "To view logs: docker compose logs -f web"
echo "To stop: docker compose down"