import { Request, Response } from 'express'
import { StudentServices } from './student.service'
import { StudentZodValidationSchema } from './student.zodvalidation'

// import studentValidationSchema from './student.validation'
const createStudent = async (req: Request, res: Response) => {
  try {
    // Joi schema for UserName

    const { student: studentData } = req.body
    //data joi validation
    // const { error, value } = studentValidationSchema.validate(student)
    // console.log({ error }, { value })

    //jod validation

    const zodParseData = StudentZodValidationSchema.parse(studentData)
    console.log(zodParseData)
    const results = await StudentServices.createStudentIntoDB(zodParseData)
    // const results = await StudentServices.createStudentIntoDB(student)
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went worng',
    //     // error: error.details,
    //   })

    res.status(200).json({
      success: true,
      message: 'students create successfully',
      data: results,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went worng',
      error: error,
    })
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsForDB()
    res.status(200).json({
      success: true,
      message: 'students getting  successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentsForDB(studentId)
    res.status(200).json({
      success: true,
      message: 'students getting id  successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudents,
}
