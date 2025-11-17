"use server";

import { healthCheck } from "@/api";
import {
  type CreateUserParams,
  type CreateUserResponse,
  createUser,
} from "@/api/users";
import { AuthError } from "@/lib/errors";
import type { Result, User } from "@/lib/types";

export async function signup(
  params: CreateUserParams,
): Promise<Result<CreateUserResponse, AuthError>> {
  const healthResult = await healthCheck();
  if (!healthResult.ok) {
    return {
      ok: false,
      error: new AuthError({
        message: "Service unavailable, try again later",
        cause: healthResult.error,
      }),
    };
  }

  const result = await createUser(params);
  if (!result.ok) {
    return {
      ok: false,
      error: new AuthError({
        message: "Account creation failed",
        cause: result.error,
      }),
    };
  }

  return {
    ok: true,
    data: result.data,
  };
}

type Credentials = {
  emailAddress: string;
  password: string;
};

export async function signin(_: Credentials): Promise<Result<User, AuthError>> {
  const healthResult = await healthCheck();
  if (!healthResult.ok) {
    return {
      ok: false,
      error: new AuthError({
        message: "Service unavailable, try again later",
        cause: healthResult.error,
      }),
    };
  }

  return {
    ok: false,
    error: new AuthError({
      message: "Not implemented",
    }),
  };
}
