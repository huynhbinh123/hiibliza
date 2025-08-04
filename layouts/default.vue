<template>
  <div class="min-h-screen w-full relative">
    <div
      class="fixed -z-1 top-0 left-0 w-screen h-screen gradient-background"
    ></div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style>
.gradient-background {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(45deg, #f5c9ef, #f2e8fd, #bfe6c5);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
}

/* Keyframes tạo hiệu ứng chuyển động mượt */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
