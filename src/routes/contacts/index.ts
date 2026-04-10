import type { RouteOptions } from "../../server/types.js";
import { createContactRoutes } from "./create.js";
import { deleteContactRoutes } from "./delete.js";
import { listContactRoutes } from "./list.js";
import { updateContactRoutes } from "./update.js";

export const contactRoutes: RouteOptions[] = [
    createContactRoutes,
    deleteContactRoutes,
    listContactRoutes,
    updateContactRoutes
]