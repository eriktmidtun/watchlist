# 45

Vi har delt inn strukturen på prosjektet i Frontend og Backend:

## Frontend 
For å kjøre frontenden med React må du ha __node.js__ installert, 
det kan du få tak i her: https://nodejs.org/en/download/


*Ikke nødvendig:(En kan også bruke Node Version Manager(NVM) for å velge hvilken versjon av node en bruker til en hver tid. Dette kan være lurt om versjonen du installerte ikke fungerte. Det kan finnes her: https://github.com/nvm-sh/nvm)*

Når node er installert får man med Node Package Manager(NPM) som brukes til å laste ned ulike moduler for javascript. Det er slik vi blant annet laster ned React.

Å starte og teste frontend kan gjøres likt på alle operativsystemer:

Naviger til watchlist_frontend og kjør kommandoen:

`npm install`, da vil alle pakkene som står spesifisert i package.json bli installert i mappen node_modules.

For å kjøre React-appen kan man skrive:

`npm start` og man kan teste nettsiden på localhost:3000 i nettleseren.


## Backend
For å kjøre backend med Django må vi først sette opp en virtual environment, slik at vi bare får med de riktige versjonene av pip pakkene vi vil bruke. Her må vi ha __Python v.3.6 eller høyere__.

### Virtualenvironment på windows
Vi kan laste ned Virtual envirnoment med pip. Naviger inn i mappen watchlist_backend

        pip install virtualenv               #om du ikke har det installert fra før,             **trengs bare å gjøre første gang**
        virtualenv venv                      #lager en mappe som inneholder virtualenvironment,  **trengs bare å gjøre første gang**
        venv\Scripts\activate                #start virtualenvironment,                          **må gjøres hver gang man skal bruke backend**

### Virtualenvironment på Mac/Linux

        pip install virtualenv             #om du ikke har det installert fra før,             **trengs bare å gjøre første gang**
        virtualenv -p python3 venv         #lager en mappe som inneholder virtualenvironment,  **trengs bare å gjøre første gang**
        . venv/bin/activate                #start virtualenvironment,                          **må gjøres hver gang man skal bruke backend**
### Installere pakker med rett versjon

Vi kan så installere riktig versjon av Django og andre pakker vi bruker med: `pip install -r requirements.txt`

### Starte django backend

`python manage.py migrate` for å legge inn databasemodeller

`python manage.py runserver` For å kjøre Django. Man kan teste den i localhost:8000 eller i 127.0.0.1:8000 i nettleseren.

for å gå ut av virtual envirnoment kan man skrive `deactivate`i terminalen/cmd

## Deployment
For å deploye til vår server må man ha SSH. på windows kan man bruke Putty, og på linux/Mac kan man bruke terminalen.
http://watchlist.social er det tilknyttede domenet

Kommer mer senere...

### Server Frontend:
 ssh root@207.154.225.88
 
 passord: dgwUDQbYTnDBXJGff2H6R5UnzxgTLDgbkBM6ssy4qrTnF5T6m
 
 git pull origin master
 
 npm run-script build
 
 serve -s -l 80 build


