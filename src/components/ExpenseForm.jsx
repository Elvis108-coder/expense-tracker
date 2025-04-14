import { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newExpense = {
      ...formData,
      id: crypto.randomUUID()
    }
    onAddExpense(newExpense)
    setFormData({ description: '', category: '', amount: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <input name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required />
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
