// ==================
// puerto
// ==================
process.env.PORT = process.env.PORT || 3000;

// ==================
// entorno
// ==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================
// Base de Datos
// ==================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb://cafe-user:qwe123qwe@ds131313.mlab.com:31313/cafe'
}
process.env.URLDB = urlDB;