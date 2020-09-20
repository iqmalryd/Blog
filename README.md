# Blog
This is react native app use for manage your daily activity

# Instalation
1. Clone this repository to your computer
2. Install dependencies for the App
```
cd <.../Blog>
```
```
yarn add
```
3. Install Json server

```
cd <.../jsonServer>
```
```
npm install
```
# Run App
1. Run Server (open 2 terminal windows) Terminal 1 :
```
cd <.../jsonServer>
```
```
npm run db
```
Terminal 2 :
```
cd <.../jsonServer>
```
```
npm run tunnel
```

2. Run expo (Open 1 terminal window again)
```
cd <.../Blog>
```
```
expo start
```

# Configuration
1. Open the Blog folder into your code editor
2. Open src/api/jsonServer
3. replace the link in baseURL, with your server url when run the tunnel
 ```
 baseURL: "http://c1edbf16278f.ngrok.io"
 ```
