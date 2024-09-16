import { Breadcrumbs, Grid, Typography } from '@mui/material'

import { getAcademyData } from '@/app/server/actions'

import StudentHeader from '@views/apps/academy/student/StudentHeader'
import PeopleOutlined from '@core/svg/PeopleOutlined'
import PersonOutlined from '@core/svg/PersonOutlined'
import StudentContentContainer from '@/views/apps/academy/student/StudentContentContainer'
import { getServerMode } from '@/@core/utils/serverHelpers'

const Student = async () => {
  const mode = getServerMode()
  const { student } = await getAcademyData()

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography className='text-primary flex items-center gap-1'>
            <PeopleOutlined />
            Students
          </Typography>
          <Typography className='flex items-center gap-1'>
            <PersonOutlined />
            {student.fullName}
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <StudentHeader serverMode={mode} student={student} />
      </Grid>
      <Grid item xs={12}>
        <StudentContentContainer student={student} />
      </Grid>
    </Grid>
  )
}

export default Student
