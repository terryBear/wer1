import { OperationContext } from "../types/OperationContext.interface.js";
import { userIdFromToken } from "../authentication/jwt.js";

const context = async ({ req, res }: any): Promise<OperationContext> =>  {
    let userId = null
    try {
      userId = await userIdFromToken(
        req.headers["Authorization"].replace("Bearer ", "")
      )
    } catch {}

    return {
      userId,
    }
};

export default context;

