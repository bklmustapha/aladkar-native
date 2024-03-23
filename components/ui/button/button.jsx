import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";


const theme = {
  default : {
    base: "",
    active: "",
    inactive: "",
    disabled: "",
  },
}



export const Button = ({onClick, text, variant, ...props}) => {

  return (
    <TouchableOpacity>
      <Text>

      </Text>
    </TouchableOpacity>
  )
}