# Watchlist

## Motivasjon
Motivasjonen bak produktet kommer som følge av WatchList AS og deres ønske om en nettapplikasjon for deres tjenester.
Produktet kombinerer film og serier med et sosialt nettverk, og skaper en møteplass for mennesker med en lidenskap for film og tv.

## Screenshots
*bilder*

## Brukt tech/framework
| Frontend        | Backend               | Database | Eksternt API       | Servere                               |
|-----------------|-----------------------|----------|--------------------|---------------------------------------|
| [ReactJS](https://reactjs.org/)         | [Django 3](https://docs.djangoproject.com/en/3.0/)       | SQLite3  | [The Movie Database](https://developers.themoviedb.org/3/) | [Digital Ocean Virtual Private Servers](https://www.digitalocean.com/products/droplets/) |
| [React Redux](https://react-redux.js.org/)           | [Django Rest Framework](https://www.django-rest-framework.org/) |          |                    | Nginx                                 |
| [Bootstrap-React](https://react-bootstrap.github.io/) |                       |          |                    |                                       |
| [React-Router](https://reacttraining.com/react-router/web)    |                       |          |                    |                                       |

Alle pakker og avhengighter for koden:

__Backend__ *[requirements.txt](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/blob/master/watchlist_backend/requirements.txt)*

__Frontend__ *[package.json](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/blob/master/watchlist-frontend/package.json)*

## Installasjon og kjøring lokalt
Denne seksjonen beskriver hvordan man kloner og setter opp produktet lokalt på
egen datamaskin.

**Cloning av GitLab repository**
1. Gå til produktets repository:
   https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/tree/master
2. Clone alle filer og mappestrukturer, forså å sette opp lokal versjon.
   (https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

Produktet er delt opp i to hovedmoduler: en for frontend og en for backend.

**Frontend**
1. Frontend bruker JavaScript biblioteket React, hvilket krever installasjon
   av  node.js. Se denne lenken for installasjon:
   https://nodejs.org/en/download/
2. Medfølgende installasjonen av node er Node Package Manager (NPM). Dette er
   et verktøy som gjør det mulig å laste ned ulike moduler for JavaScript.
3. I terminal: naviger til “watchlist_frontend” og kjør kommandoen: npm
   install, da vil alle pakkene som står spesifisert i “package.json” bli
   installert i mappen “node_modules”.
4. For å kjøre React-appen skriv kommandoen npm start i terminalen. Det vil da
   være mulig å teste nettsiden ved å skrive localhost:3000 i URL-feltet på
   nettleseren.

**Backend**
1. Backend modulen benytter funksjonaliteter fra Python’s web-rammeverk,
   Django. Python v.3.6, eller høyere versjon kreves for å få programmet til å
   kjøre. I tillegg må virtual environment også brukes slik at kun riktig
   versjon av pip pakkene som brukes kommer med.
2. *kommandoboks*
3. I terminalen kjør så kommandoen: pip install -r requirements.txt. Riktig
   versjon av Django og andre pakker blir da lastet ned.
4. For første gang
    * Kjør kommando: python manage.py migrate  i terminal. Databasemodeller for
      applikasjonen settes så opp.
    * Kjør kommando: python manage.py createsuperuser . Dette lager en
      adminbruker.
5. Deretter kjør: python manage.py runserver. Django starter dermed opp, og
   man kan teste i localhost:8000 eller i 127.0.0.1:8000 i nettleseren.
6. Deaktivering av virtual environment gjøres ved kommando: deactivate i
   terminalen/cmd

## Deployment
Vi har manuell deployment, med bygging og pulling fra server.

### Deploye til Frontend
ssh root@watchlist.social

Oppgi passord

Naviger til watchlist_frontend og kjør følgende kommandoer:

git pull origin master

Oppdatere eventuelle linker og API-nøkler

`npm run-script build`

Vi må så skru av den kjørende prosessen.

Finner den kjørende prosessen og den tilhørende PID

lsof -i :3000

avslutter prosessen med `kill <PID>`

serve -s -l 3000 build &

disconnect fra server med ctrl + d

### Deploye til Backend
ssh root@admin.watchlist.social

Oppgi passord

Naviger til watchlist-backend 

cd 45/watchlist_backend

og kjør virtualenvironment

. venv/bin/activate

Vi må så skru av den kjørende prosessen.

Finner den kjørende prosessen og den tilhørende PID

lsof -i :8000

avslutt prosessen med

kill <PID>

Oppdater databasemodellene

python manage.py migrate

kjør server

python manage.py runserver 8000 &

disconnect fra server med ctrl + d

## API Reference
Ekstern API:

Prosjektet bruker et API fra The Movie Database for å hente informasjon om
filmer og serier. En innføring til dette finnes *link*


Intern API:
Frontend kommuniserer med Backend ved hjelp av en REST arkitektur. Dokumentasjon
til API finnes *link*. 

## License
Kan generere dette på GitLab