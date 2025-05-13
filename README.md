Aplikacja Fruit Shop
Ten projekt to prosta aplikacja sklepu owocowego. Użytkownicy mogą przeglądać produkty, dodawać je do koszyka oraz zobaczyć ostatnio dodany produkt. Aplikacja została stworzona w oparciu o Express.js i może być uruchomiona jako aplikacja desktopowa przy użyciu Electron.

📦 Instalacja
bash
Copy
Edit
git clone 
cd nazwa-projektu
npm install

🚀 Uruchamianie
W przeglądarce:
bash
Copy
Edit
npm start
Otwórz przeglądarkę i przejdź do http://localhost:3000.

Jako aplikacja desktopowa (Electron):
bash
Copy
Edit
npm run electron
Okno aplikacji otworzy się automatycznie.

🧪 Funkcje
✅ Dodawanie nowych produktów

✅ Strona szczegółów produktu

✅ Dodawanie produktów do koszyka

✅ Wyświetlanie ostatnio dodanego produktu

✅ estetyczny interfejs

🗂️ Struktura projektu
java
Copy
Edit
├── views/               → Szablony EJS
├── public/              → Style CSS i obrazy
├── controllers/         → Logika tras
├── routing/             → Pliki tras (routes)
├── models/              → Dane produktów (w pamięci)
├── utils/               → Funkcje pomocnicze
├── main.js              → Główny plik Electron
├── app.js / server.js   → Serwer Express
├── package.json

🧠 Uwagi
Obrazy produktów przypisywane są automatycznie na podstawie ich nazw. Dla nieznanych produktów wyświetlane jest domyślne zdjęcie owoców.

Ścieżki do zasobów statycznych są poprawnie skonfigurowane dla środowiska Electron (public).
