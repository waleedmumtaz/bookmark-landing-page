<script>
  import { fade } from 'svelte/transition'

  let navDisplay = 'hidden'
  let navIsOpen = false

  const toggleNavigation = () => {
    navDisplay = navDisplay === 'hidden' ? 'block' : 'hidden'
    navIsOpen = !navIsOpen
  }
</script>

<header>
  <nav class="relative">
    <div class="flex justify-between items-center px-8 pt-10">
      <img src="/assets/logo-bookmark.svg" alt="bookmark logo" />
      <button on:click={toggleNavigation}>
        <img src="/assets/icon-hamburger.svg" alt="mobile menu" />
      </button>
    </div>
    {#if navIsOpen}
      <div
        transition:fade
        class={`bg-cstm-neutral-dark-blue opacity-90 px-8 pt-10 absolute inset-0 min-h-screen ${navDisplay} flex flex-col justify-between`}
      >
        <div>
          <div class="flex justify-between items-center pb-8">
            <img src="/assets/logo-bookmark-white.svg" alt="bookmark logo" />
            <button on:click={toggleNavigation}>
              <img src="/assets/icon-close.svg" alt="close mobile menu" />
            </button>
          </div>
          <div class="bg-cstm-neutral-grayish-blue h-[1px]" />
          <div
            class="text-white uppercase tracking-widest leading-10 text-center  divide-cstm-neutral-grayish-blue text-xl"
          >
            <a
              href="/#"
              class="my-3 hover:outline outline-2 outline-white rounded-sm block"
            >
              Features
            </a>
            <div class="bg-cstm-neutral-grayish-blue h-[1px]" />
            <a
              href="/#"
              class="my-3 hover:outline outline-2 outline-white rounded-sm block"
            >
              Pricing
            </a>
            <div class="bg-cstm-neutral-grayish-blue h-[1px]" />
            <a
              href="/#"
              class="my-3 hover:outline outline-2 outline-white rounded-sm block"
            >
              Contact
            </a>
            <div class="bg-cstm-neutral-grayish-blue h-[1px]" />
            <a
              href="/#"
              class="my-3 hover:outline outline-2 outline-white rounded-sm block"
            >
              Login
            </a>
          </div>
        </div>
        <div class="flex justify-center items-center gap-8 pb-10">
          <a href="/#">
            <img src="/assets/icon-facebook.svg" alt="facebook icon" />
          </a>
          <a href="/#">
            <img src="/assets/icon-twitter.svg" alt="twitter icon" />
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>
