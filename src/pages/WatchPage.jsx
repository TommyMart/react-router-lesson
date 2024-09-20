
import { useSearchParams } from "react-router-dom";

export function WatchPage(props) {
    let [searchParamsObj, setSearchParamsObj] = useSearchParams();

    return(
        <h1>Watch video ID {searchParamsObj.get("video")}</h1>
    )
}