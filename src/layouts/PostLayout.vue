<template>
  <div>
    <Navbar />
    <div class="row">
      <div class="columns is-tablet">
        <div class="column is-6 is-offset-3">
          <div class="container is-max-widescreen px-4">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

