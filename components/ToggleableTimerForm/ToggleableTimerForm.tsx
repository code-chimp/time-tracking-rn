import React, { FC, useState } from 'react';
import { View } from 'react-native';
import IEditTimer from '../../@interfaces/IEditTimer';
import TimerButton from '../TimerButton';
import TimerForm from '../TimerForm';
import styles from './ToggleableTimerForm.styles';

export interface IToggleableTimerFormProps {
  onSubmit: (t: IEditTimer) => void;
}

const ToggleableTimerForm: FC<IToggleableTimerFormProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = (t: IEditTimer) => {
    setIsOpen(false);
    onSubmit(t);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm onSubmit={handleSubmit} onCancel={() => setIsOpen(false)} />
      ) : (
        <TimerButton color="black" title="+" onPress={() => setIsOpen(!isOpen)} />
      )}
    </View>
  );
};

export default ToggleableTimerForm;
