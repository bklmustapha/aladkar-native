import { View } from "react-native";
import tw from "twrnc";
import { ListingAdkar } from "../components/adkar/ListingAdkar"

export default function AdkarScreen() {
  return (
    <View style={tw`bg-black`}>
      <ListingAdkar />
    </View>
  );
}
