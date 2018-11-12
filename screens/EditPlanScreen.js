import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Subscribe } from 'unstated'
import { Form } from '../components/Form';
import { DbContainer } from '../components/State'


export default class EditPlanScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Plan',
  };

  render() {
    const { navigation } = this.props;
    const plan = navigation.getParam('plan', 'the selected plan')

    // Tell component to save the plan
    _handleSave = db => plan => {
      db.savePlan(plan)
      navigation.navigate('Home')
    }

    return (
      <Subscribe to={[DbContainer]}>
      {db => (
        <ScrollView style={styles.container}>
          <Form plan={plan} handleSave={_handleSave(db)}/>
        </ScrollView>
      )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
