import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
  increaseCount,
  decreaseCount,
  increaseByValue,
} from '../../Modules/counter';

class Counter extends Component {
  render() {
    // eslint-disable-next-line no-shadow
    const {increaseCount, decreaseCount, incrementByValue} = this.props;

    return (
      <View style={styles.container}>
        <Button title="Increment" onPress={increaseCount} />
        <Text>{this.props.count}</Text>
        <Button title="Decrement" onPress={decreaseCount} />
        <Button title="Increment by 5" onPress={() => incrementByValue(5)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      increaseCount,
      decreaseCount,
      incrementByValue: increaseByValue,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
