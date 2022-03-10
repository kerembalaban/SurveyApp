import { useNavigation } from '@react-navigation/native'
import React, { FC, useContext } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { NewSurveyItem, RecentSurveyItem } from '../../components'
import { AppContext } from '../../contextApi'
import { IRecentSurveyModel } from '../../interfaces'
import { surveyList } from '../../utils/constants'
import { storeData } from '../../utils/helpers'
import styles from './homeScreen.style'

const HomeScreen: FC = () => {
    const { recents } = useContext(AppContext)
    const navigation = useNavigation()

    const handleOnOpenSurvey = (item: IRecentSurveyModel) => {
        navigation.navigate("Survey", { survey: { ...item }, editable: true })
    }

    const handleOnUpdateSurvey = (item: IRecentSurveyModel) => {
        navigation.navigate("Survey", { survey: { ...item }, editable: false })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>Hi! Welcome</Text>
                    <Text style={styles.welcomeSubtext}>Medical Survey App</Text>
                </View>

                {/* if there is a survey list, all surveys will be listed */}
                {
                    surveyList.length > 0 &&
                    <View style={styles.surveyItemContainer}>
                        <Text style={styles.title}>My Surveys</Text>
                        {
                            surveyList.slice().map(survey => {
                                return <NewSurveyItem item={survey} onPress={handleOnOpenSurvey} />
                            })
                        }

                    </View>
                }

                {/* if started survey saved before, will be listed */}
                {
                    recents.length > 0 &&
                    <View style={styles.surveyItemContainer}>
                        <Text style={styles.title}>Started Surveys</Text>
                        {
                            recents.map(survey => {
                                return <RecentSurveyItem item={survey} onPress={handleOnUpdateSurvey} />
                            })
                        }
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen