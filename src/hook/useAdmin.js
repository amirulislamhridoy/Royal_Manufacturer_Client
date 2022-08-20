import { useEffect, useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [admining, setAdmining] = useState(true)

    useEffect( () => {
        const email = user?.email
        if(email){
            fetch(`https://royal-manufacturer.herokuapp.com/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
                setAdmining(false)
            })
        }
    }, [user])
    return [admin, admining]
}
export default useAdmin