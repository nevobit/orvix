import type { RouteOptions } from "../../server/types.js";
import { createUsersRoute } from "./create.js";
import { deleteUsersRoute } from "./delete.js";
import { listUsersRoute } from "./list.js";
import { updateUsersRoute } from "./update.js";

export const usersRoutes: RouteOptions[] = [
    createUsersRoute,
    deleteUsersRoute,
    updateUsersRoute,
    listUsersRoute
]