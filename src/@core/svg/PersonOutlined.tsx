// React Imports
import type { SVGAttributes } from 'react'

const PersonOutlined = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle
        cx='8.00004'
        cy='4.66667'
        r='2.66667'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4 14V12.6667C4 11.1939 5.19391 10 6.66667 10H9.33333C10.8061 10 12 11.1939 12 12.6667V14'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default PersonOutlined
