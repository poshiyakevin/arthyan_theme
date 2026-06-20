import { NextResponse } from 'next/server'
import { users } from '@/app/api/login/users'
import type { UserTable } from '@/app/api/login/users'

export async function POST(req: Request) {
    try {
        const { username, email, password } = await req.json()

        // Basic validation
        if (!username || !email || !password) {
            return NextResponse.json(
                { message: ['Missing required fields'] },
                { status: 400, statusText: 'Bad Request' }
            )
        }

        // Check if user already exists
        const userExists = users.some(u => u.email === email)
        if (userExists) {
            return NextResponse.json(
                { message: ['Email is already registered'] },
                { status: 409, statusText: 'Conflict' }
            )
        }

        // Create new user (mock)
        const newUser: UserTable = {
            id: users.length + 1,
            name: username,
            email,
            password,
            image: '/images/avatars/1.png'
        }

        // Add to mock array
        users.push(newUser)

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _, ...filteredUserData } = newUser

        return NextResponse.json(
            {
                message: 'Account created successfully',
                user: filteredUserData
            },
            { status: 201, statusText: 'Created' }
        )
    } catch (error) {
        return NextResponse.json(
            { message: ['Internal Server Error'] },
            { status: 500, statusText: 'Server Error' }
        )
    }
}
