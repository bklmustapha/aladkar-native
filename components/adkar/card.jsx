import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

export const DikrCard = ({ number, content }) => {
  const [count, setCount] = useState(number);

  const handleClick = () => {
    count > 0 ? setCount((old) => old - 1) : setCount(number);
  };

  return (
    <View style={tw`mb-5`}>
      <View style={tw`px-3 pt-3 pb-7 bg-green-900/40 rounded-b-md`}>
        <Text style={tw`text-center text-xl font-semibold text-white`}>
          {content}
        </Text>
      </View>
      <View
        style={tw`py-2 flex flex-row justify-between w-full max-w-[80%] mx-auto bg-gray-900 rounded-md -mt-5`}
      >
        <View style={tw`flex justify-center items-center flex-1`}>
          <Text style={tw`text-center text-white text-xl font-bold`}>
            مشاركة
          </Text>
        </View>
        <View style={tw`inline-flex h-[20px] bg-white w-[2px]`}></View>
        <View style={tw`flex-1 flex items-center justify-center`}>
          <TouchableOpacity onPress={handleClick}>
            {count > 0 ? (
              <Text style={tw`text-lg font-bold text-white`}>
                تكرار
                <View
                  style={tw`w-7 h-7 rounded-full border border-solid border-white mx-3 inline-flex items-center justify-center`}
                >
                  {count}
                </View>
              </Text>
            ) : (
              <Text style={tw`text-white font-bold text-lg`}>إعادة</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
