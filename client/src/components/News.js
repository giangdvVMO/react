import { useContext } from "react"
import { UserContext } from "./UserProvider"

const News = () => {
    const { user, changeUser } = useContext(UserContext)
    return (
        <div>
            {console.log('news', user)}
            Hello ${user.name} news
        </div>
    )
}

export default News;