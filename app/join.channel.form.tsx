import { Button } from "@/src/components/ui/Button";
import { router } from "expo-router";
import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateRoomForm() {

    return (
        <SafeAreaView>
            <Button variant="primary" label="← Back" onPress={() => router.back()} />
            <Text>Join a channel</Text>
            <TextInput placeholder="Enter Channel Id"></TextInput>
            <TextInput placeholder="Enter Password"></TextInput>
            <Button variant="outline" label="Join" onPress={() => {}} />
        </SafeAreaView>
    )
}