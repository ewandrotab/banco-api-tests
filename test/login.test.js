const { expect } = require('chai')
const request = require('supertest')

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {

            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'julio.lima',
                    senha: 123456
                })

            expect(resposta.statusCode).to.equal(200)
            expect(resposta.body.token).to.be.a('string')

        })

        it('Deve retornar 401 quando a senha estiver incorreta', async () => {

            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'julio.lima',
                    senha: 'pwd123'
                })

            expect(resposta.statusCode).to.equal(401)
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.')

        })

        it('Deve retornar 401 quando o usuário não existir', async () => {

            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'joao.souza',
                    senha: '123456'
                })

            expect(resposta.statusCode).to.equal(401)
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.')

        })

        it('Deve retornar 400 quando não informar o usuário', async () => {

            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    senha: '123456'
                })

            expect(resposta.statusCode).to.equal(400)
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.')

        })

        it('Deve retornar 400 quando não informar a senha', async () => {

            const resposta = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    username: 'joao.souza',
                })

            expect(resposta.statusCode).to.equal(400)
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.')

        })
    })

    describe('GET /login', () => {
        it('Deve retornar 405 quando tentar utilizar o médoto GET', async () => {
            const resposta = await request('http://localhost:3000')
                .get('/login')
                .set('Content-Type', 'application/json')

            expect(resposta.statusCode).to.equal(405)
            expect(resposta.body.error).to.equal('Método não permitido.')
        })


    })

    describe('PUT /login', () => {
        it('Deve retornar 405 quando tentar utilizar o médoto PUT', async () => {
            const resposta = await request('http://localhost:3000')
                .put('/login')
                .set('Content-Type', 'application/json')

            expect(resposta.statusCode).to.equal(405)
            expect(resposta.body.error).to.equal('Método não permitido.')
            
        })

    })

    describe('PATCH /login', () => {
        it('Deve retornar 405 quando tentar utilizar o médoto PATCH', async () => {
            const resposta = await request('http://localhost:3000')
                .patch('/login')
                .set('Content-Type', 'application/json')

            expect(resposta.statusCode).to.equal(405)
            expect(resposta.body.error).to.equal('Método não permitido.')
            
        })

    })

    describe('DELETE /login', () => {
        it('Deve retornar 405 quando tentar utilizar o médoto DELETE', async () => {
            const resposta = await request('http://localhost:3000')
                .delete('/login')
                .set('Content-Type', 'application/json')

            expect(resposta.statusCode).to.equal(405)
            expect(resposta.body.error).to.equal('Método não permitido.')
            
        })

    })

})

