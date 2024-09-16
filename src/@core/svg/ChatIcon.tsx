// React Imports
import type { SVGAttributes } from 'react'

const ChatIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M2.25 15L3.225 12.075C1.48209 9.49725 2.15541 6.17077 4.79983 4.2947C7.44424 2.41862 11.2427 2.57263 13.684 4.65491C16.1253 6.73719 16.4551 10.1043 14.4554 12.5303C12.4557 14.9563 8.7444 15.6916 5.775 14.25L2.25 15'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M9 9V9.0075' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M6 9V9.0075' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
      <path d='M12 9V9.0075' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  )
}

export default ChatIcon
