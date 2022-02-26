<template>
  <div>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Nuxt-link to="/top" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        salesMemo
      </Nuxt-link>
    </nav>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <login-button/>
      </nav>
    </div>
  </div>
</template>