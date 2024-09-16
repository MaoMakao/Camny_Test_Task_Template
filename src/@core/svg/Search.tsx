// React Imports
import type { SVGAttributes } from 'react'

const Search = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle
        cx='6.66667'
        cy='6.66667'
        r='4.66667'
        stroke='#5C5C5E'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M14 14L10 10' stroke='#5C5C5E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

export default Search
