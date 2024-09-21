import { StudentModel } from '../student.model'
import { Student } from './student.interface'

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllStudentsForDB = async () => {
  const result = await StudentModel.find()
  return result
}
const getSingleStudentsForDB = async (id: string) => {
  const result = await StudentModel.find({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsForDB,
  getSingleStudentsForDB,
}
