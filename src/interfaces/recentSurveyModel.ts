import ISurveyModel from "./surveyModel"
import IQuestionModel from "./surveyModel"

interface IRecentSurveyModel {
    id: number
    name: string
    survey: ISurveyModel[]
    createdAt?: Date
}

export default IRecentSurveyModel