import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IRecentSurveyModel } from '../../interfaces';
import styles from './textButton.style';

type Props = {
    title: string
    disabled?: boolean,
    buttonStyle?: StyleSheet.AbsoluteFillStyle,
    onPress: () => void
};

const TextButton = ({ title, disabled = false, onPress, buttonStyle }: Props) => {
    return (
        <TouchableOpacity
            style={disabled ? styles.disabledContainer : styles.container}
            onPress={onPress}
            disabled={disabled}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton