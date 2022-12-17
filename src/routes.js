import Index from "./routes/Index.svelte";
import Login from "./routes/Login.svelte";
import Dashboard from "./routes/Dashboard.svelte";

export const routes = {
    '/': Index,
    '/login': Login,
    '/dashboard': Dashboard
}