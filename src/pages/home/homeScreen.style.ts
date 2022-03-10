import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingHorizontal: 24
    },
    welcomeTextContainer: {
        marginTop: 24,
        alignItems:'center'
    },
    welcomeText: {
        fontSize: 20,
        color: Colors.title
    },
    welcomeSubtext: {
        fontSize: 24,
        fontFamily: 'NunitoSans-Bold',
        color: Colors.title
    },
    title: {
        fontSize: 20,
        fontFamily: 'NunitoSans-Black',
        marginStart: 24,
        color: Colors.title
    },
    surveyItemContainer:{
        marginTop:24
    }

})

export default styles