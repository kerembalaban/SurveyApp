import { ISurveyModel } from "../interfaces";

export const surveyData: ISurveyModel[] = [
    { question: "How was your sleep last night" },
    { question: "How good is your skin condition" }
];

export const surveyRangeData = Array.from({ length: 10 }, (_, i) => i + 1)