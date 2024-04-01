import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex bg-amber-100 dark:bg-gray-600 lg:text-lg p-4 justify-center gap-6'>
      <NavBarItem title='Trending' param='fetchTrending'/>
      <NavBarItem title='Top Rated' param='fetchTopRated'/>
      
    </div>
  )
}
