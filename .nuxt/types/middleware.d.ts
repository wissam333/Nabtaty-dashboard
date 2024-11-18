import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth-product-exists" | "auth" | "not-authorize" | "supplier-company" | "validate-id-digital"
declare module "../../node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}