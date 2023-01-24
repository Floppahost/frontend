<script>
  import { toast } from "@zerodevx/svelte-toast";
  import { onMount } from "svelte";
  import Card from "../../components/Card.svelte";
  import Response from "../../components/Response.svelte";
  import { error, success } from "../../components/toaster/Themes";
  import { loggedIn, uid, username } from "../../stores.js";
  let form = {};
  let response = {};

  let isLoggedIn = false;
  let usernameValue;
  let uidValue;

  let invites = [];
  const updatePassword = async () => {
    await fetch("https://api.floppa.host/preferences/change/password", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    }).then((res) => {
      res.json().then((data) => {
        if (res.status != 200) {
          toast.push(data.message, error);
        } else {
          toast.push(data.message, success);
        }
      });
    });
  };

  onMount(() => {
    fetch("https://api.floppa.host/preferences/get/invites", {
      credentials: "include",
    }).then((res) => {
      res.json().then((data) => {
        invites = data.invites;
      });
    });
  });
  const downloadConfig = async () => {
    await fetch("https://api.floppa.host/preferences/get/config", {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        const blob = new Blob([data.config], { type: "text/plain" });
        const el = document.createElement("a");
        el.download = "floppa-config.sxcu";
        el.href = URL.createObjectURL(blob);
        el.dataset.downloadurl = ["text/plain", el.download, el.href].join(":");
        el.style.display = "none";
        document.body.appendChild(el);
        el.click();
        document.body.removeChild(el);
        toast.push("Config downloaded", success);
      })
    );
  };

  loggedIn.subscribe((v) => {
    isLoggedIn = v;
    if (!v) {
      location.href = "/";
    }
  });

  username.subscribe((v) => {
    usernameValue = v;
  });

  uid.subscribe((v) => {
    uidValue = v;
  });
</script>

<div class="flex h-screen">
  {#if isLoggedIn}
    <div class="mx-auto mt-48">
      <p class="font-bold text-5xl mb-4">Dashboard</p>
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 pb-12">
        <Card title="Account details" additional="sm:col-span-2">
          Welcome back, {usernameValue}
        </Card>
        <Card title="Change password" additional={"h-[10rem]"}>
          <form
            method="post"
            class="grid grid-cols-1 mt-2"
            on:submit|preventDefault={updatePassword}
          >
            <Response status={response.status} message={response.message} />
            <input
              type="password"
              placeholder="Old password"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg"
              bind:value={form.old_password}
              required
            />
            <input
              type="password"
              placeholder="New password"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
              bind:value={form.new_password}
              required
            />
            <button
              type="submit"
              class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60"
            >
              Change password
            </button>
          </form>
        </Card>
        <Card title="Invites" additional={"h-[18rem] max-w-[22rem]"}>
          <div class="overflow-y-auto mt-3 h-[12rem] rounded-t-lg">
            {#if invites.length === 0}
              <div class="flex h-full justify-center items-center">
                <span class="text-center text-[#606060]"
                  >You don't have any invitation code</span
                >
              </div>
            {:else}
              <table
                class="w-full text-left text-sm text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="border-b border-zinc-700 bg-neutral-800 text-gray-400"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3">Code</th>
                    <th scope="col" class="px-6 py-3">Used by</th>
                  </tr>
                </thead>
                <tbody>
                  {#each invites as invite}
                    <tr class="border-b border-zinc-700">
                      <td
                        on:keydown={() =>
                          navigator.clipboard.writeText(invite.code)}
                        on:click={() =>
                          navigator.clipboard.writeText(invite.code)}
                        class="hover:underline cursor-pointer hover:text-[#03e8fc] max-w-0 overflow-hidden whitespace-nowrap text-ellipsis px-6 py-3"
                        >{invite.code}</td
                      >
                      <td
                        class="max-w-0 overflow-hidden whitespace-nowrap text-ellipsis px-6 py-3"
                        >{invite.username === null
                          ? "Not used"
                          : invite.username}</td
                      >
                    </tr>
                  {/each}
                </tbody>
              </table>
            {/if}
          </div>
        </Card>
        <Card title="Config" additional="relative bottom-[7.8rem]">
          <button
            on:click={downloadConfig}
            type="submit"
            class="w-full mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60"
          >
            Download config
          </button>
        </Card>
      </div>
    </div>
  {/if}
</div>
