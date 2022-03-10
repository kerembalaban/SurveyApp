import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './filledButton.style';

type Props = {
    title: string
    disabled?: boolean,
    onPress: () => void
};

const FilledButton = ({ title, disabled = false, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={disabled ? styles.disabledContainer : styles.container}
            disabled={disabled}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default FilledButton