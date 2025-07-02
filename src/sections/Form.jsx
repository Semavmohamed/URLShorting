
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from 'axios';
import bgImage from '../assets/bg-shorten-desktop.svg';

export default function Form() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [shortenedUrls, setShortenedUrls] = useState([]);
    const [copied, setCopied] = useState('');

    // تحميل البيانات من localStorage مرة وحدة عند التحميل
    useEffect(() => {
        const saved = localStorage.getItem('shortenedUrls');
        if (saved) {
            setShortenedUrls(JSON.parse(saved));
        }
    }, []);

    const shortenMutation = useMutation({
        mutationFn: async (url) => {
            const res = await axios.post('/api/shorten', { url });
            return res.data;
        },
        onSuccess: (data) => {
            if (data.result_url) {
                const newEntry = { original: url, shortened: data.result_url };
                const updatedList = [newEntry, ...shortenedUrls];
                setShortenedUrls(updatedList);
                localStorage.setItem('shortenedUrls', JSON.stringify(updatedList));
                setUrl('');
                setError('');
            } else if (data.error) {
                setError(`API Error: ${data.error}`);
            } else {
                setError('Unexpected API response');
            }
        },
        onError: (error) => {
            console.error('Shorten API Error:', error);
            setError('Failed to shorten URL');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!url.trim()) {
            setError('Please enter URL');
            return;
        }
        if (!url.trim().startsWith('http')) {
            setError('Please enter a valid URL starting with http or https');
            return;
        }
        shortenMutation.mutate(url.trim());
    };

    const handelCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(text);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 p-4 relative -top-28 ">
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundImage:  url('/public/img/bg-boost-desktop.svg'),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                className=" rounded px-5 py-4 md:py-8 bg-primary my-10 max-w-full">
                <div className="block md:flex">
                    <input
                        placeholder="Shorten a link here..."
                        value={url}
                        type="text"
                        className="bg-white p-3 mb-4 md:mb-0 md:px-4  mr-2 rounded w-[100%] md:w-[85%]"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-second text-white px-6 py-3 rounded font-bold hover:bg-buttonH w-[100%] md:w-fit"
                        disabled={shortenMutation.isLoading}
                    >
                        {shortenMutation.isLoading ? 'Shortening...' : 'Shorten It!'}
                    </button>
                </div>

                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </form>
            <div className="mt-8 space-y-4 block">
                {shortenedUrls.length === 0 && <p className="text-gray-500 text-center">No shortened URLs yet.</p>}

                {shortenedUrls.map(({ original, shortened }, index) => (
                    <div key={index} className="block md:flex justify-between items-center bg-white p-4 rounded shadow">
                        <p className="truncate max-w-xs">{original}</p>
                        <div className="-mx-4 w-[calc(100%+2rem)] h-px bg-gray-300 my-2 md:hidden" />
                        <div>
                            <a href={shortened} target="_blank" rel="noopener noreferrer" className="text-cyan-500 mr-4">{shortened}</a>
                            <button
                                className={`
                                    text-white px-3 py-1 rounded w-[100%] md:w-fit mt-2 md:mt-0
                                    ${copied === shortened ? 'bg-primary' : 'bg-second'}
                                    ${copied === shortened ? 'font-bold' : ''}
                                `}

                                onClick={() => handelCopy(shortened)}
                            >
                                {copied === shortened ? 'Copied!' : 'Copy'} {/* <--- التعديل في نص الزر */}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
