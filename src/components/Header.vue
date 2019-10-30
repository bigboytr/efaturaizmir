<template>
  <header class="row">
    <div class="col-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">E-Fatura İzmir</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li v-for="(item, key) in navs" :key="key" class="nav-item" :class="(item.active) ? 'active' : ''">
              <router-link :to="item.path" tag="a" class="nav-link"></router-link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
    data() {
      return {
          navs: [
              {
                  title: 'E-Fatura',
                  path: '/',
                  active: true
              },
              {
                  title: 'Neden E-Fatura',
                  path: 'neden-efatura',
                  active: false
              },
              {
                  title: 'Paketler',
                  path: '/paketler',
                  active: false
              },
              {
                  title: 'Başvuru',
                  path: 'efatura-basvuru',
                  active: false
              }
          ]
      }
    }

}
</script>