import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: Colors.background,
    },
    container: {
        backgroundColor: Colors.white,
        padding: 24,
        marginBottom: 32
    },
    buttonGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 18
    },
    count: {
        fontSize: 16,
        fontFamily: 'NunitoSans-Bold',
        color: Colors.title,
    },
    question: {
        fontSize: 24,
        fontFamily: 'NunitoSans-Bold',
        color: Colors.title,
    },
    answerContainer: {
        width: '100%',
        marginTop: 24
    },
    rangeInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2
    },
    rangeInfoTitle: {
        fontSize: 14,
        opacity: 0.7,
        color: 'gray'
    }
})

export default styles