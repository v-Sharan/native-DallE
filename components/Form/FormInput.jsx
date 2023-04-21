import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./FormInput.style";

const FormInput = ({
  labelName,
  type,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurprise,
  handleRefetch,
  Reload,
}) => (
  <View style={{ margin: 4 }}>
    <View style={styles.div} className={`${Reload && "justify-between"} block`}>
      <Text style={styles.label} className="block">
        {labelName}
      </Text>
      {Reload && (
        <TouchableOpacity
          className="bg-[#6469ff] w-16 px-2 py-1 rounded-lg"
          onPress={handleRefetch}
        >
          <Text className="text-white">Reload</Text>
        </TouchableOpacity>
      )}
      {isSurpriseMe && (
        <TouchableOpacity
          className="bg-[#EcECF1] py-2 px-3 rounded-[6px]"
          onPress={handleSurprise}
        >
          <Text style={styles.font}>Surprise me</Text>
        </TouchableOpacity>
      )}
    </View>
    <TextInput
      value={value}
      placeholder={placeholder}
      type={type}
      onChangeText={handleChange}
      style={styles.input}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-2"
    />
  </View>
);

export default FormInput;
