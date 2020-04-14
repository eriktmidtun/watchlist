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

### __Frontend__

#### *Forutsetninger*
For å kjøre frontend trenger man: [Node.js og NPM](https://nodejs.org/en/download/).


#### *Installasjon*
Naviger til mappen *watchlist-frontend*
```bash
cd watchlist-frontend
```
#### *Kjøring*
Man kan kjøre frontend med kommandoen
```bash
npm start
```
### __Backend__

#### *Forutsetninger*
For å kjøre backend trenger man: [Python 3 og pip](https://www.python.org/downloads/).

#### *Installasjon*
Naviger til mappen *watchlist_backend*
```bash
cd watchlist_backend
```
Installer virtualenv med pip

```bash
pip3 install virtualenv
```

Aktiver virtualenvironment

```shell
#For Windows

    virtualenv venv                      #Lager en mappe som inneholder virtualenvironment. Trengs bare å gjøre første gang.
    venv\Scripts\activate                #Starter virtualenvironment. Må gjøres hver gang man skal bruke backend.
```
```bash
#For Mac/Linux

    virtualenv -p python3 venv           #Lager en mappe som inneholder virtualenvironment. Trengs bare å gjøre første gang.
    . venv/bin/activate                  #Starter virtualenvironment. Må gjøres hver gang man skal bruke backend.
```
Installer pip pakker i virtualenv
```bash
pip install -r requirements.txt
```
Sett opp databasemodeller
```bash
python manage.py migrate
```
Lag superuser/admin bruker
```zsh
python manage.py createsuperuser
```

#### *Kjøring*
Om virtualenvironment er aktivert

    python manage.py runserver
    
serveren vil da starte på port 8000.
Man kan da teste nettsiden ved å gå til `localhost:8000` eller `127.0.0.1:8000` i nettleseren.


## Deployment
Vi har manuell deployment, med bygging og pulling fra server.

### Deploye til Frontend
Koble til serveren
```bash
ssh root@watchlist.social
```
Oppgi passord

Naviger til watchlist-frontend 
```bash
cd ~/45/watchlist-frontend
```

Pull fra Gitlab
```bash
git pull origin master
```

Oppdatere eventuelle linker og API-nøkler
```bash
npm run-script build
```

Vi må så skru av den kjørende prosessen.
Finner den kjørende prosessen og den tilhørende PID
```bash
lsof -i :3000
```

Avslutter prosessen med
```bash
kill <PID>
```

Starter så serveren på nytt med
```bash
serve -s -l 3000 build &
```

Disconnect fra server med `ctrl + d`

### Deploye til Backend
Koble til serveren
```bash
ssh root@admin.watchlist.social
```
Oppgi passord

Naviger til watchlist-backend 
```bash
cd ~/45/watchlist_backend
```
Pull fra Gitlab
```bash
git pull origin master
```

og kjør virtualenvironment
```bash
. venv/bin/activate
```
Vi må så skru av den kjørende prosessen.
Finner den kjørende prosessen og den tilhørende PID
```bash
lsof -i :8000
```

Avslutt prosessen med
```bash
kill <PID>
```
Oppdater databasemodellene
```bash
python manage.py migrate
```

Kjør server
```bash
python manage.py runserver 8000 &
```

Disconnect fra server med `ctrl + d`

## API Reference
Ekstern API:

Prosjektet bruker et API fra The Movie Database for å hente informasjon om
filmer og serier. En innføring til dette finnes [link]()


Intern API:
Frontend kommuniserer med Backend ved hjelp av en REST arkitektur. Dokumentasjon
til API finnes [link](). 

## License
Kan generere dette på GitLab