import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { FC, useContext, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { FilledButton, Ratings, TextButton } from '../../components'
import { AppContext } from '../../contextApi'
import { IRecentSurveyModel, ISurveyModel } from '../../interfaces'
import { SavedSurveysStackParams } from '../../types/navigations'
import { surveyData } from '../../utils/constants'
import styles from './survey.style'

type surveyRouteType = RouteProp<SavedSurveysStackParams>

const Survey: FC = () => {
    const navigation = useNavigation()
    const { addRecent } = useContext(AppContext)
    const route = useRoute<surveyRouteType>()
    const questions = route.params?.survey ? route.params?.survey : surveyData
    const [index, setIndex] = useState<number>(0)
    const [survey, setSurvey] = useState<ISurveyModel>(questions && {...questions[index]})

    const handleOnNextButton = () => {
        let newIndex = index + 1
        setIndex(newIndex)
        setSurvey(questions && questions[newIndex])
    }
 
    const handleOnBackButton = () => {
        let newIndex = index - 1
        setIndex(newIndex)
        setSurvey(questions && questions[newIndex])
    }

    const handleOnRate = (value: number) => {
        let tempSurvey = questions && questions[index]
        survey.answer = value

        setSurvey({...tempSurvey})
    }

    const handleOnSaveSurvey = () => {
        let recentSurvey: IRecentSurveyModel = {
            id: "1",
            survey: questions,
            createdAt: new Date()
        }
        addRecent(recentSurvey)

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
        <View style={styles.container}>
            <Text style={styles.question}>{survey.question}</Text>

            {/*  */}
            <View style={styles.answerContainer}>
                {/* Rating component */}
                <Ratings onPress={handleOnRate} selectedValue={survey.answer}/>

                <View style={styles.rangeInfo}>
                    <Text style={styles.rangeInfoTitle}>Bad</Text>
                    <Text style={styles.rangeInfoTitle}>Good</Text>
                </View>
            </View>

            {/* Buttons for prev & nex questions */}
            <View style={styles.buttonGroup}>
                <TextButton title='Prev' onPress={handleOnBackButton} disabled={index == 0} />
                <TextButton title='Next' onPress={handleOnNextButton} disabled={index + 1 == questions?.length} />
            </View>

            <FilledButton title='Save' onPress={handleOnSaveSurvey}/>
        </View>
    )
}

export default Survey