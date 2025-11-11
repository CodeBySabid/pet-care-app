import axios from "axios";
import { useEffect, useState } from "react"

const AllData = () => {
    const [petdata, setPetdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios('/Pet.json')
            .then(data => setPetdata(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    return { petdata, loading, error }
}

export default AllData