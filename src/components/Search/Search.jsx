import React from 'react'

export const Search = ({search}) => {
  return (
    <div className='container'>
      <input onKeyDown={search} className='form-control w-25 mx-auto my-3 ' type="text" placeholder='Search IMDb' />
    </div>
  )
}


