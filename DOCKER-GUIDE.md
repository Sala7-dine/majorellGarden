# 🚀 Guide de Développement Docker

## Configuration Optimisée

Votre environnement Docker a été optimisé pour le développement avec **hot-reload automatique** !

## 📋 Commandes Disponibles

### Démarrage rapide
```bash
# Démarrer l'environnement (première fois ou après arrêt)
docker compose up -d

# Voir les logs en temps réel
docker compose logs -f web

# Arrêter l'environnement
docker compose down
```

### Reconstruction (seulement si nécessaire)
```bash
# Reconstruction complète (changements package.json, etc.)
docker compose down && docker compose up --build -d
```

### Scripts utilitaires
```bash
# Redémarrage rapide avec reconstruction
./dev-restart.sh

# Démarrage simple
./dev-start.sh
```

## ✨ Fonctionnalités

### Hot Reload Automatique ⚡
- **Fichiers src/** : Rechargement instantané
- **Fichiers public/** : Rechargement instantané  
- **CSS/JS** : Mise à jour en temps réel
- **Pas besoin de rebuild** pour les changements de code

### Quand reconstruire ? 🔨
Reconstruction nécessaire uniquement pour :
- Modifications du `package.json`
- Modifications du `Dockerfile`
- Modifications de `docker-compose.yml`
- Ajout de nouvelles dépendances npm

## 🐛 Debugging

### Voir les logs
```bash
docker compose logs -f web
```

### Accéder au conteneur
```bash
docker compose exec web bash
```

### Vérifier l'état des conteneurs
```bash
docker compose ps
```

## 🎯 URL de l'Application
- **Développement** : http://localhost:3000
- **Auto-refresh** : Activé
- **Hot-reload** : ✅ Fonctionnel

## 📁 Structure Optimisée

```
majorillegarden/
├── src/                    # Code source (hot-reload)
├── public/                 # Assets statiques (hot-reload)
├── docker-compose.yml      # Configuration optimisée
├── Dockerfile             # Multi-stage optimisé
├── .dockerignore          # Exclusions optimisées
├── dev-restart.sh         # Script de redémarrage
└── dev-start.sh           # Script de démarrage
```

## 🔧 Optimisations Appliquées

1. **Volume Mapping** : Code source mappé pour hot-reload
2. **Polling activé** : Compatible avec tous les systèmes
3. **Cache node_modules** : Optimisation des performances
4. **Variables d'environnement** : Configuration parfaite pour React
5. **Exclusions Docker** : Build plus rapide avec .dockerignore

---

**🎉 Vous pouvez maintenant développer avec hot-reload automatique sans rebuild !**