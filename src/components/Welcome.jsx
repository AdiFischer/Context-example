import { useContext } from "react"
import { UserContext } from "../App"

export default function Welcome() {
    const {user} = useContext(UserContext)// connect me to super-suit but just for user in Welcome
    return (
        <section>
            <h2>welcome {user || 'Guest'}</h2>
    
        </section>
    )
}