import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Mock user data - replace with actual API call
    const userData = {
      id: params.id,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
    };

    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user data' },
      { status: 500 }
    );
  }
}