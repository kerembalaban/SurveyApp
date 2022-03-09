import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

const HomeScreen: FC = () => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Please click button to start survey</Text>
        </View>
    )
}

export default HomeScreen