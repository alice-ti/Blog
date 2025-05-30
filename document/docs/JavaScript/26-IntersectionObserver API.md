# [IntersectionObserver API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

```vue
<template>
  <nav
    ref="NavRef"
    class="w-full py-[16px] px-[60px] bg-[rgba(255,255,255,0.24)] flex items-center justify-between z-[999]"
  >
    <img
      src="@/assets/img/logo-light.png"
      alt="logo"
      class="w-[121px] h-[28px]"
    />

    <a
      class="w-[128px] h-[48px] text-[#fff] hover:text-[#fff] text-[16px] bg-[#2475FF] rounded-[24px] flex justify-center items-center cursor-pointer"
      href="#"
    >
      Login
    </a>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue"

const NavRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([e]) => {
      console.log(e)
      NavRef.value.classList.toggle("toggle", e.intersectionRatio < 1)
    },
    { threshold: [0] }
  )

  if (NavRef.value) {
    observer.observe(NavRef.value)
  }
})
</script>

```
