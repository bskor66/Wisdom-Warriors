const express = require('express');
const router = express.Router();
const budgetController = require('../../controllers/api-budget-controller');

// API route to get all budgets
router.get('/', budgetController.getAllBudgets);
router.get('/:id', budgetController.getBudgetById);
router.post('/', budgetController.createBudget);
router.put('/:id', budgetController.updateBudget);
router.delete('/:id', budgetController.deleteBudget);

module.exports = router;
