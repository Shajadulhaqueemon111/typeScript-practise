// import { Schema, model, connect } from 'mongoose'

export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type LocalGuardian = {
  name: string
  occupation: string
  address: string
}

export type Student = {
  id: string
  name: UserName
  gender: 'Male' | 'Female'
  dateOfBirth: string
  email: string

  contactNumber: string
  emergencyContactNumber: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string

  gurdian: Guardian

  localGuardean: LocalGuardian
  profilaImage: string

  isActive: 'Active' | 'Blocked'
}
