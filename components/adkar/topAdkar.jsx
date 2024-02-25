import { View } from "react-native";
import tw from "twrnc";

import { AdkarCategorie } from "./Categorie";

export const TopAdkar = () => {
  return (
    <View style={tw`flex flex-row flex-wrap`}>
      <AdkarCategorie title="Adkar al sabah" />
      <AdkarCategorie title="Adkar al masaa" />
      <AdkarCategorie title="Adkar al nawm" />
      <AdkarCategorie title="tasabih" />  
    </View>
  );
};
