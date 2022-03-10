import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        height: 35,
        alignSelf: 'center',
        marginTop: 8,
        opacity: 1.0
    },
    disabledContainer: {
        height: 35,
        alignSelf: 'center',
        marginTop: 8,
        opacity: 0.5
    },
    buttonTitle: {
        fontSize: 16,
        color: Colors.blue,
        fontFamily: 'NunitoSans-Bold',
        alignSelf: 'center'
    }
})

export default styles