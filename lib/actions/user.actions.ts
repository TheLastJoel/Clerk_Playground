'use server'

import { revalidatePath } from 'next/cache'
import mongoose, { mongo } from 'mongoose'
import { connectToDatabase } from '../database'
import User from '../database/models/user.models'

import { CreateUserParams, UpdateUserParams } from '@/types'

export async function createUser(user: CreateUserParams) {

  try {
    if(process.env.MONGODB_URI){
      mongoose.connect(process.env.MONGODB_URI).catch(error => console.log("THERE WAS AN ERROR" + error))
      const newUser = await User.create(user)
      return JSON.parse(JSON.stringify(newUser))
    }
  } catch (error) {
    console.log("The New User Was Not Created")
  }

}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase()

    const user = await User.findById(userId)

    if (!user) throw new Error('User not found')
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    console.log(error)
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase()

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    console.log(error)
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase()

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId })

    if (!userToDelete) {
      throw new Error('User not found')
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    console.log(error)
  }
}