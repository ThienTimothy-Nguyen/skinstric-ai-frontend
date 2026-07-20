export type UserImageData = {
  race: {
    "black": number;
    "white": number;
    "southeast asian": number;
    "south asian": number;
    "latino hispanic": number;
    "east asian": number;
    "middle eastern": number;
  };
  age: {
    "20-29": number;
    "30-39": number;
    "40-49": number;
    "10-19": number;
    "50-59": number;
    "3-9": number;
    "60-69": number;
    "70+": number;
    "0-2": number;
  };
  gender: {
    "male": number;
    "female": number;
  };
};

export type DemographicType = keyof UserImageData;

export type DemographicSelections = {
  [K in DemographicType]: keyof UserImageData[K];
};

export type DemographicSelectionValue = DemographicSelections[DemographicType];