import ISurveyModel from "./surveyModel"

interface IRecentSurveyModel {
    id: string
    survey: ISurveyModel[]
    createdAt: Date
}

export default IRecentSurveyModel