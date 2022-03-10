import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { HomeScreen, Survey } from "../pages";
import { HomeStackParams } from "../types/navigations";

const Stack = createNativeStackNavigator<HomeStackParams>()

const HomeNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Survey" component={Survey}
                options={({ route }) => ({ title: route.params.survey?.name, headerShown: true })} />
        </Stack.Navigator>
    )
}

export default HomeNavigator