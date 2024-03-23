import { Button, View, Text, ScrollView } from "react-native";
import tw from "twrnc";

//import customData from './customData.json';
//import adkarData from "../data/adkar.json"

import { DikrCard } from "../components/adkar/card";

import * as data from "../data/adkar.json";

export default function DetailsScreen({ navgiation, route }) {
  const { id, title } = route.params;
  const _array_adkar = data[title];
  console.log("_array_adkar", _array_adkar);
  return (
    <View style={tw`bg-black`}>
      <Text style={tw`text-black text-xl font-semibold`}>title: {title}</Text>
      <View style={tw`px-3`}>
        <ScrollView scrollEnabled={true} nestedScrollEnabled={true} style={tw`h-[1000px]`}>
          {_array_adkar.map((item, index) => (
            <DikrCard
              key={item.count}
              number={parseInt(item.count)}
              content={item.content}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
