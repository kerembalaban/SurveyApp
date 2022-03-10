import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

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
        borderColor: Colors.blue
    },
    selectedButton: {
        height: 30,
        width: 30,
        backgroundColor:  Colors.blue,
        borderRadius: 2,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    text: {
        alignSelf: 'center',
        color:  Colors.blue,
    },
    selectedText: {
        alignSelf: 'center',
        color: Colors.white
    }
})

export default styles
