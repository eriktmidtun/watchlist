# Watchlist
Watchlist.social er et produkt for alle som elsker filmer/serier, og som ønsker
å formidle/dele sitt engasjement. En bruker oppretter en profil og kan danne et
sosialt nettverk med andre brukere i form av deling og anmelding av filmer.


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

Prosjektet bruker et API fra The Movie Database for å hente informasjon om filmer og serier. En innføring til dette finnes <link>


Intern API:
Frontend kommuniserer med Backend ved hjelp av en REST arkitektur. Dokumentasjon til API finnes <link>. 

## License
Kan generere dette på GitLab