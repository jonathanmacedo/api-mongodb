const router = require('express').Router()
const Collaborator = require('../models/collaborator')

// CRUD

// C - Created - Criar
router.post('/collaborator', async (request, response) => {
    const { name, age, sex, sector, badge, fired } = request.body

    const collaborator = {
        name,
        age,
        sex,
        sector,
        badge,
        fired
    }

    try {
        await Collaborator.create(collaborator)
        response.status(201).json({ messege: "Criado com sucesso!" })

    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

// R - Read - Leitura
router.get('/collaborator/:id', async (request, response) => {
    const { id } = request.params
    
    try {
        const collaborator = await Collaborator.findOne({ _id: id})

        if (!collaborator){
            response.status(422).json({ erro: "Usuário não encontrado" })
        }
    
        response.status(201).json(collaborator)        
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})
router.get('/collaborator', async (request, response) => {

    try {
        const collaborator = await Collaborator.find()

        response.status(201).json(collaborator)
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

// U - Update - Atualização
router.patch('/collaborator/:id', async (request, response) => {
    const { id } = request.params
    const { name, age, sex, sector, badge, fired } = request.body
    const collaborator = {
        name,
        age,
        sex,
        sector,
        badge,
        fired
    }

    try {
        const updateCollaborator = await Collaborator.updateOne({ _id: id }, collaborator)
        response.status(201).json({ messege: "Colaborador atualizado com sucesso" })
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

// D - Delete - Remover
router.delete('/collaborator/:id', async (request, response) => {
    const { id } = request.params

    const collaborator = await Collaborator.findOne({ _id: id })

    if (!collaborator){
        response.status(422).json({ erro: "Usuário não encontrado" })
    }

    try {
        await Collaborator.deleteOne({ _id: id })
        response.status(201).json({ messege: "Colaborador deletado com sucesso!" })
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

module.exports = router