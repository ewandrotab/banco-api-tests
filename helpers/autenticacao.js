const request = require('supertest')

async function obterToken (usuario, senha) {

    const resposta = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            username: usuario,
            senha: senha
        })

    return resposta.body.token

}

module.exports = {
    obterToken
}