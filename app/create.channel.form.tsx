import { Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateRoomForm() {

    return (
        <SafeAreaView>
            <Text>Create a channel</Text>
            <TextInput placeholder="Enter Channel Id"></TextInput>
            <TextInput placeholder="Enter Password"></TextInput>
        </SafeAreaView>
    )
}