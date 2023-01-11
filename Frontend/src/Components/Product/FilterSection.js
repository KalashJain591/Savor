import React from 'react'
import { useFilterContext } from '../../Context/FilterContext'

const FilterSection = () => {
  const {filter: {text}, updateFilterValue} = useFilterContext
  return (
    <div className='filter-section'>
      <form onSubmit={(e)=> e.preventDefault()}>
        <input type="text" name='text' value={text} onChange={updateFilterValue} />
      </form>
    </div>
  )
}

export default FilterSection
