const { expect } = require('chai')
const request = require('supertest')
const { obterToken } = require('../helpers/autenticacao.js')
const postTransferencias = require('../fixtures/postTransferencias.json')

require('dotenv').config()

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        let token

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')

        })

        it('Deve retornar status 201 quando realizada uma transferência com valor maior que a R$ 10,00', async () => {

            const body = { ...postTransferencias }
            body.valor = 10.01

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(body)

            expect(resposta.statusCode).to.equal(201)

        })

        it('Deve retornar status 201 quando realizada uma transferência com valor igual a R$ 10,00', async () => {

            const body = { ...postTransferencias }
            body.valor = 10.00

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(body)

            expect(resposta.statusCode).to.equal(201)

        })

        it('Deve retornar status 422 quando tento realizar uma transferência com valor menor que R$ 10,00', async () => {

            const body = { ...postTransferencias }
            body.valor = 9.99
            
            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 9.99,
                    token: ''
                })

            expect(resposta.statusCode).to.equal(422)
            expect(resposta.body.error).to.equal('O valor da transferência deve ser maior ou igual a R$10,00.')

        })

    })
})