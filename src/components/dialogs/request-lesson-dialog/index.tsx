// MUI Imports
import { useMemo, useState } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import { FormGroup, InputAdornment } from '@mui/material'

import CustomTextField from '@core/components/mui/TextField'
import DialogCloseButton from '../DialogCloseButton'
import Search from '@/@core/svg/Search'

type RequestLessonDialogProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const mockedLessons = [
  {
    title: 'Immunology Fundamentals',
    id: 1
  },
  {
    title: 'Hematology',
    id: 2
  },
  {
    title: 'Orthopedics and Musculoskeletar Health',
    id: 3
  },
  {
    title: 'Obstetrics and Gynecology',
    id: 4
  },
  {
    title: 'Cardiovascular System Studies',
    id: 5
  },
  {
    title: 'Renal Physiology',
    id: 6
  },
  {
    title: 'Endocrinology Basics',
    id: 7
  },
  {
    title: 'Advanced Cardiopulmonary Systems',
    id: 8
  }
]

const RequestLessonDialog = ({ open, setOpen }: RequestLessonDialogProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [searchValue, setSearchValue] = useState<string>('')

  const handleClose = () => {
    setOpen(false)
  }

  const filteredLessons = useMemo(() => {
    return !!searchValue
      ? mockedLessons.filter(lesson => lesson.title.toLowerCase().includes(searchValue.toLowerCase()))
      : mockedLessons
  }, [searchValue])

  return (
    <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}>
      <DialogCloseButton onClick={() => setOpen(false)} disableRipple>
        <i className='tabler-x' />
      </DialogCloseButton>
      <DialogTitle variant='h4' className='flex flex-col gap-2 sm:pbs-16 sm:pbe-6 sm:pli-16'>
        Request New Lesson
        <Typography component='span' className='flex flex-col text-sm'>
          Please select the lesson you want to request for the student
        </Typography>
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent className='overflow-visible flex flex-col gap-6 pbs-0 sm:pli-16 min-h-[482px]'>
          <CustomTextField
            variant='outlined'
            fullWidth
            placeholder='Search'
            onChange={e => setSearchValue(e.target.value)}
            value={searchValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              )
            }}
          />
          {!!filteredLessons?.length && (
            <Typography variant='h5' className='min-is-[225px]'>
              {filteredLessons?.length} options
            </Typography>
          )}
          <div className='overflow-x-auto'>
            <FormGroup className='flex-col justify-end gap-2'>
              {!!filteredLessons?.length ? (
                filteredLessons.map(lesson => (
                  <FormControlLabel
                    key={lesson.id}
                    className='mie-0'
                    control={
                      <Checkbox
                        onChange={() =>
                          setSelectedItems(
                            selectedItems.includes(lesson.id)
                              ? selectedItems.filter(item => item !== lesson.id)
                              : [...selectedItems, lesson.id]
                          )
                        }
                        checked={selectedItems.includes(lesson.id)}
                      />
                    }
                    label={<span className='font-bold'>{lesson.title}</span>}
                  />
                ))
              ) : (
                <Typography className='text-center'>No search results</Typography>
              )}
            </FormGroup>
          </div>
        </DialogContent>
        <DialogActions className='justify-end pbs-0 sm:pbe-16 sm:pli-16'>
          <Button sx={{ borderRadius: '32px' }} variant='tonal' type='reset' color='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            sx={{ borderRadius: '32px' }}
            variant='contained'
            type='submit'
            onClick={() => {
              setSelectedItems([])
              setSearchValue('')
              handleClose()
            }}
          >
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default RequestLessonDialog
