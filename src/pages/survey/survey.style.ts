import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 18,
        marginTop: 24,
        alignItems: 'center'
    },
    buttonGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 24
    },
    buttonTitle: {

    },
    question: {
        fontSize: 16,
        fontFamily: 'NunitoSans-Bold'
    },
    answerContainer: {
        width: '100%',
        marginTop: 24
    },
    rangeInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:2
    },
    rangeInfoTitle: {
        fontSize:14,
        opacity: 0.7,
        color: 'gray'
    }
})

export default styles