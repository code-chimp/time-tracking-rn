import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { ONE_SECOND } from './constants';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import IEditTimer from './@interfaces/IEditTimer';
import ITimer from './@interfaces/ITimer';
import styles from './App.styles';

export interface IAppState {
  timers: Array<ITimer>;
}

export default class App extends Component<any, IAppState> {
  private intervalId: number | null = null;

  state = {
    timers: [
      {
        id: 'aaaa-bbbb-cccc-dddd1',
        title: 'Mow the lawn',
        project: 'House Chores',
        elapsed: 5456099,
        isRunning: true,
      },
      {
        id: 'aaaa-bbbb-cccc-dddd2',
        title: 'Bake squash',
        project: 'Kitchen Chores',
        elapsed: 1273998,
        isRunning: false,
      },
    ],
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const { timers } = this.state;

      this.setState({
        timers: timers.map(t => {
          const { elapsed, isRunning } = t;

          return {
            ...t,
            elapsed: isRunning ? elapsed + ONE_SECOND : elapsed,
          };
        }),
      });
    }, ONE_SECOND);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  submitTimerForm = (t: IEditTimer) => {
    const { title, project } = t;

    if (!t.id) {
      this.setState({
        timers: [
          ...this.state.timers,
          {
            id: uuid(),
            title: title || 'Title',
            project: project || 'Project',
            elapsed: 0,
            isRunning: false,
          },
        ],
      });
    } else {
      const existing = this.state.timers.find(tm => tm.id === t.id);

      if (existing) {
        this.setState({
          timers: [
            ...this.state.timers.filter(_ => _.id !== t.id),
            {
              ...existing!,
              title,
              project,
            },
          ],
        });
      }
    }
  };

  deleteTimer = (id: string) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== id),
    });
  };

  handleTimerAction = (id: string) => {
    this.setState(prev => {
      const { timers } = prev;

      return {
        timers: timers.map(t => {
          if (id === t.id) {
            return { ...t, isRunning: !t.isRunning };
          }

          return t;
        }),
      };
    });
  };

  render() {
    const { timers } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView contentContainerStyle={styles.timerList}>
          <ToggleableTimerForm onSubmit={this.submitTimerForm} />
          {timers.map(({ id, title, project, elapsed, isRunning }) => (
            <EditableTimer
              key={id}
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
              onTimerAction={this.handleTimerAction}
              onSubmit={this.submitTimerForm}
              onDelete={this.deleteTimer}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
