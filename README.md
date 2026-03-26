# 🔧 Exercice — Service Worker & Mode Hors Ligne

Un exercice pratique pour comprendre les **Service Workers** en créant une page web qui fonctionne même sans connexion internet.

## 📚 Contexte

Les Service Workers agissent comme un proxy entre le navigateur et le réseau. Ils permettent de mettre des ressources en cache et de les servir hors ligne — c'est la technologie derrière les **Progressive Web Apps (PWA)**.

Cet exercice illustre :
- L'enregistrement d'un Service Worker
- La mise en cache de ressources lors de l'installation
- L'interception des requêtes réseau (stratégie *cache-first*)

## 📁 Structure du projet

```
mon-service-worker/
├── index.html   # La page principale
├── style.css    # Les styles
└── sw.js        # Le Service Worker
```

## 🚀 Lancer le projet

Les Service Workers nécessitent HTTPS (ou `localhost`). Lance un serveur local avec l'une des méthodes suivantes :

```bash
# Avec Node.js
npx serve .

# Avec Python
python -m http.server 8000
```

Puis ouvre [http://localhost:8000](http://localhost:8000) dans ton navigateur.

## 🧪 Tester le mode hors ligne

1. Ouvre les **DevTools** (`F12`)
2. Va dans l'onglet **Application → Service Workers** et vérifie qu'il est actif
3. Dans l'onglet **Network**, coche **Offline**
4. Recharge la page → elle s'affiche toujours ✅

## ⚙️ Comment ça fonctionne

```
Navigateur  →  Service Worker  →  Cache  →  Réseau
                     ↓
           (intercepte les requêtes)
                     ↓
          Cache disponible ? → Oui → Retourne la ressource
                              → Non → Fait la requête réseau
```

### Cycle de vie du Service Worker

| Étape        | Description                                          |
|--------------|------------------------------------------------------|
| `install`    | Met les fichiers en cache                            |
| `activate`   | Nettoie les anciens caches                           |
| `fetch`      | Intercepte les requêtes et sert le cache si possible |

## 🧩 Aller plus loin

Idées pour enrichir l'exercice :

- [ ] Ajouter une image et la mettre en cache
- [ ] Passer le cache en `v2` et observer la mise à jour dans DevTools
- [ ] Afficher un message selon `navigator.onLine`
- [ ] Ajouter une page de fallback personnalisée en cas d'erreur réseau

## 📖 Ressources

- [MDN — Utiliser les Service Workers](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [MDN — Service Worker API](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API)
- [What is a PWA?](https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps)
