import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="bg-white flex-1 p-4">
      <View>
        <Text className="text-rose-500">hlo there</Text>
      </View>
    </SafeAreaView>)
}