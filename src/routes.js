import Index from "./routes/Index.svelte";
import Login from "./routes/Login.svelte";
import Dashboard from "./routes/Dashboard.svelte";
import NotFound from "./routes/NotFound.svelte";
import Gallery from "./routes/Gallery.svelte"

export const routes = {
    '/': Index,
    '/login': Login,
    '/dashboard': Dashboard,
    '*': NotFound,
    '/gallery': Gallery
}