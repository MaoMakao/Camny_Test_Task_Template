'use client'
import type { FC } from 'react'
import React from 'react'

import { Avatar, Card, Chip, Typography } from '@mui/material'

import { useColorScheme } from '@mui/material/styles'

import { formatDate } from 'date-fns'

import classNames from 'classnames'

import type { StudentType } from '@/types/apps/academyTypes'
import type { SystemMode } from '@/@core/types'

interface IStudentHeader {
  student: StudentType
  serverMode: SystemMode
}

const StudentHeader: FC<IStudentHeader> = ({ student, serverMode }) => {
  const { mode } = useColorScheme()

  return (
    <Card sx={{ padding: '24px', display: 'flex', gap: '40px', alignItems: 'center' }}>
      <Avatar sx={{ width: 100, height: 100 }} src={student.image} />
      <div>
        <Typography
          className={classNames('text-3xl mb-2 font-medium', {
            'text-white': (mode || serverMode) === 'dark',
            'text-black': (mode || serverMode) === 'light'
          })}
        >
          {student.fullName}
        </Typography>
        <div className='flex gap-2 items-center mb-2'>
          <Typography>Registration Date:</Typography>
          <Typography
            display='inline'
            className={classNames('text-lg', {
              'text-white': (mode || serverMode) === 'dark',
              'text-black': (mode || serverMode) === 'light'
            })}
          >
            {formatDate(student.registrationDate, 'MM.dd.yyyy')}
          </Typography>
        </div>
        <Chip
          label='Ongoing Educations Program'
          variant='filled'
          size='small'
          color='success'
          sx={{ borderRadius: '32px' }}
        />
      </div>
    </Card>
  )
}

export default StudentHeader
