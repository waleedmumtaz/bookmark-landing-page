<script>
  import DownloadExtension from './lib/download-extension.svelte'
  import Faqs from './lib/faqs.svelte'
  import Features from './lib/features.svelte'
  // import Footer from './lib/footer.svelte'
  import Header from './lib/header.svelte'
  import Hero from './lib/hero.svelte'
</script>

<svelte:head>
  <title>Bookmark Landing Page</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="min-h-screen font-rubik">
  <Header />
  <Hero />
  <Features />
  <DownloadExtension />
  <Faqs />
  <!-- <Footer /> -->
</div>
