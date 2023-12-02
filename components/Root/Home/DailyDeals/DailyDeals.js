// @ts-nocheck
import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import styles from "../../../../styles/screen/home/dailyDeals-styles";

const sweetTreat = require("../../../../assets/images/sweetDeals.png");
const saveGroceries = require("../../../../assets/images/save_groceries.png");

function DailyDeals() {
  const dailyCampaign = [
    {
      image: sweetTreat,
      id: 1,
    },
    {
      image: saveGroceries,
      id: 2,
    },
  ];

  return (
    <View style={styles.dailyDealsContainer}>
      <Text style={styles.heading}>Your daily deals</Text>

      <ScrollView horizontal style={styles.allDealsContainer}>
        {dailyCampaign.map((item) => (
          <View style={styles.singleDeal} key={item.id}>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default React.memo(DailyDeals);
