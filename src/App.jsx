import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import SearchBar from './components/SearchBar'
import SortButtons from './components/SortButtons'
import '../src/App.css'


function App() {
  const [expenses, setExpenses] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState(null)
  
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortKey) return 0
    return a[sortKey].localeCompare(b[sortKey])
  })

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortButtons setSortKey={setSortKey} />
      <ExpenseTable expenses={sortedExpenses} onDelete={deleteExpense} />
    </div>
  )
}

export default App
