<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import Header from "./lib/Header.svelte";
</script>


<div class="text-white font-default">
  <slot>
    <Router {routes}>
  <Header>hi</Header>
</Router>
</slot>
</div>

