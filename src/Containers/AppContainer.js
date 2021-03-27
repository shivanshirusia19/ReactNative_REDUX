import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import RenderList from '../Components/RenderList';
import AddModal from '../Components/AddModal';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {get_data, add_data, update_data, delete_data} from '../Services/action';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddModalOpen: false,
      isEditModalOpen: false,
      id: '',
    };
  }
  componentDidMount() {
    this.props.get_data();
  }

  addModalVisible = (bool) => {
    this.setState({...this.state, isAddModalOpen: bool});
  };
  addModalToggle = () => {
    this.addModalVisible(true);
  };
  editModalVisible = (bool, id) => {
    this.setState({...this.state, isEditModalOpen: bool, id: id});
  };
  editModalToggle = (id) => {
    this.editModalVisible(true, id);
  };

  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.addContainer}
            onPress={() => this.addModalToggle()}>
            {/* <Text style={styles.addText}>Add</Text> */}
            <Image
              style={styles.image}
              source={require('../assets/addIcon.png')}
            />
          </TouchableOpacity>

          <AddModal
            visible={this.state.isAddModalOpen}
            close={() => this.addModalVisible(false)}
            addFunction={this.props.add_data}
          />

          <FlatList
            data={this.props.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <RenderList
                item={item}
                deleteItem={this.props.delete_data}
                update={this.props.update_data}
                visible={this.state.isEditModalOpen}
                push={this.editModalToggle}
                id={this.state.id}
                close={() => this.editModalVisible(false)}
              />
            )}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  addText: {
    fontSize: 20,
  },
  image: {
    height: 20,
    width: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.reducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      get_data,
      add_data,
      update_data,
      delete_data,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
