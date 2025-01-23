import { writeClient } from '@/sanity/lib/client-config';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create document in Sanity
    const result = await writeClient.create({
      _type: 'contactFormSubmission',
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Form submitted successfully', result },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 