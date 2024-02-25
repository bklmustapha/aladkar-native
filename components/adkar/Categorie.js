import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

export const AdkarCategorie = ({ title, id }) => {
  const navigation = useNavigation();

  return (
    <View style={tw`mb-5 last:mb-0 py-5 px-2 bg-green-900/30 rounded-md border border-gray-800`}>
      <TouchableOpacity
        onPress={() =>
          navigation.push("Details", {
            id: id,
            title: title,
          })
        }
      >
        <Text style={tw`text-white text-2xl font-bold`}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
