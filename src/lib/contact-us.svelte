<script>
  const validateEmail = (e) => {
    // Validate email
    console.log('Here!')
  }
</script>

<div>
  <div class="bg-cstm-primary-soft-blue text-white px-8 py-16 text-center">
    <div>
      <p class="uppercase text-sm tracking-widest">35,000+ already joined</p>
      <h3 class="text-2xl mt-2">Stay up-to-date with what we’re doing</h3>
    </div>
    <form on:submit|preventDefault={validateEmail} class="flex flex-col gap-5">
      <input
        type="text"
        name="email"
        placeholder="Enter your email address"
        class="placeholder-gray-500 w-full p-3 rounded-md mt-8"
      />
      <button
        type="button"
        class="bg-cstm-primary-soft-red w-full p-3 rounded-md"
      >
        Contact Us
      </button>
    </form>
  </div>
</div>
