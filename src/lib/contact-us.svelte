<script>
  let isEmailValid = true

  const validateEmail = (e) => {
    // Validate email
    const email = e.target.email.value

    // check if email is valid
    if (email.includes('@') && email.includes('.') && email.length > 5) {
      isEmailValid = true
    } else {
      isEmailValid = false
    }
  }
</script>

<div class="bg-cstm-primary-soft-blue text-white px-8 py-16 text-center">
  <div class="md:container md:mx-auto">
    <div class="md:max-w-lg md:mx-auto">
      <p class="uppercase text-sm tracking-widest">35,000+ already joined</p>
      <h3 class="text-2xl md:text-3xl mt-2">
        Stay up-to-date with what we’re doing
      </h3>
    </div>
    <form
      on:submit|preventDefault={validateEmail}
      class="md:max-w-lg md:mx-auto flex flex-col md:flex-row md:items-center md:gap-5"
    >
      <div class="w-full">
        <input
          type="text"
          name="email"
          placeholder="Enter your email address"
          class={`placeholder-gray-500 w-full p-3 rounded-md mt-8 md:mt-6 text-black ${
            !isEmailValid ? 'outline outline-2 outline-red-500 border-t-0' : ''
          }`}
        />
        <p
          class={`hidden md:block bg-red-500 text-xs text-left px-3 py-1 italic ${
            !isEmailValid ? 'visible' : 'invisible'
          }`}
        >
          Whoops, make sure it's an email
        </p>
      </div>
      <p
        class={`md:hidden bg-red-500 text-xs text-left px-3 py-1 italic ${
          !isEmailValid ? 'visible' : 'invisible'
        }`}
      >
        Whoops, make sure it's an email
      </p>
      <button
        class="bg-cstm-primary-soft-red hover:bg-white hover:text-cstm-primary-soft-red hover:outline outline-2 outline-cstm-primary-soft-red w-full mt-5 md:mt-0 p-3 rounded-md"
      >
        Contact Us
      </button>
    </form>
  </div>
</div>
