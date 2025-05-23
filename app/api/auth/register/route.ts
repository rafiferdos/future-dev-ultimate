import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would connect to your actual backend
    // This is just a placeholder example
    const response = await fetch('https://your-backend-api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      return NextResponse.json(
        { message: data.message || 'Registration failed' },
        { status: response.status }
      );
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}