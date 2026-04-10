import type { RouteOptions } from "../../server/types.js";
import { createBookingRoute } from "./create.js";
import { deleteBookingRoute } from "./delete.js";
import { listBookingsRoute } from "./list.js";
import { updateBookingRoute } from "./update.js";

export const bookingsRoutes: RouteOptions[] = [
    createBookingRoute,
    listBookingsRoute,
    deleteBookingRoute,
    updateBookingRoute
]