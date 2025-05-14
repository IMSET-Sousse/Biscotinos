Spécifications Générales
🎯 Objectif :
Créer un site vitrine et catalogue de produits pour une marque de biscuits tunisienne avec une interface d’administration, une API sécurisée et un frontend moderne et responsive.

⚙️ Spécifications Fonctionnelles
🔐 Utilisateurs
Administrateur (via Django admin) :

Gestion des catégories

Gestion des produits

Gestion des images

Accès aux statistiques (via admin ou dashboard personnalisé si souhaité)

Visiteur (frontend Next.js) :

Accès à la liste des produits

Visualisation des détails d’un produit

Recherche ou filtrage par catégorie

Accès aux pages statiques : Accueil, À propos, Contact

Envoi d’un formulaire de contact

🧾 Pages / Interfaces (Frontend)
Page	Description
Accueil	Présentation de la marque, mise en avant de produits populaires
Produits	Liste de tous les biscuits avec pagination
Détail produit	Image, description, prix, catégorie
Catégories (option)	Filtres ou pages par catégorie
À propos	Histoire, valeurs de la marque
Contact	Formulaire avec nom, email, message
Erreur 404 / 500	Pages d’erreur personnalisées

📦 Produits (Features)
Chaque produit biscuit contient :

Nom

Description

Prix

Image

Catégorie

Date de création (automatique)

🧰 Spécifications Techniques
Backend – Django + Django REST Framework
API REST sécurisée avec JWT (JSON Web Token)

Utilisation de ViewSets et Routers DRF

Authentification : SimpleJWT

CORS : Limité au domaine du frontend

Django Admin pour la gestion des données

Gestion d’images avec ImageField + Pillow

Endpoints principaux :
Méthode	URL	Description
GET	/api/products/	Liste des produits
GET	/api/products/:id/	Détail d’un produit
POST	/api/products/	Ajouter (admin)
PUT/PATCH	/api/products/:id/	Modifier
DELETE	/api/products/:id/	Supprimer
POST	/api/token/	Connexion utilisateur
POST	/api/token/refresh/	Refresh du token

Frontend – Next.js
Framework React côté client + serveur (SSR/SSG)

Chargement des produits depuis l’API avec axios ou fetch

Pages statiques (getStaticProps) pour SEO

Intégration image avec Next.js Image optimization

Formulaire de contact avec fetch vers API

🔐 Sécurité
Accès API restreint pour les opérations POST/PUT/DELETE avec JWT

Accès admin Django protégé par mot de passe fort

CORS restreint aux domaines autorisés

Validation des champs côté frontend + backend

🖥️ Déploiement (suggestions)
Backend Django :

Gunicorn + Nginx

PostgreSQL ou SQLite pour base de données

Stockage média : local ou S3-compatible

Frontend Next.js :

Déployé sur Vercel, Netlify ou sur un VPS (avec Node.js)

