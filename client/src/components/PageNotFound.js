import { BugTwoTone } from "@ant-design/icons"
import "../styles/page-not-found.css"

const PageNotFound = () => {
    return (
        <div className="container-not-found">
            <div className="number">404</div>
            <BugTwoTone color="rgba(0, 37, 0, 0.8)" className="not-found-icon" />
            <h1 className="text-page-not-found">PAGE NOT FOUND</h1>
        </div>
    )
}

export default PageNotFound;