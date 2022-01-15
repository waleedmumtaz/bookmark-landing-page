<script>
  import ContactUs from './contact-us.svelte'
</script>

<div class="bg-cstm-neutral-dark-blue text-white">
  <ContactUs />
  <footer class="px-8 py-12 md:container md:mx-auto">
    <div
      class="flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      <div class="md:flex md:justify-between md:items-center md:gap-20">
        <img src="/assets/logo-bookmark-white-text.svg" alt="logo" />
        <ul
          class="md:flex md:items-center space-y-5 md:space-y-0 pt-10 md:py-0 text-center md:gap-16"
        >
          <li
            class="uppercase tracking-widest hover:text-cstm-primary-soft-red cursor-pointer"
          >
            Features
          </li>
          <li
            class="uppercase tracking-widest hover:text-cstm-primary-soft-red cursor-pointer"
          >
            Pricing
          </li>
          <li
            class="uppercase tracking-widest hover:text-cstm-primary-soft-red cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </div>
      <div class="flex justify-center items-center gap-10 pt-10 md:pt-0">
        <img
          src="/assets/icon-facebook.svg"
          alt="facebook icon"
          class="hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        />
        <img
          src="/assets/icon-twitter.svg"
          alt="twitter icon"
          class="hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        />
      </div>
    </div>
  </footer>
  <footer>
    <div
      class="flex justify-center items-center gap-20 text-center pb-4 text-white"
    >
      <p>
        Challenge by <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          class="underline">Frontend Mentor</a
        >
      </p>
      <p>
        Coded by <a
          href="https://github.com/waleedmumtaz"
          target="_blank"
          class="underline">Waleed Mumtaz</a
        >
      </p>
    </div>
  </footer>
</div>
