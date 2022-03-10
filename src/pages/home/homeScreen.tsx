import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { FilledButton } from '../../components'
import styles from './homeScreen.style'

const HomeScreen: FC = () => {
    const navigation = useNavigation()

    const handleOnOpenSurvey = () => {
        navigation.navigate("Survey", { survey: null })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please click button to start survey</Text>
            <FilledButton title='Open Survey' onPress={handleOnOpenSurvey} />
        </View>
    )
}

export default HomeScreen