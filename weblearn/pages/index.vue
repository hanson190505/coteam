<template>
  <div class="grid grid-cols-6 gap-4">
    <div v-for="(item, index) in webData" :key="index" class="col-span-2 text-center">
      <h1>{{item.title}}</h1>
      <ul>
        <li v-for="i of item.data" :key="i.slug">
          <NuxtLink :to="{name:item.link, params:{slug:i.slug}}">
            <div>{{i.title}}</div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tools = await $content('frontendtools', params.slug)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const html = await $content('HTML', params.slug)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const css = await $content('cssbasic', params.slug)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    const webData = {
      tools: {
        data: Object,
        title: 'web工具使用',
        link: 'weblearn-slug'
      },
      html: {
        data: Object,
        title: 'HTML详解',
        link: 'htmldetail-slug'
      },
      css: {
        data: Object,
        title: 'CSS基础',
        link: 'cssbasic-slug'
      }
    }
    webData.tools.data = tools
    webData.html.data = html
    webData.css.data = css
    return {
      webData
    }
  }
}
</script>

<style>
</style>
