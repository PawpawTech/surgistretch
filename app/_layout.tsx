import { Stack } from "expo-router";
import { paletteWhite, paletteTealDark } from "@/constants/Colors"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: 'SurgiStretch',
        headerStyle: { backgroundColor: paletteTealDark },
        headerTitleStyle: { color: paletteWhite, fontSize: 26 }
      }} />
    </Stack>
  );
}
