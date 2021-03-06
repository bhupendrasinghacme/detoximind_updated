// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'detoximindchatapp',
    appId: '1:699416696843:web:108c9ef5d5ca5be6964f0e',
    databaseURL: 'https://detoximindchatapp-default-rtdb.firebaseio.com',
    storageBucket: 'detoximindchatapp.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAyWO339cN86vxCD0Y4fl91yIuD-Gc-DGA',
    authDomain: 'detoximindchatapp.firebaseapp.com',
    messagingSenderId: '699416696843',
  },
  wordpress: {
    api_url: "http://www.detoximind.com/"
  },
  admin_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cuZGV0b3hpbWluZC5jb20iLCJpYXQiOjE2NTgzMTk4MDUsIm5iZiI6MTY1ODMxOTgwNSwiZXhwIjoxNjU4OTI0NjA1LCJkYXRhIjp7InVzZXIiOnsiaWQiOjEsImRldmljZSI6IiIsInBhc3MiOiI2MDRlNGJlZDc3YjRjZTEyMjRjZWZiMjZkMTI3YmI5ZCJ9fX0.PQfvNC7WpIRGFNBmhhLgMLlezvs29JKmvC-1IuLkk7k"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
