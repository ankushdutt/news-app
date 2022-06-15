import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import NewsBlock from "./NewsBlock";

const getNewsData = (setNewsData, setIsDataLoaded) => {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&apiKey=9aa99197b82c48739423ee118da7e0b8",
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setNewsData(json);
      setIsDataLoaded(true);
    });
};

const AllNews = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getNewsData(setNewsData, setIsDataLoaded);
  }, []);
  return (
    <View>
      <Text style={{ marginTop: 20 }}>
        {isDataLoaded
          ? newsData.articles.map((data, idx) => (
              <NewsBlock data={data} idx={idx} style={styles.newsBlock} />
            ))
          : "Fetching News..."}
      </Text>
    </View>
  );
};

export default AllNews;

const styles = StyleSheet.create({
  newsBlock: {
    marginTop: 20,
  },
});
