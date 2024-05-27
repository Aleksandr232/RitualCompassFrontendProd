import { serialize } from 'cookie'
import type { NextApiResponse } from 'next';

export function setTokenCookie(res: NextApiResponse, token: string) {
  const cookie = serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // использовать только по HTTPS
    sameSite: 'strict', // повысить защиту от CSRF атак
    path: '/',
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // срок действия на 7 дней
  });

  res.setHeader('Set-Cookie', cookie);
}
