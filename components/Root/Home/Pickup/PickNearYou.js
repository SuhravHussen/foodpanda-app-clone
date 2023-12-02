// @ts-nocheck
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import getRestaurents from "../../../../lib/getRestaurents";
const mapbg = require("../../../../assets/images/mapbg.png");
import { AntDesign } from "@expo/vector-icons";
import styles from "../../../../styles/screen/home/pickupNearYou-styles";
export default function PickupNearYou() {
  const [popularRestaurants, setPopularRestaurants] = useState([]);

  useEffect(() => {
    const res = getRestaurents();
    // @ts-ignore
    setPopularRestaurants(res);
  }, []);

  return (
    <View style={styles.pickupContainer}>
      <Text style={styles.heading}>Pickup at a restaurant near you</Text>
      <ImageBackground
        source={mapbg}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView horizontal style={styles.allRestaurantsContainer}>
          {popularRestaurants.map((res, i) => {
            return (
              <View key={i} style={styles.singleRestaurantContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={res.cover}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                    }}
                  />
                  <Text style={styles.discountText}>
                    {res.discount ? "SAVE " + res.discount + " ON PICK-UP" : ""}
                  </Text>

                  <Text style={styles.deliveryTime}>
                    {res.deliveryTimeInMinutes} min
                  </Text>
                </View>

                <View style={styles.cardFooter}>
                  <View style={styles.footerLeft}>
                    <Text style={styles.title}>{res.name}</Text>
                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      style={styles.footerText}
                    >
                      {res.awayFromUserLocation} away • Pick up in{" "}
                      {res.deliveryTimeInMinutes} min
                    </Text>
                  </View>
                  <View style={styles.footerRight}>
                    <AntDesign
                      name="star"
                      size={12}
                      color="gold"
                      style={{
                        marginTop: 2,
                      }}
                    />
                    <Text style={styles.reviewPoint}>
                      4.2 <Text style={styles.totalReviews}>(1000+)</Text>
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
