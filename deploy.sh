#!/bin/bash

# Actions de déploiement Plesk pour Next.js
# Ces commandes seront exécutées après chaque pull Git

# Installation des dépendances
npm install

# Build du projet
npm run build

# Redémarrage de l'application Node.js (si configurée)
# pm2 restart portfolio || pm2 start npm --name "portfolio" -- start

echo "Déploiement terminé !"