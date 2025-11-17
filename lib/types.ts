/*//////////////////////////////////////////////////////////////
                          GENERIC TYPES
//////////////////////////////////////////////////////////////*/
export type Body<T> = {
  message: string;
  error?: string;
  data?: T;
};

export type Result<T, E extends Error> =
  | { ok: true; data: T }
  | { ok: false; error: E };

/*//////////////////////////////////////////////////////////////
                          USER TYPES
//////////////////////////////////////////////////////////////*/

export enum Role {
  Individual = "INDIVIDUAL",
  Proprietor = "PROPRIETOR",
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  walletAddress: string;
  password: string;
  businesses: Business[];
  role: Role;
};

/*//////////////////////////////////////////////////////////////
                          BUSINESS TYPES
//////////////////////////////////////////////////////////////*/

export enum BusinessType {
  SoleProprietor = "SOLE_PROPRIETOR",
  PrivateLimited = "PRIVATE_LIMITED",
  PublicLimited = "PUBLIC_LIMITED",
}

export type Business = {
  name: string;
  address: string;
  cacNumber: string;
  type: BusinessType;
};
