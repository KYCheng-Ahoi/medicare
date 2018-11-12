import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
	FlatList,
  TouchableHighlight
} from 'react-native';

import { FormLabel, FormInput } from 'react-native-elements';

export class Form extends React.PureComponent
{
  constructor(props) {
    super(props)
    this.state = props.plan
  }

  /**
   * Show the UI for a form, which allows users to edit a plan
   * Call the handleSave function in props aften the Button "Save" is pressed
   */
  render() {
  	return (
      <View>
        <FormLabel>Titel</FormLabel>
        <FormInput name='title' value={this.state.title}
            onChangeText={title => this.setState({title})}/>

        <FormLabel>Patient</FormLabel>
        <FormInput name='patient' value={this.state.patient}
            onChangeText={patient => this.setState({patient})}/>

        <FormLabel>Pill Name</FormLabel>
        <FormInput name='pill' value={this.state.pill}
            onChangeText={pill => this.setState({pill})}/>

        <FormLabel>Time (Ex: 15:00, sperate with semicolon)</FormLabel>
        <FormInput name='time' value={this.state.time}
            onChangeText={time => this.setState({time})}/>

        <FormLabel>Weekday (Ex: Mo, Tu... , sperate with semicolon)</FormLabel>
        <FormInput name='weekday' value={this.state.weekday}
            onChangeText={patient => this.setState({patient})}/>

        <FormLabel>Begin Date(Day.Month.Year Ex: 31.01.2018)</FormLabel>
        <FormInput name='begin' value={this.state.begin}
            onChangeText={begin => this.setState({begin})}/>

        <FormLabel>End Date(Day.Month.Year Ex: 31.01.2018)</FormLabel>
        <FormInput name='end' value={this.state.end}
            onChangeText={end => this.setState({end})}/>

        <FormLabel>Image(url)</FormLabel>
        <FormInput name='image' value={this.state.image}
            onChangeText={image => this.setState({image})}/>
        <Button title="Save" onPress={() => this.props.handleSave(this.state)}/>
      </View>
  	)
	}
}
