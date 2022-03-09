import React, { createContext, useState, FC, useEffect } from "react";
import { AppContextState } from "./types";
import { getData, storeData } from "../utils/helpers";
import { IRecentSurveyModel } from "../interfaces";

const contextDefaultValues: AppContextState = {
    recents: [],
    addRecent: () => { }
};

const AppContext = createContext<AppContextState>(
    contextDefaultValues
);

const AppProvider: FC = ({ children }) => {
    const [recents, setRecents] = useState<IRecentSurveyModel[]>(contextDefaultValues.recents);

    const addRecent = async (item: IRecentSurveyModel) => {
        let tempRecents = [...recents, item]
        setRecents(tempRecents)
        storeData("recents", tempRecents)
    };


    useEffect(() => {
        const getRecentsFromAsyncStorage = async () => {
            let data = await getData("recents")
            setRecents(data)
        };
        getRecentsFromAsyncStorage()
    }, [])

    return (
        <AppContext.Provider
            value={{
                recents,
                addRecent
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider};