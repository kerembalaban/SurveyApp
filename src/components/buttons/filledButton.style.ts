import { StyleSheet } from "react-native";
import Colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        width:'80%',
        height: 45,
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius:8,
        opacity: 1.0
    },
    disabledContainer: {
        width:'80%',
        height: 45,
        backgroundColor: Colors.yellow,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius:8,
        opacity: 0.5
    },
    buttonTitle: {
        fontSize: 16,
        color: Colors.title,
        fontFamily: 'NunitoSans-Bold',
        alignSelf: 'center',
        paddingHorizontal: 24
    }
})

export default styles