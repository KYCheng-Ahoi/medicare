import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
//import { DB } from '../util/DB';
import { MultiSelectList } from '../components/MultiSelectList';
import { DbContainer } from '../components/State'

import { Subscribe } from 'unstated'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  /**
   * Before this component shows the user anything, get the data from the local PouchDB
   */
  async componentDidMount() {
    //const plans = await this.db.getPlans()
    //this.setState({plans})
  }

  render() {
    const { navigate } = this.props.navigation;

    /**
     * Navigate to the ViewPlan route with param
     * @param {list} plan infomation form the selected plan
     */
    _onItemSelected = plan => {
      navigate("ViewPlan", {plan})
    }

    /**
     * Show UI for Home Screen
     * Navigate to the EditPlan route with param, when the Button "New Plan" is pressed
     */
    return (
      <Subscribe to={[DbContainer]}>
        {db => (
          <ScrollView style={styles.container}>

            <MultiSelectList data={db.state.plans} onItemSelected={_onItemSelected}/>

            <Button title="New plan" onPress={() => navigate('EditPlan', {plan: {} })}/>

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
