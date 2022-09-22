import React, { FC, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import IEditTimer from '../../@interfaces/IEditTimer';
import TimerButton from '../TimerButton';
import styles from './TimerForm.styles';

export interface ITimerFormProps {
  id?: string;
  title?: string;
  project?: string;
  onCancel: () => void;
  onSubmit: (t: IEditTimer) => void;
}

const TimerForm: FC<ITimerFormProps> = props => {
  const [title, setTitle] = useState<string>(props.title || '');
  const [project, setProject] = useState<string>(props.project || '');
  const submitText = props.id ? 'Update' : 'Create';

  const handleSubmit = () => {
    props.onSubmit({
      id: props.id || null,
      title,
      project,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
            onChangeText={t => setTitle(t)}
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
            onChangeText={t => setProject(t)}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton color="#21ba45" title={submitText} small onPress={handleSubmit} />
        <TimerButton color="#d82828" title="Cancel" small onPress={props.onCancel} />
      </View>
    </View>
  );
};

export default TimerForm;
