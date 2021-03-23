<template>
  <div>
    <slot />
    <slot name="images" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
