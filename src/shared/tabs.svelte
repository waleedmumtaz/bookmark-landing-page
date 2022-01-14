<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let tabItems
  export let activeTab
</script>

<div>
  <div class="border-t-2 border-b-2">
    <ul class="divide-y-2 text-center">
      {#each tabItems as tabItem}
        <li
          class="py-4 cursor-pointer"
          on:click={() => {
            dispatch('tabChange', tabItem)
          }}
        >
          <div
            class={`${
              tabItem === activeTab
                ? 'border-b-4 border-cstm-primary-soft-red text-black'
                : ''
            } w-fit mx-auto text-lg`}
          >
            {tabItem}
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
