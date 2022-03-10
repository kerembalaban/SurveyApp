import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './filledButton.style';

type Props = {
    title: string
    buttonStyle?: null
    textStyle?: null,
    disabled?: boolean,
    onPress: () => void
};

const FilledButton = ({ title, textStyle, buttonStyle, disabled = false, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={disabled ? styles.disabledContainer : styles.container}
            disabled={disabled}>
            <Text style={textStyle ? [styles.buttonTitle, textStyle] : styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FilledButton