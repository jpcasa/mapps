<template lang="html">
  <div class="top-bar-container">
    <div class="top-bar">
      <div class="top-bar-left">
        <i class="icon-menu" />
        <i class="icon-star" />
      </div>
      <div class="top-bar-center">
        <nuxt-link to="/app/perfil">
          <img
            src="/1x/logo-white.png"
            alt="Logo Mapps360 Blanco">
        </nuxt-link>
      </div>
      <div class="top-bar-right">
        <i class="icon-bell" />
        <span class="user-img">
          <nuxt-link to="/app/perfil">
            <img
              :src="'/1x/user.png'"
              alt="Username">
          </nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.top-bar {
  @apply flex bg-blue-darker px-4 py-2 items-center;
  .top-bar-left,
  .top-bar-right {
    @apply flex-none text-white cursor-pointer;
    i {
      @apply inline-block mr-1;
      &:hover {
        @apply text-blue;
      }
    }
  }
  .top-bar-center {
    @apply flex-auto text-center;
    img {
      @apply w-36 inline-block relative;
      top: 2px;
    }
  }
  .top-bar-right {
    @apply flex items-center;
    .user-img {
      @apply w-6 h-6 inline-block rounded-full overflow-hidden border border-white ml-1;
      &:hover {
        @apply border-blue;
      }
    }
  }
}
</style>
