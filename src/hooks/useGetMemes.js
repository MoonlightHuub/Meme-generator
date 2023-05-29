import { useEffect, useState } from 'react';
import { getMemes } from "../services/memesApi"

export const useGetMemes = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getMemes().then((memes) => setData(memes.data.memes))
    }, [])

    const memes = data.map(e => ({
        id: e.id,
        title: e.name,
        image: e.url,
        width: e.width,
        height: e.height
    }));

    return { memes }
}