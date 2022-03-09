import { useNavigation } from '@react-navigation/native'
import React, { FC, useContext } from 'react'
import { View } from 'react-native';
import { ListComponent } from '../../components';
import { AppContext } from '../../contextApi';
import { IRecentSurveyModel } from '../../interfaces';
import styles from './recentSurveys.style';

const RecentSurveys: FC = () => {
    const { recents } = useContext(AppContext);
    const navigation = useNavigation()

    const handleOnItemPress = (item: IRecentSurveyModel) => {
        navigation.navigate("Survey", { survey: item.survey })
    }

    return (
        <View style={styles.container}>
            <ListComponent 
                data={recents} 
                onPress={handleOnItemPress}/>
        </View>
    )
}

export default RecentSurveys