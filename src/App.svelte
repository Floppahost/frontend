<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes";
  import {location} from 'svelte-spa-router'
  import Header from "./components/Header.svelte";
  import Transition from "./components/Transition.svelte";
  import { onMount } from "svelte";
  import AccessDenied from "./routes/AccessDenied.svelte";
    import { loggedIn } from "./stores";

  $: status = 401;
  // auth validator
  onMount(async () => {
       await fetch("https://api.floppa.host/auth/status", {
            credentials: "include"
        }).then((res)=>
        {
            if (res.status === 202) {
                loggedIn.set(true)
            }
        })
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