<script>
  import Tabs from '../shared/tabs.svelte'
  import TabEasySharing from './tab-easy-sharing.svelte'
  import TabSimpleBookmarking from './tab-simple-bookmarking.svelte'
  import TabSpeedySharing from './tab-speedy-sharing.svelte'

  // tabs
  let tabItems = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
  let activeTab = 'Simple Bookmarking'

  const changeTab = (e) => {
    activeTab = e.detail
  }
</script>

<div class="mb-20">
  <div class="px-8">
    <div class="text-center mb-12">
      <h2 class="text-2xl font-bold">Features</h2>
      <p class="text-cstm-neutral-grayish-blue mt-5">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
    </div>

    <Tabs {tabItems} {activeTab} on:tabChange={changeTab} />
    {#if activeTab === 'Simple Bookmarking'}
      <TabSimpleBookmarking />
    {:else if activeTab === 'Speedy Searching'}
      <TabSpeedySharing />
    {:else if activeTab === 'Easy Sharing'}
      <TabEasySharing />
    {/if}
  </div>
</div>
