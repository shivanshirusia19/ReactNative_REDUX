import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import EditModal from './EditModal';

export default class RenderList extends Component {
  render() {
    const {item, deleteItem, update} = this.props;
    return (
      <View style={styles.box}>
        <View style={styles.textbox}>
          <View style={styles.editBox}>
            <TouchableOpacity
              style={styles.addContainer}
              onPress={() => this.props.push(item.id)}>
              {/* <Text style={styles.addText}>Edit</Text> */}
              <Image
                style={styles.image}
                source={require('../assets/editIcon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addContainer}
              onPress={() => deleteItem(item.id)}>
              {/* <Text style={styles.addText}>Delete</Text> */}
              <Image
                style={styles.image}
                source={require('../assets/deleteIcon.png')}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.line1}>ID: {item.id}</Text>
          <Text style={styles.line1}>Title: {item.title}</Text>
          <Text style={styles.line2}>Body: {item.body}</Text>
        </View>
        <EditModal
          visible={this.props.visible}
          close={() => this.props.close()}
          editFunction={update}
          id={this.props.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    padding: 16,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#5f9ea0',
  },
  textbox: {
    flex: 1,
  },
  line1: {
    marginBottom: 4,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  line2: {
    color: 'white',
  },
  editBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  addContainer: {
    // alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  addText: {
    fontSize: 20,
  },
  image: {
    height: 20,
    width: 20,
  },
});
