import type { RouteOptions } from "../../server/types.js";
import { createBankRoute } from "./create.js";
import { deleteBankRoute } from "./delete.js";
import { listBanksRoute } from "./list.js";
import { updateBankRoute } from "./update.js";

export const banksRoutes: RouteOptions[] = [
    createBankRoute,
    listBanksRoute,
    deleteBankRoute,
    updateBankRoute
    
];