
import { useParams } from "react-router-dom";

export function ArticlePage(props) {

    let {id} = useParams();

    return(
        // Will display number in URL
        <h1>Article ID {id}</h1>
    )
}