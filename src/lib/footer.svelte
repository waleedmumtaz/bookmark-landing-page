<script>
  import ContactUs from './contact-us.svelte'
</script>

<div>
  <ContactUs />
  <div class="bg-cstm-neutral-dark-blue text-white px-8 py-12">
    <div class="flex flex-col items-center justify-center">
      <img src="/assets/logo-bookmark-white-text.svg" alt="logo" />
      <ul class="space-y-5 pt-10 text-center">
        <li class="uppercase tracking-widest">Features</li>
        <li class="uppercase tracking-widest">Pricing</li>
        <li class="uppercase tracking-widest">Contact</li>
        <li>
          <div class="flex justify-center items-center gap-10 pt-5">
            <img src="/assets/icon-facebook.svg" alt="facebook icon" />
            <img src="/assets/icon-twitter.svg" alt="twitter icon" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
