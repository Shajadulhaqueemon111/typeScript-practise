import { Schema, model } from 'mongoose'

import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './students/student.interface'

const UsrerSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [
      20,
      'FirstName is longer than the maximum allowed length (20).',
    ],
  },
  middleName: {
    type: String,
    required: [true, 'Middle name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],

    trim: true,
  },
})

const guirdianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
})

const localGuardeanSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: UsrerSchema,
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: String, required: [true, 'Date of birth is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  emergencyContactNumber: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: [true, 'Blood group is required'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  gurdian: guirdianSchema,
  localGuardean: localGuardeanSchema,
  profilaImage: { type: String },
  isActive: {
    type: String,
    enum: ['Active', 'Blocked'],
    required: [true, 'Status is required'],
  },
})

export const StudentModel = model<Student>('Student', studentSchema)
