export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST method is allowed' });
    }

    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'Missing URL' });
    }

    try {
        const encodedUrl = encodeURIComponent(url.trim());
        console.log('Sending POST to CleanURI with body:', `url=${encodedUrl}`);

        const response = await fetch('https://cleanuri.com/api/v1/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `url=${encodedUrl}`,
        });
        console.log('CleanURI HTTP Status:', response.status); 

        const data = await response.json();

        console.log('✅ CleanURI API response:', data); // ← مهم جداً

        if (!data.result_url) {
            return res.status(500).json({ error: 'Invalid response from CleanURI', raw: data });
        }

        return res.status(200).json({ result_url: data.result_url });
    } catch (error) {
        console.error('❌ Server error:', error);
        return res.status(500).json({ error: 'Server error', details: error.message });
    }
}
// داخل دالة handler في ملف API الخاص بـ Vercel (مثلاً pages/api/shorten.js)
// داخل ملف API route (مثلاً pages/api/shorten.js)
