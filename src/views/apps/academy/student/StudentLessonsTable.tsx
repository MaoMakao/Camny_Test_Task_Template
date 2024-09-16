'use client'
import { useMemo, useState, type FC } from 'react'

import type { ColumnDef, FilterFn, Table } from '@tanstack/react-table'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

// Style Imports
import { rankItem } from '@tanstack/match-sorter-utils'

import { Button, Chip, TablePagination } from '@mui/material'
import type { ChipOwnProps } from '@mui/material'

import { formatDate } from 'date-fns'

import tableStyles from '@core/styles/table.module.css'
import type { LessonType } from '@/types/apps/academyTypes'
import { LessonStatuses } from '@/types/apps/academyTypes'

import TablePaginationComponent from '@/components/TablePaginationComponent'
import RequestLessonDialog from '@/components/dialogs/request-lesson-dialog'

interface IStudentLessonsTable {
  lessons: LessonType[]
}

const columnHelper = createColumnHelper<LessonType>()

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({
    itemRank
  })

  return itemRank.passed
}

const getChipColor = (status: LessonStatuses): ChipOwnProps['color'] => {
  switch (status) {
    case LessonStatuses.BOOKED:
      return 'warning'
    case LessonStatuses.CANCELED:
      return 'error'
    case LessonStatuses.COMPLETED:
      return 'success'
    case LessonStatuses.DONE:
      return 'info'
    case LessonStatuses.REQUESTED:
      return 'primary'
    default:
      return 'primary'
  }
}

const StudentLessonsTable: FC<IStudentLessonsTable> = ({ lessons }) => {
  const [open, setOpen] = useState(false)

  const columns = useMemo<ColumnDef<LessonType, any>[]>(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.name}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('date', {
        header: 'Date',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {formatDate(row.original.date, 'MMMM dd, yyyy')}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ row }) => (
          <Chip
            label={`${row.original.status.charAt(0).toUpperCase()}${row.original.status.slice(1)}`}
            variant='tonal'
            size='small'
            color={getChipColor(row.original.status)}
            sx={{ borderRadius: '32px' }}
          />
        ),
        enableSorting: false
      })
    ],
    []
  )

  const table = useReactTable({
    data: lessons as LessonType[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    initialState: {
      pagination: {
        pageSize: 10
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <>
      <Card>
        <div className='p-4 flex flex-row-reverse'>
          <Button onClick={() => setOpen(true)} variant='contained' sx={{ borderRadius: '64px' }} type='submit'>
            Request Lab
          </Button>
        </div>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, i) => (
                    <th key={header.id}>
                      {header.isPlaceholder ? null : (
                        <>
                          <div className={i === 0 ? undefined : '-ml-10 pl-10 border-l-2 border-gray-300'}>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                          </div>
                        </>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {table.getFilteredRowModel().rows.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    No data available
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, table.getState().pagination.pageSize)
                  .map(row => {
                    return (
                      <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                          <td width={100} key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    )
                  })}
              </tbody>
            )}
          </table>
        </div>
        <TablePagination
          component={() => <TablePaginationComponent table={table as Table<unknown>} />}
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
        />
      </Card>
      <RequestLessonDialog open={open} setOpen={setOpen} />
    </>
  )
}

export default StudentLessonsTable
