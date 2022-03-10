import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { FilledButton, Ratings, TextButton } from '../../components'
import { AppContext } from '../../contextApi'
import { IRecentSurveyModel, ISurveyModel } from '../../interfaces'
import { SavedSurveysStackParams } from '../../types/navigations'
import { surveyQuestions } from '../../utils/constants'
import styles from './survey.style'

type surveyRouteType = RouteProp<SavedSurveysStackParams>

const Survey: FC = () => {
    const navigation = useNavigation()
    const { addRecent } = useContext(AppContext)
    const route = useRoute<surveyRouteType>()
    const { survey, editable } = route.params!
    const [selectedSurvey, setSelectedSurvey] = useState<IRecentSurveyModel>(survey!)
    const [index, setIndex] = useState<number>(0)
    const [questionModel, setQuestionModel] = useState<ISurveyModel>()
    const [answers, setAnswers] = useState<number[]>([])

    useEffect(() => {
        setQuestionModel(selectedSurvey.survey[index])
    }, [index])

    const handleOnNextButton = () => {
        setIndex((i) => i + 1)
    }

    const handleOnBackButton = () => {
        setIndex((i) => i - 1)
    }

    const handleOnRate = (value: number) => {
        answers[index] = value
        setAnswers([...answers])
    }

    const handleOnSaveSurvey = () => {
        let surveyModel = {...selectedSurvey}
        surveyModel.createdAt = new Date()
        surveyModel.survey.map((item,index) => item.answer = answers[index])
        
        addRecent(surveyModel)
        Alert.alert(
            "Survey Saved",
            "Thank you for your participation in the survey.",
            [
                {
                    text: "Ok",
                    onPress: () => navigation.goBack()
                },
            ]
        );
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>

                {/* Buttons for prev & nex questions */}
                <View style={styles.buttonGroup}>
                    <TextButton title='Prev' onPress={handleOnBackButton} disabled={index == 0} />
                    <Text style={styles.count}>{`${index + 1} / ${selectedSurvey.survey.length}`}</Text>
                    <TextButton title='Next' onPress={handleOnNextButton} disabled={index + 1 == selectedSurvey.survey.length} />
                </View>

                <Text style={styles.question}>{questionModel?.question}</Text>

                {/*  */}
                <View style={styles.answerContainer}>
                    {/* Rating component */}
                    <Ratings 
                        onPress={handleOnRate} 
                        selectedValue={editable ? answers[index] : selectedSurvey.survey[index].answer}
                        disabled={!editable} />

                    <View style={styles.rangeInfo}>
                        <Text style={styles.rangeInfoTitle}>Bad</Text>
                        <Text style={styles.rangeInfoTitle}>Good</Text>
                    </View>
                </View>
            </View>

            {editable && <FilledButton title='Save' onPress={handleOnSaveSurvey} disabled={answers.length != selectedSurvey.survey.length}/>}
            
        </View>
    )
}

export default Survey