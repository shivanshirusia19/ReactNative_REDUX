import React, {Component} from 'react';
import {StyleSheet, Modal, View, TextInput, Button} from 'react-native';

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'foo',
      body: 'foo foo',
    };
  }

  render() {
    const {visible, close, editFunction} = this.props;
    return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => close()}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText={(text) => this.setState({...this.state, title: text})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Body"
            onChangeText={(text) => this.setState({...this.state, body: text})}
          />
          <Button
            title="Edit"
            onPress={() => {
              editFunction(this.props.id, this.state.title, this.state.body);
              close();
            }}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    width: '90%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
});
