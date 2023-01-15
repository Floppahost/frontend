import Home from "./routes/Home.svelte";
import Login from "./routes/Login.svelte";
import Register from "./routes/Register.svelte";
import Gallery from "./routes/dashboard/Gallery.svelte";
import File from "./routes/File.svelte";
import Admin from "./routes/Admin.svelte";
import NotFound from "./routes/NotFound.svelte";
import Index from "./routes/dashboard/Index.svelte";
import Settings from "./routes/dashboard/Settings.svelte";

export const routes = {
  "/": Home,
  "/login": Login,
  "/register": Register,
  "/file/:handle": File,
  "/admin": Admin,
  '/dashboard': Index,
  "/dashboard/gallery": Gallery,
  "/dashboard/settings": Settings,
  "*": NotFound,
};
