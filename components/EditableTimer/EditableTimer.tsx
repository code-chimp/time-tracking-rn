import React, { FC, useState } from 'react';
import IEditTimer from '../../@interfaces/IEditTimer';
import TimerForm from '../TimerForm';
import Timer from '../Timer';

export interface IEditableTimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  onTimerAction: (id: string) => void;
  onSubmit: (t: IEditTimer) => void;
  onDelete: (id: string) => void;
}

const EditableTimer: FC<IEditableTimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onTimerAction,
  onSubmit,
  onDelete,
}) => {
  const [editFormOpen, setEditFormOpen] = useState<boolean>(false);

  const handleSubmit = (t: IEditTimer) => {
    setEditFormOpen(false);
    onSubmit(t);
  };

  return editFormOpen ? (
    <TimerForm
      id={id}
      title={title}
      project={project}
      onSubmit={handleSubmit}
      onCancel={() => setEditFormOpen(false)}
    />
  ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onTimerAction={onTimerAction}
      onEdit={() => setEditFormOpen(true)}
      onDelete={onDelete}
    />
  );
};

export default EditableTimer;
