import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { millisecondsToHuman } from '../../utils';
import TimerButton from '../TimerButton';
import styles from './Timer.styles';

export interface ITimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  onEdit: () => void;
  onDelete: (id: string) => void;
  onTimerAction: (id: string) => void;
}

const Timer: FC<ITimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onEdit,
  onDelete,
  onTimerAction,
}) => {
  const elapsedDisplay = millisecondsToHuman(elapsed);

  const handleTimerAction = () => {
    onTimerAction(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedDisplay}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton small color="blue" title="Edit" onPress={onEdit} />
        <TimerButton small color="blue" title="Remove" onPress={() => onDelete(id)} />
      </View>
      {!isRunning ? (
        <TimerButton color="#21ba45" title="Start" onPress={handleTimerAction} />
      ) : (
        <TimerButton color="#db2828" title="Stop" onPress={handleTimerAction} />
      )}
    </View>
  );
};

export default Timer;
