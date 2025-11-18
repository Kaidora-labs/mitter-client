import type { Business, Role, User } from "@/lib/types";
import { apiRequest } from ".";

export type CreateUserParams = {
  role: Role;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  walletAddress: string;
  password: string;
  businesses: Business[];
};

export type CreateUserResponse = {
  id: string;
};

export const createUser = async (params: CreateUserParams) => {
  return apiRequest<CreateUserParams, CreateUserResponse>({
    url: `/users`,
    method: "POST",
    params,
  });
};

export type GetUserParams = {
  id: string;
};

export type GetUserResponse = User;

export const getUser = (params: GetUserParams) => {
  return apiRequest<GetUserParams, GetUserResponse>({
    url: `/users/${params.id}`,
    method: "GET",
    params,
  });
};

export type DeleteUserParams = {
  id: string;
};

export type DeleteUserResponse = null;

export const deleteUser = async (params: DeleteUserParams) => {
  return apiRequest<DeleteUserParams, DeleteUserResponse>({
    url: `/users`,
    method: "DELETE",
    params,
  });
};
