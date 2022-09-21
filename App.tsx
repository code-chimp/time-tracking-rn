import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import styles from './App.styles';

export default class App extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Timers</Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false} />
          <EditableTimer
            id={1}
            title="Mow the lawn"
            project="House Chores"
            elapsed={8986300}
            isRunning
          />
          <EditableTimer
            id={2}
            title="Bake squash"
            project="Kitchen Chores"
            elapsed={8986300}
            editFormOpen
          />
        </ScrollView>
      </View>
    );
  }
}
