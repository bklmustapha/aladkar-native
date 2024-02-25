import { View } from "react-native";
import tw from "twrnc"

import { AdkarCategorie } from "./Categorie";

export const ListingAdkar = () => {
  return (
    <View style={tw`flex-1 flex-col px-3`}>
      <AdkarCategorie title="أذكار الصباح" />
      <AdkarCategorie title="أذكار المساء" />
      <AdkarCategorie title="أذكار بعد السلام من الصلاة المفروضة" />
      <AdkarCategorie title="تسابيح" />
      <AdkarCategorie title="أذكار النوم" />
      <AdkarCategorie title="أذكار الاستيقاظ" />

      <AdkarCategorie title="أدعية قرآنية" />
      <AdkarCategorie title="أدعية الأنبياء" />
    </View>
  );
};
