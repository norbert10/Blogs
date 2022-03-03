import { useState, useEffect } from "react"
const useFetch = (url) => {
    const [data, seData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                    // console.log(err.message)
                    setErr(err.message)
                    setIsLoading(false)
                })
        }, 1000)
    }, [url])

    return { data, isLoading, err }

}
export default useFetch;