import { z } from 'zod'

const UserNameSchema = z.object({
  firstName: z
    .string()
    .max(20, 'FirstName is longer than the maximum allowed length (20).'),

  middleName: z.string(),
  lastName: z.string(),
})

const GuardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
})

const LocalGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  address: z.string(),
})

const StudentZodValidationSchema = z.object({
  id: z.string(),
  name: UserNameSchema,
  gender: z.enum(['Male', 'Female']),
  dateOfBirth: z.string(),
  email: z
    .string()
    .nonempty('Email is required')
    .email('Invalid email address'),
  contactNumber: z.string(),
  emergencyContactNumber: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  gurdian: GuardianSchema,
  localGuardean: LocalGuardianSchema,
  profilaImage: z.string(),
  isActive: z.enum(['Active', 'Blocked']),
})

export { StudentZodValidationSchema }
