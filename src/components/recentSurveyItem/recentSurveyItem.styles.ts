import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
    surveyContainer: {
        marginHorizontal: 24,
        marginTop: 8,
        padding: 16,
        height: 120,
        backgroundColor: Colors.white,
        borderRadius: 20
    },
    surveyText: {
        fontSize: 20,
        fontFamily: 'NunitoSans-Bold',
        color: Colors.blue
    },
    surveySubtext: {
        fontSize: 16,
        color: Colors.blue
    },
    surveyBottomText: {
        fontSize: 16,
        marginStart: 16,
        color: Colors.title,
        bottom: 16,
        position: 'absolute'
    }
})

export default styles