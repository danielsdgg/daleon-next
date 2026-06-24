// app/api/indexnow/route.ts
import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '27502b85ea3a479f8071f26fd9bfb7ff';
const KEY_LOCATION = 'https://daleondynamics.com/27502b85ea3a479f8071f26fd9bfb7ff.txt';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'URLs array is required' }, { status: 400 });
    }

    console.log('Submitting to IndexNow:', urls);

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'daleondynamics.com',
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
      }),
    });

    const responseText = await response.text();

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urls.length} URL(s)`,
        submitted: urls
      });
    } else {
      return NextResponse.json({
        error: 'IndexNow API error',
        status: response.status,
        details: responseText
      }, { status: response.status });
    }
  } catch (error: unknown) {
    console.error('IndexNow Error:', error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({
      error: 'Server error',
      message
    }, { status: 500 });
  }
}