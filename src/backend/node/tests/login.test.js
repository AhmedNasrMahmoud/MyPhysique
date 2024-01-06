const supertest = require('supertest');
const { app, server } = require('../server'); // Adjust the path to your server file

describe('Login Endpoint', () => {
    it('should login successfully with correct credentials', async () => {
        const response = await supertest(app)
            .post('/login')
            .send({
                email: 'johndoe@example.com', // Valid email from test database
                password: 'password123'       // Corresponding password
            });
        
        expect(response.statusCode).toBe(200);
        // Modify the assertion based on your actual response
        // expect(response.body).toHaveProperty('message', 'Login successful');
    });

    it('should fail with invalid credentials', async () => {
        const response = await supertest(app)
            .post('/login')
            .send({
                email: 'wrong@example.com',
                password: 'wrongpassword'
            });
        
        expect(response.statusCode).toBe(400);
        // Adjust the assertion based on your actual response
        // expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });

    afterAll(async () => {
        if (server && server.close) {
            await new Promise((resolve, reject) => {
                server.close((err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
            });
        }
    });
});
