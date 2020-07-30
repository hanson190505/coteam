<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <h1>{{ bodyData.title }}</h1>
    </div>
    <div class="col-span-2">
      <nav>
        <ul>
          <li v-for="link of bodyData.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="col-span-10">
      <nuxt-content :document="bodyData" />
      <prev-next :prev="prev" :next="next" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const bodyData = await $content('cssbasic', params.slug).fetch()
    const [prev, next] = await $content('cssbasic')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { bodyData, prev, next }
  }
}
</script>

<style>
h1 {
  font-weight: bold;
  font-size: 2rem;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 1.5rem;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 1.2rem;
}
.nuxt-content p {
  font-size: 1rem;
}
</style>
