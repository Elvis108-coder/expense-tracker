function SortButtons({ setSortKey }) {
    return (
      <div>
        <button onClick={() => setSortKey('description')}>Sort by Description</button>
        <button onClick={() => setSortKey('category')}>Sort by Category</button>
      </div>
    )
  }
  
  export default SortButtons
  