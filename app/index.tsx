import { Button } from "@/src/components/ui/Button";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Index() {



  return (
    <SafeAreaView className="bg-white flex-1">
      <Text>hlo there</Text>
      <Button size="lg" label="Create" onPress={() => router.push("/create.channel.form")}/>
      <Button variant="outline" size="lg" label="Join" onPress={() => router.push("/join.channel.form")}/>
    </SafeAreaView>
  );
}
