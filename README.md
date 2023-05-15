Bond Film API
Det här projektet innehåller ett enkelt REST API för att hantera bondfilmer. Det är skrivet i Node.js och använder Express.js som webbserver.

Installation
Installera Node.js om du inte redan har det installerat.
Kör npm install för att installera projektets beroenden.
Kör npm run dev för att starta servern.
API-slutpunkter
Hämta alla filmer:
Metod: GET URL: /movies?apiKey="apiKey"

Hämta en specifik film baserat på ID
Metod: GET URL: /movies/:id?apiKey="apiKey"

Skapa en ny Film, obligatoriska fält: Title, Year, Released, Genre. 
Metod: POST URL: /movie?apiKey="apiKey" Body: 
{
   "Title": "",
   "Year": "",
   "Rated": "",
   "Released": "",
   "Runtime": "",
   "Genre": "",
   "Director": "",
   "Writer": "",
   "Actors": "",
   "Plot": "",
   "Language": "",
   "Country": "",
   "Awards": "",
   "Poster": "",
   "Ratings": [{ "Source": "", "Value": ""}],
   "Metascore": "",
   "imdbRating": "",
   "imdbVotes": "",
   "id": "",
   "Type": "",
   "DVD": "",
   "BoxOffice": "",
   "Production": "",
   "Website": "",
   "Response": ""
}

Uppdatera en befintlig film baserat på id
Metod: PUT URL: /movie/:id?apiKey="apiKey" Body: 
{ 
  "Titel": "Ny titel", 
  "Year" : "Nytt år", 
  ...
}

Ta bort en film baserat på ID
Metod: DELETE URL: /movie/:id?apiKey="apiKey"

Lägg till API key
Metod: POST URL: /apikeys Body: 
{
  "apiKey": "NY API KEY"
}

Deleta API key
Metod DELETE URL: /apikeys/:apiKey(den apiKey du vill deletea)

Hämta alla validerade API keys:
Metod: GET URL: /apikeys?apiKey="apiKey"

Använda API:et med Postman
Ladda ner och installera Postman om du inte redan har det installerat.
Skapa en ny "Collection" i Postman.
För varje API-slutpunkt, skapa en ny "Request" i din collection och konfigurera den med rätt metod och URL (enligt beskrivningen ovan).
För POST och PUT-anrop, gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din karaktär enligt exempel ovan.
Skicka dina requests och utforska API:et!