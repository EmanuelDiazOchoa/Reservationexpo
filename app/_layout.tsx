import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Inicio" }} />
        <Tabs.Screen name="courts" options={{ title: "Canchas" }} />
        <Tabs.Screen name="my-bookings" options={{ title: "Mis Reservas" }} />
      </Tabs>
    </GestureHandlerRootView>
  );
}
