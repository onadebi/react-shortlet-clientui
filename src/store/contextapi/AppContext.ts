import React from "react";
import agent from "../../api/agent";


export const AppPath = () => {
    const _mylocation = '/';
    return _mylocation;
}

export const appStore = {
    myOwn: 'Hello world',
    appName: 'ShortLet NG',
    location: AppPath(),
    apiCalls: agent
}


export const AppContext = React.createContext(appStore);

export const useAppStore = () => React.useContext(AppContext);

