import { NextResponse } from 'next/server';
// TODO: Move to Mongo
import { socials } from '@/constants/db';

export async function GET() {
  return NextResponse.json({ data: socials, ok: true });
}
