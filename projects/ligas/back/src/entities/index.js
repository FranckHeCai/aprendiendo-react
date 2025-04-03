// import userRoutes from "./user/adapters/http";
// import userSockets from './user/adapters/socket';
import equiposRoutes from "./equipos/adapters/http"
import jugadoresRoutes from "./jugadores/adapters/http"

export const Routes = (app) => {
  equiposRoutes(app, "/equipos")
  jugadoresRoutes(app, "/jugadores")
};

export const Sockets = (io, socket) => {
  // userSockets(io, socket);
};
