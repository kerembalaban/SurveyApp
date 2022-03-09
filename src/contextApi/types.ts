import { IRecentSurveyModel } from "../interfaces";

export type AppContextState = {
    recents: IRecentSurveyModel[],
    addRecent: (item: IRecentSurveyModel) => void
};