// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: '&apiKey=75c2bb76933b4995ba27d29c4404c1bf',
  baseUrl: 'https://newsapi.org/v2/',
  sources: 'top-headlines/sources?language=',
  headline: 'top-headlines?sources=',
  everything: 'everything?q=',
  ru: '&language=ru',
  us: '&language=en',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
