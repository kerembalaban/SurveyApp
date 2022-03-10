import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
    surveyContainer: {
        marginHorizontal: 24,
        marginTop: 8,
        padding: 16,
        height: 120,
        backgroundColor: Colors.blue,
        borderRadius: 20
    },
    surveyText: {
        fontSize: 20,
        fontFamily: 'NunitoSans-Bold',
        color: Colors.backgroundSecondary
    },
    surveySubtext: {
        fontSize: 16,
        color: Colors.backgroundSecondary
    },
    surveyBottomText: {
        fontSize: 16,
        marginStart: 16,
        color: Colors.backgroundSecondary,
        bottom: 16,
        position: 'absolute'
    }
})

export default styles