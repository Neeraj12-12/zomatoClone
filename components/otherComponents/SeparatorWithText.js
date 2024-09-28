import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SeparatorWithText = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10, // Space above and below the separator
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray', // Change this color as needed
    marginHorizontal: 10, // Space between the line and the text
  },
  text: {
    fontSize: 16,
    color: 'black', // Change this color as needed
    textAlign: 'center',
  },
});

export default SeparatorWithText;
