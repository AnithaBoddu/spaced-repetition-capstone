const HOST = process.env.SERVER_HOST || process.env.HOST || 'localhost';
const PORT = process.env.SERVER_PORT || process.env.PORT || 8080;
const ROOT = `https://${HOST}:${PORT}`;


// mlab version 
// const HOST = process.env.SERVER_HOST || process.env.HOST || 'rep-times-3:rep-times-3@ds157539.mlab.com';
// const PORT = process.env.SERVER_PORT || process.env.PORT || 57539;
// const PROJECT = '/spaced-repetition-capstone'
// const ROOT = `mongodb://${HOST}:${PORT}${PROJECT}`;



const CLIENT_HOST = process.env.CLIENT_HOST || 'localhost';
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;
const CLIENT_ROOT = process.env.CLIENT_HOST;

const DB_LOCALHOST = '//mongodb://localhost/SpacedRepetition';


module.exports = {
    
    HOST,
    PORT,
    ROOT,
    CLIENT_HOST,
    CLIENT_PORT,
    CLIENT_ROOT,
    DB_LOCALHOST
   
};

