# Watchlist

* [Motivasjon](#motivasjon)
* [Screenshots](#screenshots)
* [Brukt tech/framework](#brukt-techframework)
* [Installasjon og kjøring lokalt](#installasjon-og-kjøring-lokalt)
  - [Frontend](#frontend)
  - [Backend](#backend)
* [Deployment](#deployment)
  - [Deploye til Frontend](#deploye-til-frontend)
  - [Deploye til Backend](#deploye-til-backend)
* [API referanse](#api-reference)
* [Lisens](#lisens)


## Motivasjon
Motivasjonen bak produktet kommer som følge av WatchList AS og deres ønske om en nettapplikasjon for deres tjenester.
Produktet kombinerer film og serier med et sosialt nettverk, og skaper en møteplass for mennesker med en lidenskap for film og tv.

## Screenshots

![image](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/wikis/uploads/9cd615e86f533740afe7f20adce9bbdf/image.png)

*Watchlist Logo*

![image](/uploads/352796ed6826b03edcda4141ea2abbda/Skjermbilde_2020-03-31_kl._13.34.25.png)
*Forside når en ikke er logget inn*

![image](/uploads/67bcb29d9566169292f64a0e48b7518c/Skjermbilde_2020-04-01_kl._13.28.25.png)
*Søkeside etter bruker har brukt søkebaren*

![image](/uploads/e1f775b968b35788c0ce646198befd88/Skjermbilde_2020-04-01_kl._20.16.30.png)
*Profilside*

## Brukt tech/framework
| Frontend (JavaScript)        | Backend  (Python)             | Database | Eksternt API       | Servere                               |
|-----------------|-----------------------|----------|--------------------|---------------------------------------|
| [ReactJS](https://reactjs.org/)         | [Django 3](https://docs.djangoproject.com/en/3.0/)       | SQLite3  | [The Movie Database](https://developers.themoviedb.org/3/) | [Digital Ocean Virtual Private Servers](https://www.digitalocean.com/products/droplets/) |
| [React Redux](https://react-redux.js.org/)           | [Django Rest Framework](https://www.django-rest-framework.org/) |          |                    | Nginx                                 |
| [Bootstrap-React](https://react-bootstrap.github.io/) |                       |          |                    | Let's Encrypt og Certbot (SSL)                       |
| [React-Router](https://reacttraining.com/react-router/web)    |                       |          |                    |                                       |

Alle pakker og avhengighter for koden:

__Backend__ - *[requirements.txt](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/blob/master/watchlist_backend/requirements.txt)*

__Frontend__ - *[package.json](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/blob/master/watchlist-frontend/package.json)*

## Installasjon og kjøring lokalt
Denne seksjonen beskriver hvordan man setter opp produktet lokalt på
egen datamaskin. Produktet er delt opp i to hovedmoduler: én for frontend og én for backend.

Clone Gitlabs repository til egen PC og naviger inn i mappen 45.

### __Frontend__

#### *Forutsetninger*
For å kjøre frontenden trenger man: [Node.js og NPM](https://nodejs.org/en/download/).

#### *Installasjon*
Naviger til mappen *45/watchlist-frontend*
```bash
cd watchlist-frontend
```
Installer pakker
```bash
npm install
```
#### *Kjøring*
Naviger til mappen `45/watchlist-frontend`.

Man kan da kjøre frontenden med kommandoen
```bash
npm start
```

*For å kjøre frontenden lokalt med remote backend kan man endre på backendBaseURL i `45/watchlist-frontend/src/actions/constants.js` til `https://admin.watchlist.social`.
Her kan man også endre API-key.*


### __Backend__

#### *Forutsetninger*
For å kjøre backenden lokalt trenger man: [Python 3 og pip](https://www.python.org/downloads/).

#### *Installasjon*
Naviger til mappen *45/watchlist_backend*
```bash
cd watchlist_backend
```
Installer virtualenv med pip

```bash
pip3 install virtualenv
```

Aktiver virtual environment (gjøres ulikt på windows og Mac/linux)
```bash
#For Windows

virtualenv venv                      #Lager en mappe som inneholder virtualenvironment. Trengs bare å gjøres første gang.
venv\Scripts\activate                #Starter virtualenvironment. Må gjøres hver gang man skal bruke backend.
```
```bash
#For Mac/Linux

virtualenv -p python3 venv           #Lager en mappe som inneholder virtualenvironment. Trengs bare å gjøres første gang.
. venv/bin/activate                  #Starter virtualenvironment. Må gjøres hver gang man skal bruke backend.
```
Installer pip-pakker i virtualenv
```bash
pip install -r requirements.txt
```
Sett opp databasemodeller
```bash
python manage.py migrate
```
Lag superuser/admin-bruker
```bash
python manage.py createsuperuser
```

#### *Kjøring*
Om virtualenvironment er aktivert og man er i mappen *45/watchlist_backend*

    python manage.py runserver
    
Serveren vil da starte på port 8000.
Man kan da teste nettsiden ved å gå til `localhost:8000` eller `127.0.0.1:8000` i nettleseren.


## Deployment
Vi har manuell deployment, med bygging og pulling fra server. Oppsett av servere er beskrevet på [wikien](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/wikis/Server/Oppsett-av-server).

### Deploye til Frontend
Koble til serveren
```bash
ssh root@watchlist.social
```
Oppgi passord.

Naviger til watchlist-frontend 
```bash
cd ~/45/watchlist-frontend
```

Pull fra Gitlab
```bash
git pull origin master
```

Oppdater eventuelle linker og API-nøkler.

Bygg prosjektet på nytt
```bash
npm run-script build
```

Vi må så skru av den kjørende prosessen.
Finner den kjørende prosessen og den tilhørende PID
```bash
lsof -i :3000
```

Avslutt den kjørende prosessen med
```bash
kill <PID>
```

Starter så serveren på nytt med
```bash
serve -s -l 3000 build &
```

Disconnect fra server med `ctrl + d`.

### Deploye til Backend
Koble til serveren
```bash
ssh root@admin.watchlist.social
```
Oppgi passord.

Naviger til watchlist-backend 
```bash
cd ~/45/watchlist_backend
```
Pull fra Gitlab
```bash
git pull origin master
```

Og kjør virtual environment
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

Disconnect fra server med `ctrl + d`.

## API Reference
*Ekstern API:* 
Prosjektet bruker et API fra The Movie Database for å hente informasjon om
filmer og serier. En innføring til dette finnes på [nettsiden deres](https://developers.themoviedb.org/3/).
Vi bruker en utviklings API-key som er åpen for bruk i utvikling. Denne ligger i [Constants.js](watchlist-frontend/src/actions/constants.js).

*Intern API:* 
Frontend kommuniserer med Backend ved hjelp av en REST-arkitektur. Dokumentasjon
til det interne API finnes på [wikien](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/45/-/wikis/API).

## Lisens

Vi bruker MITs Open Source lisens

[MIT Lisens](LICENSE)
