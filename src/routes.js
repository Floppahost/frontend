import Index from "./routes/Index.svelte";
import Login from "./routes/Login.svelte";
import Dashboard from "./routes/Dashboard.svelte";
import Gallery from "./routes/Gallery.svelte";
import NotFound from "./routes/NotFound.svelte";


export const routes = {
    '/': Index,
    '/login': Login,
    '/dashboard': Dashboard,
    '/gallery': Gallery,
    '*': NotFound
}