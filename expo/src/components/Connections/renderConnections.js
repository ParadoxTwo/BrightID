import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// import Spinner from 'react-native-spinkit';

export const renderListOrSpinner = (comp) => {
  const { connections } = comp.props;
  if (comp.state && comp.state.loading) {
    return <View />;
  } else if (connections.length > 0) {
    return (
      <FlatList
        style={styles.connectionsContainer}
        data={comp.filterConnections()}
        keyExtractor={({ id }, index) => id + index}
        renderItem={comp.renderConnection}
      />
    );
  } else {
    return (
      <View>
        <Text style={styles.emptyText}>No connections</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  connectionsContainer: {
    flex: 1,
  },
  emptyText: {
    fontFamily: 'ApexNew-Book',
    fontSize: 20,
  },
});
