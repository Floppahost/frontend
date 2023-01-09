<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import Header from "./components/Header.svelte";
  import { onMount } from "svelte";
  import AccessDenied from "./routes/AccessDenied.svelte";

  $: status = 401;

  // auth validator
  onMount(async () => {
    let response = await fetch("/status", {
      method: "post",
      credentials: "include",
    });

    status = response.status;
  });
</script>

<div class="text-white font-default mx-2">
  <Header>
    {#if status != 202}
      <Router {routes} />
    {:else}
      <AccessDenied />
    {/if}
  </Header>
</div>
