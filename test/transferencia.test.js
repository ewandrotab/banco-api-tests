const { expect } = require('chai')
const request = require('supertest')

const { obterToken } = require('../helpers/autenticacao.js')

describe('Transferências', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar status 201 quando realizada uma transferência com valor maior que a R$ 10,00', async () => {

            const token = await obterToken('julio.lima', '123456')

            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 10.01,
                    token: ''
                })

            expect(resposta.statusCode).to.equal(201)

        })

        it('Deve retornar status 201 quando realizada uma transferência com valor igual a R$ 10,00', async () => {

            const token = await obterToken('julio.lima', '123456')

            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 10,
                    token: ''
                })

            expect(resposta.statusCode).to.equal(201)

        })

        it('Deve retornar status 422 quando tento realizar uma transferência com valor menor que R$ 10,00', async () => {

            const token = await obterToken('julio.lima', '123456')

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