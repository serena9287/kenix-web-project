import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [error, setError] = useState(null);
    const [songs, setSongs] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const res = await axios.get(url);
                    setSongs(res.data.data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            };
            fetchData();
        },
        [ url ]
    );

    return { songs, error, loading };
}

export default useFetch;