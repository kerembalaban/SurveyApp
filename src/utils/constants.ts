import { IRecentSurveyModel, ISurveyModel } from "../interfaces";

export const surveyQuestions: ISurveyModel[] = [
    { question: "How was your sleep last night?" },
    { question: "How good is your skin condition?" }
];

export const surveyList: IRecentSurveyModel[] = [
    {
        id: 1,
        name: "Survey 1",
        survey: surveyQuestions
    }
]

export const surveyRangeData = Array.from({ length: 10 }, (_, i) => i + 1)