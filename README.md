# Watchlist

## Motivasjon
Motivasjonen bak produktet kommer som følge av WatchList AS og deres ønske om en nettapplikasjon for deres tjenester.
Produktet kombinerer film og serier med et sosialt nettverk, og skaper en møteplass for mennesker med en lidenskap for film og tv.

## Screenshots
*bilder*

## Brukt tech/framework
| Frontend (Javascript)        | Backend  (Python)             | Database | Eksternt API       | Servere                               |
|-----------------|-----------------------|----------|--------------------|---------------------------------------|
| [ReactJS](https://reactjs.org/)         | [Django 3](https://docs.djangoproject.com/en/3.0/)       | SQLite3  | [The Movie Database](https://developers.themoviedb.org/3/) | [Digital Ocean Virtual Private Servers](https://www.digitalocean.com/products/droplets/) |
| [React Redux](https://react-redux.js.org/)           | [Django Rest Framework](https://www.django-rest-framework.org/) |          |                    | Nginx                                 |
| [Bootstrap-React](https://react-bootstrap.github.io/) |                       |          |                    |                                       |
| [React-Router](https://reacttraining.com/react-router/web)    |                       |          |                    |                                       |

Alle pakker og avhengighter for koden:

__Backend__ *[requirements.txt](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/blob/master/watchlist_backend/requirements.txt)*

__Frontend__ *[package.json](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/blob/master/watchlist-frontend/package.json)*

## Installasjon og kjøring lokalt
Denne seksjonen beskriver hvordan man setter opp produktet lokalt på
egen datamaskin. Produktet er delt opp i to hovedmoduler: en for frontend og en for backend.

Clone Gitlabs repository til egen PC og naviger inn i mappen 45.

### Frontend

#### *Forutsetninger*
For å kjøre frontend trenger man: [Node.js og NPM](https://nodejs.org/en/download/).


#### *Installasjon*
Naviger til mappen *watchlist-frontend*

    cd watchlist-frontend

#### *Kjøring*
Man kan kjøre frontend med kommandoen

    npm start

### Backend

#### *Forutsetninger*
For å kjøre backend trenger man: [Python 3 og pip](https://www.python.org/downloads/).

#### *Installasjon*
Naviger til mappen *watchlist_backend*

    cd watchlist_backend
    
Installer virtualenv med pip

    pip3 install virtualenv

Aktiver virtualenvironment

```
#For Windows

    virtualenv venv                      #Lager en mappe som inneholder virtualenvironment. Trengs bare å gjøre første gang.
    venv\Scripts\activate                #Starter virtualenvironment. Må gjøres hver gang man skal bruke backend.
```
```
#For Mac/Linux

    virtualenv -p python3 venv           #Lager en mappe som inneholder virtualenvironment. Trengs bare å gjøre første gang.
    . venv/bin/activate                  #Starter virtualenvironment. Må gjøres hver gang man skal bruke backend.
```
Installer pip pakker i virtualenv

    pip install -r requirements.txt

Sett opp databasemodeller

    python manage.py migrate

Lag superuser/admin bruker

    python manage.py createsuperuser


#### *Kjøring*
Om virtualenvironment er aktivert

    python manage.py runserver
    
serveren vil da starte på port 8000.
Man kan da teste nettsiden ved å gå til `localhost:8000` eller `127.0.0.1:8000` i nettleseren.


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

avslutter prosessen med 
    `kill <PID>`

    serve -s -l 3000 build &

disconnect fra server med ctrl + d

### Deploye til Backend

    ssh root@admin.watchlist.social

Oppgi passord

Pull fra Gitlab

    git pull origin master

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