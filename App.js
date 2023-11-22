import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

import { Text } from "react-native";
import { ThemeProvider, theme } from "./theme";
import Stack from "./Stack";

function App() {
  const [locationAvailable, setLocationAvailable] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const value = await AsyncStorage.getItem("userDetails");
        setLocationAvailable(value !== null);
      } catch (e) {
        setLocationAvailable(false);
      } finally {
        setLoading(false);
      }
    };

    checkLocation();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading && !locationAvailable && <Text>Loading...</Text>}
      {!loading && <Stack locationAvailable={locationAvailable} />}
    </ThemeProvider>
  );
}

export default App;
