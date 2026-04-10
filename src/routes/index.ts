import { Router } from "express";
import { opsRoutes } from "./ops/index.js";
import type { RouteOptions } from "../server/types.js";
import type { Express } from "express";
import { productsRoutes } from "./products/index.js";
import { banksRoutes } from "./banks/index.js";
import {bookingsRoutes} from "./bookings/index.js"
import {categorieRoutes} from "./categories/index.js"
import {contactRoutes} from "./contacts/index.js"
import {usersRoutes} from "./users/index.js"

const router = Router();

const routes = [
  ...opsRoutes,
  ...productsRoutes,
  ...banksRoutes,
  ...bookingsRoutes,
  ...usersRoutes,
  ...contactRoutes,
  ...categorieRoutes
];

export const registerRoutes = (server: Express ): Router => {
  console.warn('[server]: Registering routes');

  routes.forEach((route: RouteOptions) => {
    const { method, url, handler } = route;

    switch (method) {
      case 'GET':
        router.get(url, handler);
        break;
      case 'POST':
        router.post(url, handler);
        break;
      case 'PUT':
        router.put(url, handler);
        break;
      case 'PATCH':
        router.patch(url, handler);
        break;
      case 'DELETE':
        router.delete(url, handler);
        break;
      default:
        console.warn(`[server]: Invalid method "${method}" for route ${url}`);
        break;
    }
  });

  server.use(router);

  return router;
};