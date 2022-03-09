import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { RecentSurveys, Survey } from "../pages";
import { SavedSurveysStackParams } from "../types/navigations";

const Stack = createNativeStackNavigator<SavedSurveysStackParams>()

const RecentSurveysNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SavedSurveys" component={RecentSurveys} options={{
                title: "Saved Surveys"
            }} />
            <Stack.Screen name="Survey" component={Survey} />
        </Stack.Navigator>
    )
}

export default RecentSurveysNavigator