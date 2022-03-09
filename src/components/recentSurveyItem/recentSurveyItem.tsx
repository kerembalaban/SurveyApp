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
            style={styles.container}
            onPress={() => onPress(item)}>
            {/* Recent Survey Information */}
            <View style={styles.information}>
                <Text style={styles.title}>{`Survey No: ${item.id}`}</Text>
                <Text style={styles.date}>{item.createdAt.toDateString()}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecentSurveyItem