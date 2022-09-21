import React, { FC } from 'react';
import Timer from './Timer';
import TimerForm from '../TimerForm';

export interface IEditableTimerProps {
  id: number;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  editFormOpen?: boolean;
}

const EditableTimer: FC<IEditableTimerProps> = props => {
  const { id, title, project, elapsed, isRunning, editFormOpen } = props;

  return editFormOpen ? (
    <TimerForm id={id} title={title} project={project} />
  ) : (
    <Timer id={id} title={title} project={project} elapsed={elapsed} isRunning={isRunning} />
  );
};

export default EditableTimer;
