import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { DB } from '../util/DB';
import { DbContainer } from '../components/State'

import { Subscribe } from 'unstated'

/**
  * Show UI for a selected plan
  */
export default class ViewPlanScreen extends React.Component {
  static navigationOptions = {
    title: 'View Plan',
  };



  render() {
    const { navigation } = this.props;
    const plan = navigation.getParam('plan', 'the selected plan')

    // Tell component to delete the plan
    _handleDelete = db => () => {
      console.log("Deleting " + plan.title)
      db.deletePlan(plan)
      navigation.navigate('Home')
    }

    return (
      <Subscribe to={[DbContainer]}>
      {db => (
        <Card image={{uri: plan.image}} title={plan.title}>

          <Text>Patient: {plan.patient}</Text>
          <Divider style={{ backgroundColor: 'grey' }} />
          <Text>Pill: {plan.pill}</Text>
          <Divider style={{ backgroundColor: 'grey' }} />
          <Text>Amount: {plan.amount}</Text>
          <Divider style={{ backgroundColor: 'grey' }} />
          <Text>Time: {plan.time}</Text>
          <Divider style={{ backgroundColor: 'grey' }} />
          <Text>Weekday: {plan.weekday}</Text>
          <Divider style={{ backgroundColor: 'grey' }} />
          <Text>Begin Date: {plan.begin}</Text>
          <Divider style={{ backgroundColor: 'grey' }} />
          <Text>End Date: {plan.end}</Text>

          <Button
            title="Edit plan"
            onPress={() =>
              navigation.navigate('EditPlan', {plan})
            }
          />

          <Button
            color="#841584"
            title="Delete plan"
            onPress={_handleDelete(db)}
          />
        </Card>
        )}
      </Subscribe>
    );
  }
}
