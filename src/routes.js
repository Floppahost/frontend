import Index from "./routes/Index.svelte";
import Login from "./routes/Login.svelte";
import Register from "./routes/Register.svelte";
import Dashboard from "./routes/Dashboard.svelte";
import Gallery from "./routes/Gallery.svelte";
import File from "./routes/File.svelte";
import Admin from "./routes/Admin.svelte";
import NotFound from "./routes/NotFound.svelte";

export const routes = {
  "/": Index,
  "/login": Login,
  "/register": Register,
  "/dashboard": Dashboard,
  "/gallery": Gallery,
  "/file/:handle": File,
  "/admin": Admin,
  "*": NotFound,
};
