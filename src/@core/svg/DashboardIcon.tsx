// React Imports
import type { SVGAttributes } from 'react'

const DashboardIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M6.75 3.75H5.25C4.42157 3.75 3.75 4.42157 3.75 5.25V14.25C3.75 15.0784 4.42157 15.75 5.25 15.75H12.75C13.5784 15.75 14.25 15.0784 14.25 14.25V5.25C14.25 4.42157 13.5784 3.75 12.75 3.75H11.25'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <rect
        x='6.75'
        y='2.25'
        width='4.5'
        height='3'
        rx='1.5'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M6.75 12.75V9' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M9 12.75V12' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M11.25 12.75V10.5' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

export default DashboardIcon
