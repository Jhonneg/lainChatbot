<template>
  <div class="bg-no-repeat bg-right-bottom bg-black w-full h-full font-sans">
    <div class="flex flex-col items-center justify-center h-full">
      <div
        class="max-w-[800px] relative z-20 shadow-lg after:content-[' '] after:z-[-1] after:h-full after:bg-slate-900 after:border after:border-slate-900 after:absolute after:left-2.5 after:right-2.5 after:top-0 after:mt-2 after:rounded"
      >
        <div class="bg-black border border-slate-900 p-6 rounded">
          <!-- Start Screen -->
          <Start v-if="!isChatting" />

          <!-- Chat Screen -->
          <Chat v-else />
          <p class="text-gray-300 text-center mt-8">
            Made by
            <a href="https://github.com/Jhonneg">
              <img
                class="inline mx-1"
                width="30"
                src="/public/github-mark-white.svg"
                alt="github"
            /></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isChatting = useIsChatting();
</script>

<style>
html,
body,
#__nuxt {
  width: 100%;
  height: 100%;
}
</style>
