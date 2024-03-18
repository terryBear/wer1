import jwt from "jsonwebtoken"
import Shared from "../helper/functions.helper.js"
import throwCustomError, { ErrorTypes } from "../helper/error.helper.js"
import { OperationContext } from "../types/OperationContext.interface.js"

interface DecodedToken {
    id: string
}

const jwtLifespanInSeconds = 15552000

const getTokenExpirationTime = (ms: number) =>
  Math.floor(Date.now() / 1000) + ms

export const generateAuthData = (id: string) => {
  const tokenExpirationTime = getTokenExpirationTime(jwtLifespanInSeconds)
  const secret = Shared.assertEnvVar("JWT_SECRET")

  return {
    token: jwt.sign({ id, exp: tokenExpirationTime }, secret),
    tokenExpirationTime,
  } as const
}

export const userIdFromToken = async (token: string) => {
  const secret = Shared.assertEnvVar("JWT_SECRET")

  const decoded = jwt.verify(token, secret)

  return decoded ? (decoded as DecodedToken).id : null
}

export const assertUserId = ({ userId }: OperationContext) => {
    if (!userId) {
      throwCustomError("Invalid token", ErrorTypes.UNAUTHENTICATED)
    }
  
    return userId
}