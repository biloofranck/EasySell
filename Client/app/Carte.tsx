import { View, Text } from "react-native";
import React from "react";
import { Button, ButtonText } from "@/components/ui/button";

const CarteSection = () => {
  return (
    <View>
      <Text  className='p-10 font-extrabold text-4xl' >
        CarteSection
      </Text>

      <Button size="md" variant="solid" action="positive">
        <ButtonText className="text-xl font-bold">Hello World!</ButtonText>
      </Button>
    </View>
  );
};

export default CarteSection;
