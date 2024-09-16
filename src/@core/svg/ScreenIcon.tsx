// React Imports
import type { SVGAttributes } from 'react'

const ScreenIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x='2.25'
        y='3'
        width='13.5'
        height='9'
        rx='1'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M5.25 15H12.75' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M6.75 12V15' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M11.25 12V15' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

export default ScreenIcon
