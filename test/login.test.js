const { expect } = require('chai')
const request = require('supertest')
const postLogin = require('../fixtures/postLogin.json')

require('dotenv').config()

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {

            const body = {... postLogin}

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(body)

            expect(resposta.statusCode).to.equal(200)
            expect(resposta.body.token).to.be.a('string')

        })

        it('Deve retornar 401 quando a senha estiver incorreta', async () => {

            const body = {... postLogin}
            body.senha = 'pwd123'

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(body)

            expect(resposta.statusCode).to.equal(401)
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.')

        })

        it('Deve retornar 401 quando o usuário não existir', async () => {

            const body = {... postLogin}
            body.username = 'joao.souza'

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(body)

            expect(resposta.statusCode).to.equal(401)
            expect(resposta.body.error).to.equal('Usuário ou senha inválidos.')

        })

        it('Deve retornar 400 quando não informar o usuário', async () => {

            const body = {... postLogin}
            delete body.username

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(body)

            expect(resposta.statusCode).to.equal(400)
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.')

        })

        it('Deve retornar 400 quando não informar a senha', async () => {

            const body = {... postLogin}
            delete body.senha
            
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(body)

            expect(resposta.statusCode).to.equal(400)
            expect(resposta.body.error).to.equal('Usuário e senha são obrigatórios.')

        })
    })

    describe('GET /login', () => {
        it('Deve retornar 405 quando tentar utilizar o médoto GET', async () => {
            const resposta = await request(process.env.BASE_URL)
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

