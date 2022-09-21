import React, { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import TimerButton from '../TimerButton';
import styles from './TimerForm.styles';

export interface ITimerFormProps {
  id?: number;
  title?: string;
  project?: string;
}

const TimerForm: FC<ITimerFormProps> = ({ id, title = '', project = '' }) => {
  return (
    <View style={styles.container}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton color="#21ba45" title={id ? 'Update' : 'Create'} small />
        <TimerButton color="#d82828" title="Cancel" small />
      </View>
    </View>
  );
};

export default TimerForm;
