import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { HomeScreen, Survey } from "../pages";
import { HomeStackParams } from "../types/navigations";

const Stack = createNativeStackNavigator<HomeStackParams>()

const HomeNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: "Home"
            }}/>
            <Stack.Screen name="Survey" component={Survey} options={{
                title: "Fill Out Survey"
            }}/>
        </Stack.Navigator>
    )
}

export default HomeNavigator