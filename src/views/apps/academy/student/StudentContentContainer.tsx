'use client'
import type { FC } from 'react'
import React, { useMemo } from 'react'

import { useParams } from 'next/navigation'

import { useTheme } from '@mui/material/styles'

import { Grid } from '@mui/material'

import StudentLessonsTable from './StudentLessonsTable'
import type { StudentType } from '@/types/apps/academyTypes'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
import useVerticalNav from '@menu/hooks/useVerticalNav'
import menuItemStyles from '@core/styles/vertical/menuItemStyles'

import { Menu, SubMenu, MenuItem } from '@menu/vertical-menu'
import DashboardIcon from '@/@core/svg/DashboardIcon'
import LessonsIcon from '@/@core/svg/LessonsIcon'
import ScreenIcon from '@/@core/svg/ScreenIcon'
import InsightsIcon from '@/@core/svg/InsightsIcon'
import ChatIcon from '@/@core/svg/ChatIcon'

interface IStudentContentContainer {
  student: StudentType
}
type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const StudentContentContainer: FC<IStudentContentContainer> = ({ student }) => {
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const params = useParams()
  const { lang: locale } = params

  const menuItems = useMemo(
    () => [
      { title: 'Dashboard', href: null, icon: <DashboardIcon />, subItems: [{ title: 'Menu Item', href: '/' }] },
      { title: 'Lessons', href: `/${locale}/apps/academy/student/lessons`, icon: <LessonsIcon /> },
      { title: 'Image & Files', href: '/', icon: <ScreenIcon /> },
      { title: 'Insights', href: '/', icon: <InsightsIcon /> },
      { title: 'Chat', href: '/', icon: <ChatIcon /> }
    ],
    [locale]
  )

  return (
    <Grid container spacing={4}>
      <Grid item xs={2}>
        <Menu
          popoutMenuOffset={{ mainAxis: 23 }}
          menuItemStyles={menuItemStyles({ ...verticalNavOptions, isCollapsed: false }, theme)}
          renderExpandIcon={({ open }) => (
            <RenderExpandIcon open={open} transitionDuration={verticalNavOptions.transitionDuration} />
          )}
          renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
          menuSectionStyles={menuSectionStyles({...verticalNavOptions, isCollapsed: false}, theme)}
        >
          {menuItems.map(item =>
            item.subItems ? (
              <SubMenu key={item.title} label={item.title} icon={item.icon} alwaysActive>
                {item.subItems.map(subItem => (
                  <MenuItem key={subItem.title} href={subItem.href} alwaysActive>
                    {subItem.title}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem icon={item.icon} key={item.title} href={item.href} alwaysActive>
                {item.title}
              </MenuItem>
            )
          )}
        </Menu>
      </Grid>
      <Grid item xs={10}>
        <StudentLessonsTable lessons={student.lessons} />
      </Grid>
    </Grid>
  )
}

export default StudentContentContainer
