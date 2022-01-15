<script>
  import ArrowIcon from './arrow-icon.svelte'

  let arrowIconsStyles = [
    {
      styles: '',
      stroke: '#5267DF',
    },
    {
      styles: '',
      stroke: '#5267DF',
    },
    {
      styles: '',
      stroke: '#5267DF',
    },
    {
      styles: '',
      stroke: '#5267DF',
    },
  ]

  const toggleFaq = (faqNumber) => {
    switch (faqNumber) {
      case 'questionOne':
        arrowIconsStyles[0].styles =
          arrowIconsStyles[0].styles === '' ? 'rotate-180' : ''
        arrowIconsStyles[0].stroke =
          arrowIconsStyles[0].stroke === '#5267DF' ? '#FA5757' : '#5267DF'
        break
      case 'questionTwo':
        arrowIconsStyles[1].styles =
          arrowIconsStyles[1].styles === '' ? 'rotate-180' : ''
        arrowIconsStyles[1].stroke =
          arrowIconsStyles[1].stroke === '#5267DF' ? '#FA5757' : '#5267DF'
        break
      case 'questionThree':
        arrowIconsStyles[2].styles =
          arrowIconsStyles[2].styles === '' ? 'rotate-180' : ''
        arrowIconsStyles[2].stroke =
          arrowIconsStyles[2].stroke === '#5267DF' ? '#FA5757' : '#5267DF'
        break
      case 'questionFour':
        arrowIconsStyles[3].styles =
          arrowIconsStyles[3].styles === '' ? 'rotate-180' : ''
        arrowIconsStyles[3].stroke =
          arrowIconsStyles[3].stroke === '#5267DF' ? '#FA5757' : '#5267DF'
        break
      default:
        break
    }
  }
</script>

<div class="mb-40 bgcstm">
  <div class="px-8">
    <div class="text-center">
      <h2 class="font-bold text-2xl">Frequently Asked Questions</h2>
      <p class="text-cstm-neutral-grayish-blue mt-3">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
    </div>

    <!-- FAQs -->
    <div class="mt-10">
      <!-- Question 1 -->
      <details>
        <summary
          on:click={() => {
            toggleFaq('questionOne')
          }}
          class="flex justify-between items-center py-4 border-b-2"
        >
          What is Bookmark?
          <ArrowIcon
            iconStroke={arrowIconsStyles[0].stroke}
            iconStyles={arrowIconsStyles[0].styles}
          />
        </summary>
        <p class="text-sm py-4 mr-5 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis
          quam ornare mattis.
        </p>
      </details>
      <!-- Question 2 -->
      <details>
        <summary
          on:click={() => {
            toggleFaq('questionTwo')
          }}
          class="flex justify-between items-center py-4 border-b-2"
        >
          How can I request a new browser?
          <ArrowIcon
            iconStroke={arrowIconsStyles[1].stroke}
            iconStyles={arrowIconsStyles[1].styles}
          />
        </summary>
        <p class="text-sm py-4 mr-5 leading-8">
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </p>
      </details>
      <!-- Question 3 -->
      <details>
        <summary
          on:click={() => {
            toggleFaq('questionThree')
          }}
          class="flex justify-between items-center py-4 border-b-2"
        >
          Is there a mobile app?
          <ArrowIcon
            iconStroke={arrowIconsStyles[2].stroke}
            iconStyles={arrowIconsStyles[2].styles}
          />
        </summary>
        <p class="text-sm py-4 mr-5 leading-8">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus
          vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
          quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex
          et ultricies bibendum.
        </p>
      </details>
      <!-- Question 4 -->
      <details>
        <summary
          on:click={() => {
            toggleFaq('questionFour')
          }}
          class="flex justify-between items-center py-4 border-b-2"
        >
          What about other Chromium browsers?
          <ArrowIcon
            iconStroke={arrowIconsStyles[3].stroke}
            iconStyles={arrowIconsStyles[3].styles}
          />
        </summary>
        <p class="text-sm py-4 mr-5 leading-8">
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
          mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque
          non ut velit.
        </p>
      </details>
    </div>
    <div class="flex justify-center items-center">
      <button
        class="bg-cstm-primary-soft-blue text-white mt-10 px-6 py-3 rounded-md"
      >
        More Info</button
      >
    </div>
  </div>
</div>
