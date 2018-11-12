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

import { ListItem } from 'react-native-elements'

/**
 * Show UI for all the plans
 */
export class MultiSelectList extends React.PureComponent
{
  /**
    * Show UI for each ListItem and call the param function when an item is selected
    * @param {function} onItemSelected a function, which should be called after an item is selected
    */
  renderItem = onItemSelected => ({item, separators}) => {
    return (
      <TouchableOpacity onPress={() => onItemSelected(item)}>
        <ListItem
             roundAvatar
             avatar={{uri: item.image}}
             title={item.title}
             subtitle={
               <View style={styles.subtitleView}>
                 <Text style={styles.ratingText}>{item.patient}</Text>
               </View>
             }
        />
      </TouchableOpacity>
    )
  }

  render(){
  	return (
			<FlatList
			  data={Object.values(this.props.data)}
			  renderItem={this.renderItem(this.props.onItemSelected)}
        keyExtractor={(item, index) => item._id}
			/>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 30,
    padding: 20,
    backgroundColor: 'white',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingTop: 5
  },
  ratingText: {
    paddingLeft:10,
    color: 'grey'
  }
})
