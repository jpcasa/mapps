<template lang="html">
  <div class="top-bar-container">
    <div class="top-bar">

      <!-- MOBILE ITEMS -->
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

      <!-- DESKTOP -->
      <div class="top-bar-left-desktop">
        <nuxt-link to="/app/perfil">
          <img
            src="/1x/logo-white.png"
            alt="Logo Mapps360 Blanco">
        </nuxt-link>
      </div>

      <div class="top-bar-center-desktop">
        <nav>
          <nuxt-link
            v-for="(item, i) in main_menu"
            :key="i"
            :to="item.url">
            {{ item.title }}
          </nuxt-link>
        </nav>
      </div>

      <div class="top-bar-right-desktop">
        <nav class="icons-menu">
          <nuxt-link
            class="icons-menu-item"
            to="/">
            <span class="icon-message-circle" />
          </nuxt-link>
          <nuxt-link
            class="icons-menu-item"
            to="/">
            <span class="icon-pie-chart" />
          </nuxt-link>
          <p class="icons-menu-item">
            <span class="icon-bell" />
          </p>
        </nav>
        <div class="profile-section">
          <span class="user-img">
            <nuxt-link to="/app/perfil">
              <img
                :src="'/1x/user.png'"
                alt="Username">
            </nuxt-link>
          </span>
          <div class="info">
            <nuxt-link
              class="username"
              to="/">
              {{ full_name }}
            </nuxt-link>
            <p class="role">{{ user_role }}</p>
          </div>
          <div class="more-info">
            <span class="icon-more-horizontal" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      main_menu: state => state.menus.main_menu
    }),
    ...mapGetters({
      full_name: 'auth/full_name',
      user_role: 'auth/user_role'
    })
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/mixins.scss';
@import '~/assets/sass/helpers/crm_variables.scss';

.top-bar {
  @apply flex bg-blue-darker px-4 items-center;

  // Shared
  .user-img {
    @apply w-6 h-6 inline-block rounded-full overflow-hidden border border-white ml-1;
    &:hover {
      @apply border-blue;
    }
  }

  // MOBILE
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
  }
  .top-bar-left,
  .top-bar-center,
  .top-bar-right {
    @include mq_lg {
      @apply hidden;
    }
  }

  // DESKTOP
  .top-bar-left-desktop {
    @apply flex-auto;
    img {
      @apply w-40 relative flex;
    }
  }
  .top-bar-center-desktop {
    @apply flex-none pr-4;
    nav {
      a {
        @apply text-sm text-grey-dark inline-block mx-2;
        &:hover {
          @apply text-white;
        }
      }
      a.nuxt-link-exact-active {
        @apply text-white;
      }
    }
  }
  .top-bar-right-desktop {
    @apply flex flex-none;
    .icons-menu {
      @apply flex items-center;
      a,
      p {
        @apply inline-block text-white py-3 border-l border-blue-darkest px-3 text-lg cursor-pointer;
        &:hover {
          @apply bg-blue;
        }
      }
      p {
        @apply border-r;
      }
    }
    .profile-section {
      @apply flex ml-4 items-center;
      .info {
        @apply mx-2;
        .username,
        .role {
          @apply text-xs;
        }
        .username {
          @apply text-white block mb-0;
          font-family: $gotham-medium;
          &:hover {
            @apply text-blue;
          }
        }
      }
      .user-img {
        @apply w-7 h-7 relative;
        bottom: 1px;
      }
      .more-info {
        span {
          @apply text-xl cursor-pointer;
          &:hover {
            @apply text-blue;
          }
        }
      }
    }
  }
}
</style>
