export type DefinitionNotFound = {
  title: string;
  message: string;
  resolution: string;
};

export type PhoneticType = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: {
    name: string;
    url: string;
  };
};

export type MeaningType = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: string[];
    antonyms: string[];
  }[];
  synonyms: string[];
  antonyms: string[];
};

export type DefinitionFound = {
  word: string;
  phonetic: string;
  phonetics: PhoneticType[];
  meanings: MeaningType[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
};
