import type { RequestHandler } from "express";

export const verify: RequestHandler = (req, res, next) => {
  const apiKey = String(req.headers["x-api-key"]);
  
  if (!apiKey) {
        res.json({ type: "error", code: '1001', message: "Missing api-key header" });
  }

  if (apiKey.length < 20) {
        res.json({ type: "error", code: '1002', message: "Malformed API key" });
  }

  if(apiKey !== process.env.API_KEY) {
        res.json({ type: "error", code: '1003', message: "Invalid API key" });
  }

  next();
}

// };
// export const verify = (err: unknown, req: Request, res: Response, next: NextFunction): void => {


//     //



// }

// Authorization
// Authentication -> JSON Web Tokens (JWT)