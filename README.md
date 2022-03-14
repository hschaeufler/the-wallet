# The Wallet

The Wallet is a progressive web app for managing European Vaccination-, Testing- and Convalescent-Certificates (EU DCC) and also for the managing of PKPASS files. The management of the individual certificates takes place completely offline. No documents leave the user's device. 

The app was developed as part of a lecture in my Master's degree programme. You are welcome to use the app, test the app or support its further development.

The app can be accessed via the following URL: [https://the-wallet.dev](https://the-wallet.dev)

## Technology
The PWA was developed on the basis of Angular. Initially, the app project was generated with the Angular CLI. 

For the reading  of  vaccination certificates, the [covid-certificate-checker](https://www.npmjs.com/package/covid-certificate-checker) is used.

## Project Setup
Please follow the instructions below to set up the project:

First clone the repository and init Submodules: 

```
git clone https://github.com/hschaeufler/the-wallet.git
git submodule init
git submodule update
```

Then install it's dependencies: `npm install`

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Test Service Worker
If you want to test service workers, you must first build the application.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Test Build

If you want to test service workers, you can run ``http-server -p 8080 -c-1 dist/the-wallet`` or easier: `npm run start:http`

## Prettier + Husky
To obtain beautiful code, the Prettier library was used.  This is activated via a husky commit hook and embellishes the checked-in files.

##Trustlist
The DSC trust list (List of certificate signing keys) is queried daily via a Github action. These are stored in the folder docs/assets/trustlist and checked in.

##Github Pages
To build the page for Github pages, please run the following command:
```npm run build:pages```
