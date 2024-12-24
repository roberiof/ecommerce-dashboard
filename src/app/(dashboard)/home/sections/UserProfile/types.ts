export interface TransactionPerAge {
  category: string;
  value: number;
}

export interface SessionsPerSex {
  male: number;
  female: number;
}

export interface TransactionPerClientType {
  category: string;
  value: number;
}

export interface UserProfileData {
  "transactions-per-age": TransactionPerAge[];
  "sessions-per-sex": SessionsPerSex;
  "transactions-per-client-type": TransactionPerClientType[];
}
