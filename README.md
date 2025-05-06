# Universal Tune Assistant (UTA)

<div align="center">
  <img src="src/assets/uta.png" alt="UTA Logo" width="150" />
  <h3>Intelligence artificielle au service de la recommandation musicale</h3>
</div>

## 🎵 À propos du projet

UTA est une plateforme innovante de recommandation musicale qui utilise l'intelligence artificielle pour créer des expériences musicales personnalisées. Contrairement aux plateformes traditionnelles qui reposent sur une simple correspondance de genres, UTA analyse des modèles complexes dans les comportements d'écoute, les réponses émotionnelles et les facteurs contextuels pour fournir des recommandations véritablement personnalisées.

## ✨ Fonctionnalités

- **Recommandations personnalisées** : Algorithmes d'IA avancés adaptés à vos goûts spécifiques
- **Intégration Spotify** : Connexion fluide avec votre compte Spotify
- **Interface intuitive** : Expérience utilisateur moderne et réactive
- **Visualisation des données** : Exploration graphique des caractéristiques musicales
- **Contrôle granulaire** : Ajustement des paramètres de recommandation

## 🚀 Installation

### Prérequis

- Node.js (v14+)
- npm ou yarn
- Compte développeur Spotify

### Configuration

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Mkheir13/uta-pilotage.git
   cd uta-pilotage
   ```

2. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn
   ```

3. Créez un fichier `.env` à la racine du projet avec les variables suivantes :
   ```
   VITE_SPOTIFY_CLIENT_ID=votre_client_id_spotify
   VITE_SPOTIFY_REDIRECT_URI=http://localhost:5173/callback
   ```

4. Démarrez le serveur de développement :
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 🔧 Architecture

Le projet UTA est construit sur une architecture moderne utilisant :

- **Frontend** : React & TypeScript avec Vite
- **Styles** : Tailwind CSS pour un design responsive
- **Backend** : API Flask avec Python
- **Algorithmes** : Modèles ML pour l'analyse et les recommandations
- **Base de données** : Dataset de caractéristiques audio Spotify

## 📊 Caractéristiques techniques

- Interface utilisateur esthétique avec dégradés et animations
- Visualisations de données avec Chart.js
- Authentification OAuth 2.0 avec Spotify
- Algorithmes de recommandation basés sur la similarité cosinus
- Gestion des sessions sécurisées

## 👥 Équipe

- Pizzetta Antoine - Data Scientist, spécialiste en algorithmes de recommandation
- Mederreg Kheir-eddine - Data Scientist, expert en modélisation ML
- Tomatis Margot - Data Scientist, responsable visualisation des données

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

---

<div align="center">
  <p>Fait avec ❤️ par l'équipe UTA</p>
</div> 