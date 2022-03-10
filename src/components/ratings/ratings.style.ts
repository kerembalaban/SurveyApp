import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        height: 30,
        width: 30,
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: 'blue'
    },
    selectedButton: {
        height: 30,
        width: 30,
        backgroundColor: 'blue',
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        alignSelf: 'center',
        color: 'blue',
    },
    selectedText: {
        alignSelf: 'center',
        color: 'white'
    }
})

export default styles
