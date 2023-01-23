<script>
  // @ts-nocheck

  import Card from "../../components/Card.svelte";
  import { loggedIn } from "../../stores";
  import Slider from "@bulatdashiev/svelte-slider";
  import { onMount } from "svelte";
  import { toast } from "@zerodevx/svelte-toast";
  import { error, success } from "../../components/toaster/Themes";

  let customPath;
  let quantity = [1, 5];

  let isLoggedIn = false;
  loggedIn.subscribe((v) => {
    isLoggedIn = v;
    if (!v) {
      location.href = "/";
    }
  });

  let form = {
    site_name: "",
    site_name_url: "",
    author: "",
    author_url: "",
    title: "",
    description: "",
    color: "",
  };
  let response = {};
  let domains = {
    selected: undefined,
    domains: [{ domain: "", wildcard: false }],
  };

  let paths = {
    selected: undefined,
    pages: ["Random", "Emojis", "AmongUs", "AmongUs + Emojis", "Custom"],
  };

  const updatePath = async () => {
    let pathMode = "";
    switch (paths.selected) {
      case "Emojis":
        pathMode = "emoji";
        break;
      case "AmongUs":
        pathMode = "amongus";
        break;
      case "AmongUs + Emojis":
        pathMode = "amongus_emoji";
        break;
      case "Custom":
        pathMode = "custom";
        break;
      default:
        pathMode = "random";
    }
    await fetch("https://api.floppa.host/preferences/change/path", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        mode: pathMode,
        path: customPath,
        amount: quantity[0],
      }),
    }).then((res) => {
      res.json().then((data) => {
        if (res.status !== 200) {
          toast.push(data.message, error);
        } else {
          toast.push(data.message, success);
        }
      });
    });
  };

  async function changeEmbed() {
    await fetch("https://api.floppa.host/preferences/change/embed", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    }).then((res) => {
      res.json().then((data) => {
        if (res.status !== 200) {
          toast.push(data.message, error);
        } else {
          toast.push(data.message, success);
        }
      });
    });
  }

  const changeDomain = async () => {
    await fetch("https://api.floppa.host/preferences/change/domain", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        domain: domains.selected,
      }),
    }).then((res) => {
      res.json().then((data) => {
        if (res.status !== 200) {
          toast.push(data.message, error);
        } else {
          toast.push(data.message, success);
        }
      });
    });
  };

  onMount(async () => {
    fetch("https://api.floppa.host/preferences/get/domains", {
      credentials: "include",
    }).then((res) => {
      res.json().then((data) => {
        domains.domains = data.domains;
      });
    });
    fetch("https://api.floppa.host/preferences/get/embed", {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        form.site_name = data.site_name;
        form.site_name_url = data.site_name_url;
        form.author = data.author;
        form.author_url = data.author_url;
        form.title = data.title;
        form.description = data.description;
        form.color = data.color;
        domains.selected = data.domain;
        customPath = data.path;
        quantity[0] = data.path_amount;
        paths.selected = data.path_mode;
      })
    );
  });
</script>

<div class="flex h-screen">
  {#if isLoggedIn}
    <div class="m-auto">
      <div class="grid grid-cols-2 gap-4">
        <Card title="Change embed">
          <form
            method="post"
            class="grid grid-cols-1 mt-2"
            on:submit|preventDefault={changeEmbed}
          >
            <input
              type="text"
              placeholder="Embed site name"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
              bind:value={form.site_name}
            />
            <input
              type="text"
              placeholder="Embed site url"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
              bind:value={form.site_name_url}
            />
            <input
              type="text"
              placeholder="Embed author"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
              bind:value={form.author}
            />
            <input
              type="text"
              placeholder="Embed author url"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
              bind:value={form.author_url}
            />

            <input
              type="text"
              placeholder="Embed title"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
              bind:value={form.title}
            />
            <input
              type="text"
              placeholder="Embed description"
              class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
              bind:value={form.description}
            />
            <div
              class="flex w-80 bg-neutral-800 text-sm px-2 py-px rounded-lg mt-1 my-auto"
            >
              <input
                type="color"
                class="h-4 w-4 my-auto"
                bind:value={form.color}
              />
              <input
                type="text"
                placeholder="Embed color (use hex)"
                class="outline-none bg-transparent ml-2"
                bind:value={form.color}
              />
            </div>
            <button
              type="submit"
              class="mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60"
            >
              Change embed settings
            </button>
          </form>
        </Card>
        <Card title="Embed preview" additional="h-min">
          <div class="flex justify-center items-center h-[15rem]">
            <article
              class="px-4 flex border-l-[4px] rounded-[4px] bg-[#2f3136] border-red-500"
            >
              <span
                class="hover:underline text-[#7e7f81] text-[0.8rem] font-[400]"
                >{form.site_name}</span
              >
            </article>
          </div>
        </Card>
        <Card title="Change path" additional="h-min">
          <select
            bind:value={paths.selected}
            class="mt-2 bg-neutral-800 text-sm border border-neutral-700 px-2 w-full"
          >
            {#each paths.pages as page}
              <option value={page}>
                {page}
              </option>
            {/each}
          </select>
          {#if paths.selected === "AmongUs" || paths.selected === "AmongUs + Emojis" || paths.selected === "Emojis"}
            <span>Quantity: {quantity[0]}</span>
            <Slider bind:value={quantity} step={1} min={1} max={5} />
          {/if}

          {#if paths.selected === "Custom"}
            <div>
              <input
                class="w-80 bg-neutral-800 outline-none text-sm px-2 py-px rounded-lg mt-1"
                type="text"
                bind:value={customPath}
                placeholder="Custom path"
              />
            </div>
          {/if}
          <button
            on:click={updatePath}
            type="submit"
            class="w-full mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60"
          >
            Save new path
          </button>
        </Card>
        <Card title="Change domain" additional="h-min">
          <select
            bind:value={domains.selected}
            class="mt-2 bg-neutral-800 text-sm border border-neutral-700 px-2 w-full"
          >
            {#each domains.domains as domain}
              <option value={domain["domain"]}>
                {domain["domain"]}
              </option>
            {/each}
          </select>
          <button
            on:click={changeDomain}
            class="w-full mt-4 px-4 py-px font-bold rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/60"
          >
            Change the domain
          </button>
        </Card>
      </div>
    </div>
  {/if}
</div>
