export const WEB_URL_PREFIX = window.location.protocol + '//' +
   ((window.location.port === '4200') ? (window.location.hostname + ':8080/'): (window.location.host + '/api/'))

