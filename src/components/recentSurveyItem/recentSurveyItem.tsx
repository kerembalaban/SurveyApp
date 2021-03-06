import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IRecentSurveyModel } from '../../interfaces';
import styles from './recentSurveyItem.styles'

type Props = {
    item: IRecentSurveyModel,
    onPress(item: IRecentSurveyModel): void
};

const RecentSurveyItem = ({ item, onPress }: Props) => {

    return (
        <TouchableOpacity
            key={item.id}
            style={styles.surveyContainer}
            onPress={() => onPress(item)}>
            <Text style={styles.surveyText}>{item.name}</Text>
            <Text style={styles.surveySubtext}>{item.createdAt?.toDateString()}</Text>
            <Text style={styles.surveyBottomText}>Please click to see answers</Text>
        </TouchableOpacity>
    )
}

export default RecentSurveyItem