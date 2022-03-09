import ISurveyModel from "../interfaces/surveyModel";

export type BottomTabParams = {
    HomeStack: undefined;
    SavedSurveyStack: undefined;
};

export type HomeStackParams = {
    Home: undefined;
    Survey: { survey: ISurveyModel[] };
};

export type SavedSurveysStackParams = {
    SavedSurveys: undefined;
    Survey: { survey: ISurveyModel[] };
};

export interface RootStackParamList
    extends HomeStackParams, SavedSurveysStackParams { }

declare global {
    namespace ReactNavigation {
        interface RootParamList
            extends RootStackParamList { }
    }
}
