import { NextResponse } from 'next/server';
// TODO: Move to Mongo
import { projects } from '@/constants/db';

export async function GET() {
  return NextResponse.json({ data: projects, ok: true }, { status: 200 });
}
