// Type Imports
import type { ThemeColor } from '@core/types'

export type Course = {
  id: number
  image: string
  user: string
  tutorImg: string
  completedTasks: number
  totalTasks: number
  userCount: number
  note: number
  view: number
  time: string
  logo: string
  courseTitle: string
  color: ThemeColor
  desc: string
  tags: string
  rating: number
  ratingCount: number
}

export type CourseDetails = {
  title: string
  about: string
  instructor: string
  instructorAvatar: string
  instructorPosition: string
  skillLevel: string
  totalLectures: number
  totalStudents: number
  isCaptions: boolean
  language: string
  length: string
  content: CourseContent[]
  description: string[]
}

export type CourseContent = {
  title: string
  id: string
  topics: CourseTopic[]
}

export type CourseTopic = {
  title: string
  time: string
  isCompleted: boolean
}

export enum LessonStatuses {
  REQUESTED = 'requested',
  BOOKED = 'booked',
  DONE = 'done',
  COMPLETED = 'completed',
  CANCELED = 'canceled'
}

export type LessonType = {
  id: number
  name: string
  date: string
  status: LessonStatuses
}

export type StudentType = {
  fullName: string
  registrationDate: string
  image: string
  lessons: LessonType[]
}

export type AcademyType = {
  courses: Course[]
  courseDetails: CourseDetails
  student: StudentType
}
