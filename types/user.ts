export enum Role {
  Proprietor,
  Individual,
}

export type User = {
  role: Role;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  walletAddress: string;
  password: string;
  businesses: Business[];
};

enum BusinessType {
  SoleProprietor,
  PrivateLimited,
  PublicLimited,
}

export type Business = {
  name: string;
  aaddress: string;
  cacNumber: number;
  type: BusinessType;
};
