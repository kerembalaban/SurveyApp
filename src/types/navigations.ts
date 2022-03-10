import { IRecentSurveyModel } from "../interfaces";
import IQuestionModel from "../interfaces/surveyModel";

// these values used to define screen names at Home navigation stack
export type HomeStackParams = {
    Home: undefined;
    Survey: { survey?: IRecentSurveyModel, editable: boolean };
};

export interface RootStackParamList
    extends HomeStackParams { }

    // this is used for seeing params on global
declare global {
    namespace ReactNavigation {
        interface RootParamList
            extends RootStackParamList { }
    }
}
