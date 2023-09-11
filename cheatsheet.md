| **Docker Cheat Sheet**             | **Docker Compose Cheat Sheet**    |
|-----------------------------------|-----------------------------------|
| **Upravljanje Slikama:**          | **Docker Compose Osnove:**       |
|                                   |                                   |
| - `docker build -t <ime_slike> .` | - `docker-compose up`            |
|   Izgradi Docker sliku iz Dockerfile-a. |   Pokreće kontejnere definirane u docker-compose.yml datoteci. |
| - `docker pull <ime_slike>:<oznaka>` | - `docker-compose down`         |
|   Preuzmi Docker sliku s registra. |   Zaustavlja i uklanja kontejnere definirane u docker-compose.yml datoteci. |
| - `docker push <ime_slike>:<oznaka>` | - `docker-compose build`       |
|   Prenesi Docker sliku na registar. |   Izgradi ili ponovno izgradi usluge definirane u docker-compose.yml datoteci. |
| - `docker images`                |                                   |
|   Popis svih lokalnih Docker slika. | **Upravljanje Uslugama:**          |
| - `docker rmi <id_slike>`         |                                   |
|   Ukloni lokalnu Docker sliku.    | - `docker-compose ps`            |
|                                   |   Popis usluga i njihovog statusa. |
| **Upravljanje Kontejnerima:**     | - `docker-compose logs <ime_usluge>` |
|                                   |   Pregledajte dnevnike određene usluge. |
| - `docker run <opcije> <ime_slike>` | - `docker-compose exec <ime_usluge> <naredba>` |
|   Stvori i pokreni Docker kontejner. |   Izvrši naredbu u pokrenutom kontejneru usluge interaktivno. |
|   - Primjer:                     |                                   |
|   `docker run -d -p 8080:80 moja_aplikacija` | **Skaliranje Usluga:**            |
|   Pokreni u odvojenom načinu i preslikaj port 8080 na port 80. | - `docker-compose up -d --scale <ime_usluge>=<broj_instanci>` |
| - `docker ps`                    |   Prilagodi broj instanci usluge. |
|   Popis pokrenutih kontejnera.   | **Konfiguracija Compose Datoteke:** |
| - `docker ps -a`                 |                                   |
|   Popis svih kontejnera (uključujući zaustavljene). | - `docker-compose.yml`:           |
| - `docker start <id_kontejnera>`  |   Definiranje usluga, mreža, volumena i konfiguracija. |
|   Pokretanje zaustavljenog kontejnera. |                                   |
| - `docker stop <id_kontejnera>`   |                                   |
|   Zaustavljanje pokrenutog kontejnera. |                                   |
| - `docker restart <id_kontejnera>` |                                   |
|   Ponovno pokretanje kontejnera. |                                   |
| - `docker exec -it <id_kontejnera> <naredba>` | **Čišćenje:**                    |
|   Izvršavanje naredbe u pokrenutom kontejneru interaktivno. |                                   |
|                                   | - `docker system prune`          |
| **Životni Ciklus Kontejnera:**    |   Ukloni sve zaustavljene kontejnere, neiskorištene mreže i neiskorištene slike. |
|                                   | - `docker container prune`       |
| - `docker rm <id_kontejnera>`     |   Ukloni sve zaustavljene kontejnere. |
|   Ukloni zaustavljeni kontejner.  | - `docker image prune`           |
| - `docker logs <id_kontejnera>`   |   Ukloni sve neiskorištene slike. |
|   Pregledajte dnevnike kontejnera. |                                   |
| - `docker inspect <id_kontejnera>` |                                   |
|   Pregled detalja kontejnera.     |                                   |
| - `docker top <id_kontejnera>`    |                                   |
|   Popis procesa koji se izvode u kontejneru. |                                   |
|                                   |                                   |
| **Mreža:**                        |                                   |
| - `docker network ls`             |                                   |
|   Popis Docker mreža.             |                                   |
| - `docker network create <ime_mreže>` |                                   |
|   Stvaranje Docker mreže.         |                                   |
| - `docker network connect <ime_mreže> <id_kontejnera>` |                                   |
|   Povezivanje kontejnera s mrežom. |                                   |
| - `docker network disconnect <ime_mreže> <id_kontejnera>` |                                   |
|   Odspajanje kontejnera iz mreže. |                                   |
|                                   |                                   |
| **Volumen:**                      |                                   |
| - `docker volume ls`              |                                   |
|   Popis Docker volumena.          |                                   |
| - `docker volume create <ime_volumena>` |                                   |
|   Stvaranje Docker volumena.      |                                   |
| - `docker volume rm <ime_volumena>` |                                   |
|   Uklanjanje Docker volumena.     |                                   |
| - `docker run -v <ime_volumena>:<putanja_u_kontejneru> <ime_slike>` |                                   |
|   Montiranje volumena u kontejneru. |                                   |
|                                   |                                   |
| **Čišćenje:**                     |                                   |
| - `docker system prune`           |                                   |
|   Ukloni sve zaustavljene kontejnere, neiskorištene mreže i neiskorištene slike. |                                   |
| - `docker container prune`        |                                   |
|   Ukloni sve zaustavljene kontejnere. |                                   |
| - `docker image prune`            |                                   |
|   Ukloni sve neiskorištene slike. |                                   |


## Kreiranje Dockerifle slika

| Naredba                  | Upotreba                        | Objašnjenje                                       |
|--------------------------|---------------------------------|--------------------------------------------------|
| **FROM**                  | `FROM osnovni_image`           | Ova naredba određuje temeljnu (osnovnu) Docker sliku. |
| **WORKDIR**               | `WORKDIR /radni_dir`           | Postavlja trenutni radni direktorij unutar kontejnera. |
| **COPY**                  | `COPY izvor odredište`         | Kopira datoteke iz lokalnog izvornog direktorija u trenutni radni direktorij unutar kontejnera. |
| **RUN**                   | `RUN naredba`                  | Izvršava naredbe unutar kontejnera tijekom izgradnje slike. Koristi se za instalaciju paketa, postavljanje okoline i druge zadatke. |
| **EXPOSE**                | `EXPOSE port`                  | Definira na kojim portovima će vaša aplikacija slušati unutar kontejnera. |
| **CMD**                   | `CMD ["naredba", "argumenti"]` | Određuje zadnju naredbu koja će se izvršiti kada se kontejner pokrene. |
| **ENV**                   | `ENV KLJUČ=vrijednost`         | Postavlja okolišnu varijablu unutar kontejnera. |
| **USER**                  | `USER korisnik`                | Postavlja korisnika unutar kontejnera koji će izvoditi naredbe u Dockerfile-u nakon ove naredbe. Pomaže u postavljanju razina ovlasti. |
| **VOLUME**                | `VOLUME ["/putanja"]`          | Definira trajni volumen unutar kontejnera. |
| **LABEL**                 | `LABEL ključ=vrijednost`       | Dodaje metapodatke i oznake vašoj slici. Ove oznake su korisne za dokumentaciju. |

- Docker se koristi za kontejnerizaciju pojedinačnih aplikacija, dok Docker Compose služi za orkestraciju i upravljanje grupom kontejnera kao cjelovitom aplikacijom.

### Kreiranje docker-compose.yml

| Naredba                 | Upotreba                                         | Objašnjenje                                      |
|-------------------------|--------------------------------------------------|-------------------------------------------------|
| **Verzija i Servisi**   |                                                  |                                                 |
| **version**             | `version: '3'`                                  | Verzija Docker Compose specifikacije. Najčešće se koristi verzija '3'.  |
| **services**            |                                                  | Definira usluge koje će biti pokrenute kao kontejneri. |
| **networks**            |                                                  | Definira mreže koje će se koristiti za komunikaciju između kontejnera. |
| **volumes**             |                                                  | Definira volumene koji će se koristiti za trajno spremanje podataka. |
| **Usluge**              |                                                  |                                                 |
| **image**               | `image: ime_slike`                              | Specifikacija Docker slike koja će biti korištena za pokretanje kontejnera. |
| **container_name**      | `container_name: ime_kontejnera`                | Ime kontejnera. Ako nije navedeno, Docker Compose će automatski generirati ime. |
| **ports**               | `ports: - "lokalni_port:kontejner_port"`       | Mapira lokalni port na kontejner port. |
| **volumes**             | `volumes: - "lokalna_putanja:putanja_u_kontejneru"` | Povezuje putanju volumena na kontejner putanju. |
| **environment**         | `environment: - KLJUČ=vrijednost`              | Postavlja okolišne varijable unutar kontejnera. |
| **depends_on**          | `depends_on: - ime_usluge`                     | Definira ovisnosti između usluga. Ova usluga će se pokrenuti tek nakon što se navedena usluga pokrene. |
| **networks**            | `networks: - ime_mreže`                        | Povezuje uslugu s određenom mrežom koja se definira u "networks" sekciji. |
| **volumes**             | `volumes: - ime_volumena:/putanja_u_kontejneru` | Povezuje uslugu s određenim volumenom koji se definira u "volumes" sekciji. |


### Primjer docker-compose.yml datoteke
```yml
version: '3'
services:

  app:
    image: nodejs:latest
    container_name: nodejs
    ports:
      - "8080:3000" 
    environment:
      - DATABASE_URL=postgres://korisnik:lozinka@baza:5432/moja-baza
    networks:
      - my-network

  db:
    image: postgres:12
    container_name: postgresdb
    environment:
      - POSTGRES_DB=db
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - my-network

networks:
  my-network:

volumes:
  postgres-data:
```