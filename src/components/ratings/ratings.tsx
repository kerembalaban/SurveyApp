import React from 'react'
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import IRecentSurveyModel from '../../interfaces/recentSurveyModel';
import { surveyRangeData } from '../../utils/constants';
import TextButton from '../buttons/textButton';
import RecentSurveyItem from '../recentSurveyItem/recentSurveyItem';
import styles from './ratings.style';


type Props = {
    onPress(item: number): void,
    selectedValue?: number,
    disabled: boolean
};

const Ratings = ({ selectedValue, onPress, disabled }: Props) => {
    return (
        <View style={styles.container}>
            {
                surveyRangeData.map(value => {
                    return (
                        <TouchableOpacity
                            key={value}
                            disabled={disabled}
                            style={selectedValue && value <= selectedValue ? styles.selectedButton : styles.button}
                            onPress={() => onPress(value)}>
                            <Text style={selectedValue && value <= selectedValue ? styles.selectedText : styles.text}>{String(value)}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>

    )
}

export default Ratings


