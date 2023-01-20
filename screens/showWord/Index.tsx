import { useEffect, useState } from "react";
import { View, Text } from "react-native";

interface IWordCount {
  word: string;
  count: number;
}

export function ShowWord({ route }: any) {
  const [wordResults, setWordResults] = useState<IWordCount[]>([]);

  const countWords = (str: string): IWordCount[] => {
    const wordCount: IWordCount[] = [];

    const words = str.split(" ");

    words.map((word) => {
      const existingWord = wordCount.find((w) => w.word === word);
      if (existingWord) {
        existingWord.count++;
      } else {
        wordCount.push({ word, count: 1 });
      }
    });
    setWordResults(wordCount);
    return wordCount;
  };

  useEffect(() => {
    countWords(route.params.paramKey);
  }, []);

  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 32 }}>
        <Text style={{ fontSize: 20 }}>{route.params.paramKey}</Text>
      </View>
      <View style={{ alignItems: "flex-start", marginLeft: 8, marginTop: 32 }}>
        {wordResults.map((word: IWordCount) => {
          return (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 16,
                  marginRight: 8,
                }}
              >
                {word.word}:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                {word.count}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
