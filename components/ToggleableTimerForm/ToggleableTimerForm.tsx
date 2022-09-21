import React, { FC } from 'react';
import { View } from 'react-native';
import TimerButton from '../TimerButton';
import TimerForm from '../TimerForm';
import styles from './ToggleableTimerForm.styles';

export interface IToggleableTimerFormProps {
  isOpen: boolean;
}

const ToggleableTimerForm: FC<IToggleableTimerFormProps> = ({ isOpen }) => {
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton color="black" title="+" />}
    </View>
  );
};

export default ToggleableTimerForm;
