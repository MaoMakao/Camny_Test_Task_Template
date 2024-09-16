// React Imports
import type { SVGAttributes } from 'react'

const LessonsIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M6.75 2.25H11.25' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M7.5 6.75H10.5' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path
        d='M7.49995 2.25V6.75L4.49995 15C4.42658 15.1476 4.42679 15.3211 4.50049 15.4685C4.5742 15.6159 4.71286 15.7201 4.87495 15.75H13.1249C13.287 15.7201 13.4257 15.6159 13.4994 15.4685C13.5731 15.3211 13.5733 15.1476 13.4999 15L10.4999 6.75V2.25'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default LessonsIcon
