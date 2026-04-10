import type { RouteOptions } from "../../server/types.js";
import { createCategorieRoute } from "./create.js";
import { deleteCategorieRoute } from "./delete.js";
import { listCategoriesRoute } from "./list.js";
import { updatecategorieRoute } from "./update.js";

export const categorieRoutes: RouteOptions[] = [
    deleteCategorieRoute,
    updatecategorieRoute,
    createCategorieRoute,
    listCategoriesRoute
]