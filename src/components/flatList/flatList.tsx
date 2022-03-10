import React from 'react'
import { FlatList } from 'react-native';
import IRecentSurveyModel from '../../interfaces/recentSurveyModel';
import RecentSurveyItem from '../recentSurveyItem/recentSurveyItem';
import styles from './flatList-styles'

type Props = {
    data: IRecentSurveyModel[],
    onScroll?(): void,
    onPress(item: IRecentSurveyModel): void
};

const ListComponent = ({ data, onScroll, onPress }: Props) => {
    return (
        <FlatList
            onScroll={onScroll}
            contentContainerStyle={styles.flatListContainer}
            data={data}
            renderItem={({ item }) => <RecentSurveyItem item={item} onPress={onPress} />}
            keyExtractor={(item) => item.id} />

    )
}

export default ListComponent