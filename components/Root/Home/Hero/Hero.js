// @ts-nocheck

import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../../../../styles/screen/home/hero-styles";

const foodDelivery = require("../../../../assets/images/foofpanda_hero_1.png");
const shops = require("../../../../assets/images/foodpanda_hero_2.png");
const dine = require("../../../../assets/images/foodpanda_hero_3.png");
const pickup = require("../../../../assets/images/foodpanda_hero_4.png");
const pandago = require("../../../../assets/images/foodpanda_hero_5.png");

export default function Hero() {
  return (
    <View style={styles.container}>
      {/* flex col  one*/}
      <View style={styles.col}>
        <View style={[styles.item, styles.item1]}>
          <Text style={styles.itemHeader}>Food Delivery</Text>
          <Text style={styles.itemText}>
            celebrEAT winter with exciting deals
          </Text>
          <Image source={foodDelivery} style={styles.itemOneImage} />
        </View>
        <View style={[styles.item, styles.item2]}>
          <View style={styles.item2Col1}>
            <Text style={styles.itemHeader}>Dine in</Text>
            <Text style={styles.itemText}>Go out to eat for 25% off</Text>
          </View>

          <View style={styles.item2Col2}>
            <Image source={dine} style={styles.itemTwoImage} />
          </View>
        </View>
      </View>

      {/* flex col two*/}
      <View style={styles.col}>
        <View style={[styles.item, styles.item3]}>
          <Text style={styles.itemHeader}>Shops</Text>
          <Text style={styles.itemText}>Top brand to your door</Text>
          <Image source={shops} style={styles.itemThreeImage} />
        </View>
        <View style={[styles.item, styles.item4]}>
          <View style={styles.item4col1}>
            <Text style={styles.itemHeader}>Pick up</Text>
            <Text style={styles.itemText}>Self collect in 15 minutes</Text>
          </View>
          <View style={styles.item4col2}>
            <Image source={pickup} style={styles.itemFourImage} />
          </View>
        </View>
        <View style={[styles.item, styles.item5]}>
          <View style={styles.item5Col1}>
            <Text style={styles.itemHeader}>Pandago</Text>
            <Text style={styles.itemText}>Now available in multiple city</Text>
          </View>
          <View style={styles.item2Col2}>
            <Image source={pandago} style={styles.itemFiveImage} />
          </View>
        </View>
      </View>
    </View>
  );
}
