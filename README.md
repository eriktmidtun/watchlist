# 45

Vi har delt inn strukturen på git i Frontend og Backend:

## Frontend 
For å kjøre frontenden med React må du ha Node.js installert.
Det kan du få tak i her: https://nodejs.org/en/download/
En kan også bruke Node Version Manager(NVM) for å velge hvilken versjon av node en bruker til en hver tid. Det kan finnes her: https://github.com/nvm-sh/nvm

Når node er installert får man med Node Package Manager(NPM) som brukes til å laste ned ulike moduler for javascript. Det er slik vi blant annet laster ned React.

Naviger til watchlist_frontend og kjør kommandoen `npm install`, da vil alle pakkene som står spesifisert i package.json bli installert i mappen node_modules. For å kjøre React appen kan man skrive `npm start` og man kan teste nettsiden på localhost:3000 i nettleseren.


## Backend
For å kjøre backend med Django må vi først sette opp en virtual environment, slik at vi bare får med de riktige versjonene av pip pakkene vi vil bruke. Her må vi ha Python v.3.6 eller høyere.

Vi kan laste ned Virtual envirnoment med pip. Naviger inn i mappen watchlist_backend
        `pip install virtualenv`
        `virtualenv -p python3 venv`
        `. venv/bin/activate`   # på windows: `venv\Scripts\activate`

Vi kan så installere riktig versjon av django med: `pip install -r requirements.txt`

Kjør `python manage.py migrate` for å legge inn databasemodeller for adminpanel.

For å kjøre Django kan du skrive `python manage.py runserver`og man kan teste den i localhost:8000 i nettleseren.

for å gå ut av virtual envirnomentkan man skrive `deactivate`i terminalen
## Deployment
For å deploye til vår server må man ha SSH. på windows kan man bruke Putty, og på linux/Mac kan man bruke terminalen.

Kommer mer senere...
