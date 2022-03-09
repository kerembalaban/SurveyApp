import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { BottomTabParams } from "../types/navigations";
import HomeNavigator from "./homeStack";
import SavedSurveysNavigator from "./recentSurveysStack";

const BottomTab = createBottomTabNavigator<BottomTabParams>()

const BottomTabNavigator: FC = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false
        }}>
            <BottomTab.Screen name="HomeStack" component={HomeNavigator} options={{
                title: "My Favorites"
            }}/>
            <BottomTab.Screen name="SavedSurveyStack" component={SavedSurveysNavigator} options={{
                title: "Search"
            }}/>
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator