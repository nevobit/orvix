import type { RouteOptions } from "../../server/types.js";
import { createProductRoute } from "./create.js";
import { deleteProductRoute } from "./delete.js";
import { listProductsRoute } from "./list.js";
import { updateProductRoute } from "./update.js";

export const productsRoutes: RouteOptions[] = [
    createProductRoute,
    updateProductRoute,
    listProductsRoute,
    deleteProductRoute
];