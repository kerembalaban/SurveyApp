import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { IRecentSurveyModel } from '../../interfaces';
import styles from './newSurveyItem.styles';

type Props = {
    item: IRecentSurveyModel,
    onPress(item: IRecentSurveyModel): void
};

const NewSurveyItem = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity
            key={item.id}
            style={styles.surveyContainer}
            onPress={() => onPress(item)}>
            <Text style={styles.surveyText}>{item.name}</Text>
            <Text style={styles.surveySubtext}>{`0 / ${item.survey.length}`}</Text>
            <Text style={styles.surveyBottomText}>Please click to start</Text>
        </TouchableOpacity>
    )
}

export default NewSurveyItem


