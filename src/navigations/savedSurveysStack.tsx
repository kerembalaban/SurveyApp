import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { SavedSurveys, Survey } from "../pages";
import { SavedSurveysStackParams } from "../types/navigations";

const Stack = createNativeStackNavigator<SavedSurveysStackParams>()

const SavedSurveysNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SavedSurveys" component={SavedSurveys} options={{
                title: "Saved Surveys"
            }} />
            <Stack.Screen name="Survey" component={Survey}
                options={({ route }) => ({ title: route.params.survey.createdAt.toDateString() })} />
        </Stack.Navigator>
    )
}

export default SavedSurveysNavigator