import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NewsBlock = (props) => {
  return (
    <View style={styles.content}>
      <Text>{props.idx + 1}. </Text>
      <Text>Author: {props.data.author}</Text>
      <Text>Title: {props.data.title}</Text>
    </View>
  );
};

export default NewsBlock;

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    borderColor: "thistle",
    width: "100%",
  },
});
