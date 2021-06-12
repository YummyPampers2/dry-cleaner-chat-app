import Ably from "ably/promises";
import { useEffect } from 'react';

const ably = new Ably.Realtime.Promise({ authUrl: '/api/createTokenRequest' });

export default async function handler(req, res) {
    const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    res.status(200).json(tokenRequestData);
};

