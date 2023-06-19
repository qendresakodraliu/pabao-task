import { Link, useParams } from "react-router-dom"
import Header from "../components/Header"
const SingleServicePage = ()=>{
    const { id } = useParams();
    return(
        <div>
            <Header></Header>
            <Link to="/">Back</Link>
        </div>
        
    )
}
export default SingleServicePage