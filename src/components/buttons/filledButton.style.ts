import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius:8,
        opacity: 1.0
    },
    disabledContainer: {
        height: 45,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius:8,
        opacity: 0.5
    },
    buttonTitle: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'center',
        paddingHorizontal: 24
    }
})

export default styles