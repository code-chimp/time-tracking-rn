import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { millisecondsToHuman } from '../../../utils';
import TimerButton from '../../TimerButton';
import styles from './Timer.styles';

export interface ITimerProps {
  id: number;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
}

const Timer: FC<ITimerProps> = props => {
  const { title, project, elapsed } = props;
  const elapsedDisplay = millisecondsToHuman(elapsed);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedDisplay}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton small color="blue" title="Edit" />
        <TimerButton small color="blue" title="Remove" />
      </View>
      <TimerButton color="#21ba45" title="Start" />
    </View>
  );
};

export default Timer;
