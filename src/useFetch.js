import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, seData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {

        //To abort fetch
        const abortCont = new AbortController()
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Cannot Fetch the data. Please try again')
                    }
                    return res.json();
                })
                .then(data => {
                    seData(data)
                    setIsLoading(false)
                    setErr(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('Fetch aborted');
                    }else{
                        setErr(err.message)
                        setIsLoading(false)
                    }
                    // console.log(err.message)
                })
        }, 1000);

        return () => abortCont.abort()
    }, [url])

    return { data, isLoading, err }

}
export default useFetch;