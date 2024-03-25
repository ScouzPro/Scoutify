import request from 'supertest';
import app from '../index.js'; // Asumiendo que index.js exporta la aplicación express como `app`

// test get all players
describe("GET /player", () => {
    it('response with json containing a list of all players', done => {
        request(app)
            .get('/player') // Asegúrate de agregar una barra (/) al inicio de la ruta
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('/GET /player/:id', () => {
    it('response with json containing a player', done => {
        request(app)
            .get('/player/65fc1f3608cb47ede02b056d') 
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});



