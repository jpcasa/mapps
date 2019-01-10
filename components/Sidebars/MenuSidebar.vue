<template lang="html">
  <div>
    <section class="menu-sidebar-container">
      <div class="menu-sidebar">
        <div class="close-menu-sidebar">
          <i
            class="icon-x-circle"
            @click="closeSidebar()" />
        </div>
        <div class="info-menu-sidebar">
          <div class="user-img-big">
            <img
              :src="user.avatar"
              alt="username">
          </div>
          <nuxt-link
            class="username"
            to="/app/perfil">
            {{ full_name }}
          </nuxt-link>
          <p class="role">{{ user_role }}</p>
        </div>
        <div class="list-menu-sidebar">
          <ul>
            <li
              v-for="(item, i) in sidebar_menu"
              :key="i"
              :class="item.active ? 'active' : ''">
              <nuxt-link :to="item.url">
                <i :class="item.icon" />
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="logout-menu-sidebar">
          <nuxt-link to="/auth/logout">
            <i class="icon-log-out" /> Cerrar Sesión
          </nuxt-link>
        </div>
      </div>
      <div
        class="menu-sidebar-right"
        @click="closeSidebar()" />
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
    ...mapGetters({
      full_name: 'auth/full_name',
      user_role: 'auth/user_role',
      sidebar_menu: 'menus/sidebarMenu'
    })
  },
  methods: {
    closeSidebar() {
      this.$emit('close-sidebar')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/sass/helpers/crm_variables.scss';

.menu-sidebar-container {
  @apply flex;
  .menu-sidebar-right {
    @apply flex-auto bg-white opacity-50 cursor-pointer;
  }
  .menu-sidebar {
    @apply bg-white w-64 h-screen cursor-default flex-none flex flex-col;
    .close-menu-sidebar,
    .info-menu-sidebar,
    .logout-menu-sidebar {
      @apply flex-none px-6;
    }
    .close-menu-sidebar {
      i {
        @apply text-2xl py-4 inline-block cursor-pointer;
        &:hover {
          @apply text-blue;
        }
      }
    }
    .info-menu-sidebar {
      @apply mt-4;
      .user-img-big {
        @apply w-16 h-16 rounded-full overflow-hidden;
      }
      .username {
        @apply text-blue-darker mt-4 block;
        font-family: $gotham-medium;
      }
      .role {
        @apply text-sm;
      }
    }
    .list-menu-sidebar {
      @apply flex-auto flex items-center;
      ul {
        @apply list-reset block w-full;
        li {
          @apply pl-6 py-3 border-l-4 border-white;
          &:hover {
            @apply border-blue;
            a,
            i {
              @apply text-blue;
            }
          }
          a {
            @apply text-grey-dark;
          }
          i {
            @apply relative inline-block mr-2;
            top: 1px;
          }
        }
        li.active {
          @apply border-blue;
          a,
          i {
            @apply text-blue;
          }
        }
      }
    }
    .logout-menu-sidebar {
      @apply mb-4;
      a {
        @apply text-blue-darker;
        font-family: $gotham-medium;
        &:hover {
          @apply text-blue;
        }
      }
    }
  }
}
</style>
