import { IRecentSurveyModel } from "../interfaces";
import IQuestionModel from "../interfaces/surveyModel";

export type BottomTabParams = {
    HomeStack: undefined;
    SavedSurveyStack: undefined;
};

export type HomeStackParams = {
    Home: undefined;
    Survey: { survey?: IRecentSurveyModel, editable: boolean };
};

export type SavedSurveysStackParams = {
    SavedSurveys: undefined;
    Survey: { survey?: IRecentSurveyModel, editable: boolean};
};

export interface RootStackParamList
    extends HomeStackParams, SavedSurveysStackParams { }

declare global {
    namespace ReactNavigation {
        interface RootParamList
            extends RootStackParamList { }
    }
}
