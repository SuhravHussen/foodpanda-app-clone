import React, { useRef, useState } from "react";
import { View, Text, ScrollView, LayoutAnimation } from "react-native";
import AnimatedSearchBar from "../../components/Root/Home/AnimatedSearchBar";
import Hero from "../../components/Root/Home/Hero/Hero";
import Popular from "../../components/Root/Home/Popular/Popular";
import Cuisines from "../../components/Root/Home/Cuisines/Cuisines";
import PickupNearYou from "../../components/Root/Home/Pickup/PickNearYou";
import { theme } from "../../theme";
const MyComponent = () => {
  const [topValue, setTopValue] = useState(0);

  /* 
   this detects if user is scrolling to bottom or down 
   and make the search bar visible or hide 
  */
  const prevScrollY = useRef(0);
  const onScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const scrollDelta = currentScrollY - prevScrollY.current;

    if (scrollDelta > 8) {
      LayoutAnimation.configureNext({
        duration: 200,
        create: { type: "linear", property: "opacity" },
        update: { type: "linear", property: "opacity" },
        delete: { type: "linear", property: "opacity" },
      });
      setTopValue(-200);
    } else if (scrollDelta < -4) {
      LayoutAnimation.configureNext({
        duration: 200,
        create: { type: "linear", property: "opacity" },
        update: { type: "linear", property: "opacity" },
        delete: { type: "linear", property: "opacity" },
      });
      setTopValue(0);
    }

    prevScrollY.current = currentScrollY;
  };

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <AnimatedSearchBar topValue={topValue} />

      <ScrollView
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        style={{
          zIndex: -1,
          backgroundColor: theme.lightColors?.background,
        }}
      >
        <Hero />
        <Popular />
        <Cuisines />
        <PickupNearYou />
      </ScrollView>
    </View>
  );
};

export default MyComponent;
