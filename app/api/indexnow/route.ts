// app/api/indexnow/route.ts
import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '27502b85ea3a479f8071f26fd9bfb7ff';
const KEY_LOCATION = 'https://daleondynamics.com/27502b85ea3a479f8071f26fd9bfb7ff.txt';

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'Please provide an array of URLs' }, { status: 400 });
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'daleondynamics.com',
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urls.length} URL(s) to IndexNow`
      });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to submit to IndexNow' }, { status: 500 });
  }
}