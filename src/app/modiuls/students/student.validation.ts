import Joi from 'joi'

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]+$/) // Ensures the first letter is uppercase and the rest are lowercase
    .messages({
      'string.base': 'First name should be a string',
      'string.empty': 'First name is required',
      'string.max': 'First name is longer than the maximum allowed length (20)',
      'string.pattern.base': 'First name must start with a capital letter',
    }),

  middleName: Joi.string().trim().required().messages({
    'string.empty': 'Middle name is required',
  }),

  lastName: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z]+$/) // Allows only alphabetic characters
    .messages({
      'string.base': 'Last name should be a string',
      'string.empty': 'Last name is required',
      'string.pattern.base':
        'Last name must only contain alphabetic characters',
    }),
})

// Joi schema for Guardian
const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': "Father's name is required",
  }),

  fatherOccupation: Joi.string().required().messages({
    'string.empty': "Father's occupation is required",
  }),

  fatherContactNo: Joi.string().required().messages({
    'string.empty': "Father's contact number is required",
  }),

  motherName: Joi.string().required().messages({
    'string.empty': "Mother's name is required",
  }),

  motherOccupation: Joi.string().required().messages({
    'string.empty': "Mother's occupation is required",
  }),

  motherContactNo: Joi.string().required().messages({
    'string.empty': "Mother's contact number is required",
  }),
})

// Joi schema for LocalGuardian
const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': "Local guardian's name is required",
  }),

  occupation: Joi.string().required().messages({
    'string.empty': "Local guardian's occupation is required",
  }),

  address: Joi.string().required().messages({
    'string.empty': "Local guardian's address is required",
  }),
})

// Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string(),

  name: userNameSchema,

  gender: Joi.string().valid('Male', 'Female').required().messages({
    'any.only': 'Gender must be either Male or Female',
    'string.empty': 'Gender is required',
  }),

  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of birth is required',
  }),

  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email is required',
  }),

  contactNumber: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),

  emergencyContactNumber: Joi.string().required().messages({
    'string.empty': 'Emergency contact number is required',
  }),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required()
    .messages({
      'any.only':
        'Blood group must be a valid type (A+, A-, B+, B-, AB+, AB-, O+, O-)',
      'string.empty': 'Blood group is required',
    }),

  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present address is required',
  }),

  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent address is required',
  }),

  gurdian: guardianSchema,

  localGuardean: localGuardianSchema,

  profilaImage: Joi.string(),

  isActive: Joi.string().valid('Active', 'Blocked').required().messages({
    'any.only': 'Status must be either Active or Blocked',
    'string.empty': 'Status is required',
  }),
})

export default studentValidationSchema
