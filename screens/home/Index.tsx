import { useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export function HomeScreen({ navigation }: any) {
  const [word, setWord] = useState<string>("");

  const handleSubmit = () => {
    if (word.length <= 10) {
      alert("Por favor, digite uma frase válida com mais de 10 caracteres");
    } else {
      navigation.navigate("ShowWord", {
        paramKey: word,
      });
    }
  };

  return (
    <SafeAreaView>
      <View style={{ width: "100%", height: "100%", padding: 32 }}>
        <Text>Digite uma frase</Text>
        <TextInput
          onChangeText={(text) => setWord(text)}
          style={{
            padding: 12,
            backgroundColor: "#FFFFFF",
            marginTop: 12,
            borderRadius: 4,
            width: "100%",
            height: 54,
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={{
            backgroundColor: "#2563EB",
            marginTop: 12,
            borderRadius: 4,
            width: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
