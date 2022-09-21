import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './TimerButton.styles';

export interface ITimerButtonProps {
  color: string;
  title: string;
  small?: boolean;
  onPress?: () => void;
}

const TimerButton: FC<ITimerButtonProps> = ({ color, title, small, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { borderColor: color }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color }, small ? styles.small : styles.large]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TimerButton;
