// @ts-nocheck
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import React from "react";

import { theme } from "../../../../theme";
import styles from "../../../../styles/screen/home/shop-styles";

const shopGroceries = require("../../../../assets/images/shop/shop_groceries.jpg");
const shopConvenience = require("../../../../assets/images/shop/shop_convenience.jpg");
const shopButchery = require("../../../../assets/images/shop/shop_butchery.jpg");

function Shops() {
  const shopTypes = [
    {
      id: 1,
      image: shopGroceries,
      title: "Groceries",
    },
    {
      id: 2,
      image: shopConvenience,
      title: "Convenience",
    },
    {
      id: 3,
      image: shopButchery,
      title: "Butchery",
    },
  ];

  return (
    <View style={styles.shopsContainer}>
      <Text style={styles.heading}>Shops</Text>

      <ScrollView horizontal style={styles.allShopContainer}>
        <FlatList
          scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: "flex-start",
          }}
          horizontal
          data={shopTypes}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => (
            <View style={styles.singleShopContainer}>
              <View style={styles.imageView}>
                <Image source={item.image} style={styles.image} l />
              </View>

              <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                {item.title}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default React.memo(Shops);
