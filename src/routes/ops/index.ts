import type { RouteOptions } from "../../server/types.js";
import { healthRoute } from "./health.js";

export const opsRoutes: RouteOptions[] = [
    healthRoute
];