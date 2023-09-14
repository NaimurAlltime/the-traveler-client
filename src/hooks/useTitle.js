import { useEffect } from "react";

const useTitle = title => {
    useEffect( () => {
        document.title = `The Traveler | ${title}`
    } , [title])
}

export default useTitle;