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
 
 naviger til watchlist-frontend
 
 git pull origin master
 
 npm run-script build
 
 serve -s -l 80 build #Oppdatering for https, bruk 'serve -s -l 3000 build &̈́' (ngnix kjører på 80 og sender til 3000)
 
 Legg til & etter kommandoen for å spawne en egen prosess.
 
 Bruk sudo lsof -i :80 for å finne prosess id som bruker port 80, og kill PID for å avslutte prosessen. 

### Server Backend:
ssh root@138.68.107.119

. venv/bin/activate

python manage.py runserver 138.68.107.119:80

passord: vgTRUyXstunLtLJa628d6BuGtVLzzwD4kVgYB9MVrj7xfm7zoEdy4ioQWgaqgZGGetCYR24XJsFP2GyfbrVXcuzmFy2NXQqw4wjCuZRr32PgdpRzRevRf43EKCg3fXnK

Logge inne på 138.68.107.119/admin/:

Brukernavn: admin

Passord: Y4wfitPqqYq7keSNVM7CUKQeE4nHMNqbNTqvNG4vGsK7zABw3UmgVRwxu2nxTuiwWLD9P3BJx9Pqo6fyrNc8fRnwDp8zEj4T4uK4fzx3tfnjBkdECD3dkwpZWVhm5ouj

## Sikker kommunikasjon
Bruker ngnix som reverse proxy server og LetsEncrypt med certbot for å generere SSL sertifikat. Fremmgangsmåten er så godt som identisk for frontend og backend.
### Sette opp ngnix server
        sudo apt install ngnix               
        sudo ufw status                              #Sjekk om brannmuren er aktivert. Default er den deaktivert, i så fall ingenting å bry seg om(for oss)
        sudo ufw allow 'Ngnix Full'                  #Får brannmur til å slippe igjennom https. Eller bare deaktiver hele greia med sudo ufw disable 
        sudo nano /etc/nginx/sites-available/default #åpner en fil som skal redigeres 
        Finn  hvor det står server_name_ location /... og erstatt dette med
        
            server_name domene.no www.domene.com; #feks watchlist.social
        location / {
        
            proxy_pass http://localhost:3000; #eller 8000 for django
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
        

        sudo service ngnix restart                  #restart ngnix server med den nye koden. Hvis front eller backend startes (npm start / runserver) vil siden nå fungere over http         
   

### Legge til SSL med med certbot og LetsEncrypt
Certbot gjør det mest av arbeidet her, legger sertifikater i riktige mapper og oppdaterer ngnix filer

        sudo add-apt-repository ppa:certbot/certbot
        sudo apt-get update
        sudo apt-get install python-certbot-nginx
        sudo certbot --nginx -d domene.com -d www.domene.com #erstatt domene her     
        Her må det svares på et par spørsmål i løpet av prosessen, legge inn mail etc
        Kommer et spørsmål om http forespørsler skal håndeteres over https automatisk. Kan sikkert svare ja her

        
Bonus for backend:

        gå inn i settings.py og legg domenenavne som ble lagt inn i ngnix fila tidligere inn i  ALLOWED_HOSTS. feks
        ALLOWED_HOSTS = ['www.watchlist.social, 'mittdomene.bike']

Til slutt for både frontend og backend

      sudo service ngnix restart   #oppdater og restart nginx server som nå hånderer https
      Start frontend/backend med npm start eller runserver. 
      