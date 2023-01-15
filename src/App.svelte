<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import {location} from 'svelte-spa-router'
  import Header from "./components/Header.svelte";
  import Transition from "./components/Transition.svelte";
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
    <Transition path={$location}>
      <Router {routes} />
    </Transition>
    {:else}
      <AccessDenied />
    {/if}
  </Header>
</div> 