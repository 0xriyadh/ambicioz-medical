import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mahadihassanriyadh/images/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return {
        services
    }
}

export default useServices;