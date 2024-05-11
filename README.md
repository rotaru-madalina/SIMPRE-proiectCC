Link doc (pentru că sunt și poze care nu sunt vizibile?): https://docs.google.com/document/d/1EB-8XGN1tsHMObN45RDGe8E4OVYV0Cjypdk7dWumT34/edit?usp=sharing 

Titlu: “Ghibli Cinema”

Nume, Prenume: Rotaru Cristina-Mădălina

Grupa: 1133


- link video - prezentare proiect: https://youtu.be/YsLsouKkIgk
  
- link publicare: https://simpre-proiect-qfb8zgzxh-madalina-rotarus-projects.vercel.app
  
- link git: rotaru-madalina/SIMPRE-proiectCC (github.com)

1. Introducere

Proiectul meu, denumit Ghibli Cinema, este o aplicație web destinată iubitorilor de filme de animație, oferind acces facil la o selecție de filme celebre de la Studio Ghibli. Scopul acestui site este de a facilita vizualizarea informațiilor despre diversele filme Ghibli, permițând utilizatorilor să afle detalii despre fiecare film, să vizualizeze imagini și să gestioneze filmele pe care doresc să le vadă.

2.  Descriere problemă
   
Utilizatorii care doresc să vizualizeze filme de animație de la Studio Ghibli întâmpină dificultăți în a găsi o sursă centralizată care să ofere informații detaliate și programări pentru aceste filme. De asemenea, fanii doresc o modalitate de a organiza filmele preferate și de a planifica vizionările pe baza disponibilității lor. Ghibli Cinema își propune să rezolve aceste probleme printr-o interfață user-friendly care oferă acces rapid la o bază de date bogată de filme Ghibli, completă cu detalii și imagini relevante.

4. Descriere API
   
API-ul pentru Ghibli Cinema are următoarele funcționalități pentru:
Obținerea listei de filme: Utilizatorii pot recupera lista completă de filme sau filme filtrate după ziua specificată (fiecare zi fiind un buton).
Adăugarea unui nou film: Utilizatorii pot adăuga filme noi în baza de date.
Actualizarea informațiilor filmului: Permite modificarea detaliilor existente ale unui film.
Ștergerea unui film: Filmele pot fi eliminate din baza de date.

5. Flux de date
   
Exemple de request / response
GET http://localhost:3000/api/records - returnează lista tuturor filmelor

POST (localhost:3000/create) 

Metode HTTP

GET: pentru a recupera date -> se afișează toate filmele; dacă se apasă pe un buton asociat unei zile din săptămână, vor fi afișate doar filmele care au “Show date” conform
POST: pentru a crea noi intrări -> se creează un nou film prin apăsarea butonului “Add” care ne va duce către un formular cu toate câmpurile definite și lipsite de informații, ele urmând fi furnizate drept input de la utilizator. (în caz că link-ul imaginii copiat de pe internet și introdus în formular nu a fost conform - de ex. formatul nu e png sau site-ul unde era găzduită poza nu mai există - va fi afișat cuvântul “Missing” așa cum se poate vedea în captura de ecran de mai sus)
PUT: pentru a actualiza intrările existente -> se actualizează datele unui film atunci când se apasă pe butonul “Update” de pe cardul filmului respectiv; câmpurile sunt populate cu datele asociate filmului și de aici mai departe se poate modifica un câmp și se poate apăsa pe butonul “Update” pentru a finaliza modificările, sau se apasă pe butonul “Cancel” pentru a anula modificările (în caz că au fost făcute)
DELETE: pentru a șterge intrările -> se șterge un film din baza de date atunci când se apasă pe butonul “Delete” de pe cardul filmului respectiv

Autentificare și autorizare servicii utilizate (dacă este cazul): nu a fost cazul


5. Capturi ecran aplicație


Toate filmele:

Butoanele din navbar, de la stânga spre dreapta: “All”, “Monday”, “Tuesday”, “Wednesday”, “Thursday”, “Friday”, “Saturday”, plus butonul “Add”



Doar un film corespunde filtrului pentru ziua “Monday”; când butonul este selectat și cursorul nu este pe el, culoarea lui va fi galben-verde.

Când cursorul este asupra butonul, el capătă o culoare galbenă (diferită de culoarea pe care o are atunci când cursorul nu e pe buton), tocmai pentru a nu crea confuzii pentru utilizator.


Când niciun film nu este ecranizat în ziua selectată.

Formularul de “Add”:

Formular de “Update”:


5.1 (?): Descriere tehnologii cloud folosite (minim 2)

MongoDB: bază de date NoSQL orientată pe documente, care oferă performanță ridicată, disponibilitate înaltă și scalabilitate ușoară. Este cunoscută pentru flexibilitatea sa, permițând dezvoltatorilor să stocheze date într-un format JSON-like, ceea ce face ușoară integrarea cu aplicații și platforme de dezvoltare web; este ideală pentru gestionarea structurilor de date mari și complexe, care pot varia în timp, ceea ce este comun în aplicații web moderne și dinamice. Am folosit această tehnologie deoarece este ușoară de folosit, are o interfață prietenoasă și nu are costuri adiționale.
Vercel: platformă cloud pentru front-end și serverless, optimizată pentru performanță și scalabilitate. Oferă deploy automat la fiecare push în GitHub, facilitând dezvoltarea continuă și integrarea/deploy-ul continuu (CI/CD). Vercel are capacitatea de a optimiza automat livrarea site-urilor și aplicațiilor web, asigurând timpi de încărcare rapizi și o experiență fluidă pentru utilizatori. (ușor de folosit, nu implică costuri)
GitHub: platformă de găzduire pentru controlul versiunilor folosind Git. Este utilizată pe scară largă pentru colaborare în dezvoltarea software, oferind un set bogat de funcționalități precum managementul codului sursă, controlul versiunilor, accesul colaborativ și diverse alte funcții pentru dezvoltarea proiectelor. GitHub facilitează colaborarea între dezvoltatori, permițându-le să urmărească și să contribuie la proiecte într-un mediu organizat și eficient. GitHub Desktop, aplicație pe care am folosit-o pentru toate comenzile specifice git, este o aplicație grafică simplificată pentru toate funcțiile pentru GitHub; folosită în special de cei care nu sunt familiarizați cu comenzi git în terminal sau când au alte problemă de git necunoscute (în cazul meu, comanda git add . nu avea niciun efect așa că am folosit GitHub Desktop).


6. Referințe
MihaiAdrianLungu/SIMPRE-2024 (github.com)

Flowbite - Tailwind CSS component library

Cele mai recente filme- Filme Noi-Filme 3D | Cinema City

