import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Path to requests.json in public folder
    const filePath = path.join(process.cwd(), 'public', 'requests', 'requests.json');

    // Read existing requests
    let requests = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      requests = JSON.parse(fileContent);
    }

    // Add new request
    requests.push(data);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(requests, null, 2));

    return NextResponse.json({ success: true, message: 'Request saved successfully' });
  } catch (error) {
    console.error('Error saving request:', error);
    return NextResponse.json({ success: false, error: 'Failed to save request' }, { status: 500 });
  }
}
