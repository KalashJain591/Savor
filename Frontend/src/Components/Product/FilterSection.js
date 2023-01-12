import React from 'react'
import { useFilterContext } from '../../Context/FilterContext'
import "./FilterSection.css"
const FilterSection = () => {
  const { filters: { text }, updateFilterValue, all_products, clearFilters } = useFilterContext();

  //To Get the unique data of each fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return newVal = ["All", ...new Set(newVal)]
    // console.log(getUniqueData)
  }
  //We need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  return (
    <div className='side-bar'>
      <div className='search-section'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder="SEARCH..." />
        </form>
      </div>
      <div className="category-filter-section">
        <h3>Category</h3>
        <div className="category-option">
          {categoryOnlyData.map((curElem) => {
            return (
              <button key={curElem} type="button" name="category" value={curElem} onClick={updateFilterValue}>{curElem}</button>
            )
          })}
        </div>
      </div>
      <div className="clear-section">
        <button className='clear-Filter' onClick={clearFilters}>Clear Filter</button>
      </div>
    </div>
  )
}

export default FilterSection
