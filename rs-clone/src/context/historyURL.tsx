import React from 'react'
interface IURL {
    url: boolean,
    setUrl?: () => void;
}

const defaultUrl = {
    url: false,
}
let urlContext = React.createContext<IURL>(defaultUrl);
export default urlContext;
export {defaultUrl}