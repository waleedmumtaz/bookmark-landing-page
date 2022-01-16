<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let tabItems
  export let activeTab
</script>

<div class="px-8">
  <div class="border-t-2 md:border-t-0 border-b-2 md:w-fit md:mx-auto">
    <ul
      class="divide-y-2 md:divide-y-0 text-center md:flex md:justify-center md:items-center md:gap-20"
    >
      {#each tabItems as tabItem}
        <li
          class="py-4 cursor-pointer hover:text-cstm-primary-soft-red relative"
          on:click={() => {
            dispatch('tabChange', tabItem)
          }}
        >
          <div
            class={`${
              tabItem === activeTab
                ? 'after:absolute after:w-1/3 md:after:w-full after:h-1 after:left-0 after:right-0 after:bottom-[-1px] after:mx-auto after:bg-cstm-primary-soft-red after:z-10'
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
