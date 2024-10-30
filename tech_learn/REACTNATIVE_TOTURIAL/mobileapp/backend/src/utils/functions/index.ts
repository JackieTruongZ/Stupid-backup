import crypto from 'crypto';


export function generateRandomString(length: number): string {
    const buffer = crypto.randomBytes(length);
    return buffer.toString('hex');
}