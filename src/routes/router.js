const router = require('express').Router()
const Collaborator = require('../models/collaborator')

// CRUD

// C - Created - Criar
router.post('/', async (request, response) => {
    try {
        
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

// R - Read - Leitura
router.get('/:id', async (request, response) => {
    try {
        
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})
router.get('/', async (request, response) => {
    try {
        
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

// U - Update - Atualização
router.patch('/:id', async (request, response) => {
    try {
        
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

// D - Delete - Remover
router.delete('/:id', async (request, response) => {
    try {
        
    } catch (error) {
        response.status(500).json({ erro: error })
    }
})

module.exports = router