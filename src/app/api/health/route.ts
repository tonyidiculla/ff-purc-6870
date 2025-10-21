import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    service: 'ff-purc',
    status: 'healthy',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    port: 6870,
    description: 'Furfield Purchasing & Procurement Microservice'
  })
}