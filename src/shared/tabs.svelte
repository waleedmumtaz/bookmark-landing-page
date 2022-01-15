<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let tabItems
  export let activeTab
</script>

<div>
  <div class="border-t-2 md:border-t-0 border-b-2 md:w-fit md:mx-auto">
    <ul
      class="divide-y-2 md:divide-y-0 text-center md:flex md:justify-center md:items-center md:gap-20"
    >
      {#each tabItems as tabItem}
        <li
          class="py-4 cursor-pointer hover:text-cstm-primary-soft-red"
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
