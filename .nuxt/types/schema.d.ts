import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["fontawesome"]?: typeof import("@vesp/nuxt-fontawesome").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["swiper"]?: typeof import("nuxt-swiper").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vuetify"]?: typeof import("@invictus.codes/nuxt-vuetify").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["aos"]?: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["veeValidate"]?: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["primevue"]?: typeof import("@primevue/nuxt-module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["googleSignIn"]?: typeof import("nuxt-vue3-google-signin").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["leaflet"]?: typeof import("@nuxtjs/leaflet").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@vesp/nuxt-fontawesome", Exclude<NuxtConfig["fontawesome"], boolean>] | ["nuxt-swiper", Exclude<NuxtConfig["swiper"], boolean>] | ["@invictus.codes/nuxt-vuetify", Exclude<NuxtConfig["vuetify"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-aos", Exclude<NuxtConfig["aos"], boolean>] | ["@vee-validate/nuxt", Exclude<NuxtConfig["veeValidate"], boolean>] | ["@primevue/nuxt-module", Exclude<NuxtConfig["primevue"], boolean>] | ["nuxt-vue3-google-signin", Exclude<NuxtConfig["googleSignIn"], boolean>] | ["@nuxtjs/leaflet", Exclude<NuxtConfig["leaflet"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   serverApiBase: string,

   serverApi: any,
  }
  interface PublicRuntimeConfig {
   apiBase: string,

   api: {
      DeletePlant: string,

      GetHomePhotos: string,

      CreatHomePhoto: string,

      RemoveHomeImg: string,

      findAllCategories: string,

      AddProduct: string,

      GetLocations: string,

      GetPlantById: string,

      GetSubCat: string,

      GetSubById: string,

      UpdatePlantPhoto: string,

      GetContactInfo: string,

      AddContactInfo: string,

      EditContactInfo: string,

      DeleteContactInfo: string,

      GEtContactInfoById: string,

      RemovePlantImage: string,

      RemoveCat: string,

      AddCat: string,

      EditCat: string,

      GetCatById: string,

      GetAllCustomers: string,

      DeleteCustomer: string,

      GetReviews: string,

      DeleteReview: string,

      AddReview: string,

      GetPhotoAlbum: string,

      CreateFav: string,

      RemoveFav: string,

      AddAlbumPhoto: string,

      DeletePhotoAlbum: string,

      GetAllAlbumPhotos: string,

      AddLocation: string,

      DeleteLocation: string,

      UpdateLocation: string,

      GetAllLocations: string,

      GetLocationById: string,

      GetAllMessages: string,

      GetAbout: string,

      GetAboutById: string,

      DeleteAbout: string,

      UpdateAbout: string,

      AddAbout: string,

      GetAllFav: string,

      IsInFav: string,

      AddOrder: string,

      GetOrders: string,

      GetAllPlants: string,

      GetPlant: string,

      UpdatePlant: string,

      GetPlantsBySubCat: string,

      Login: string,

      GetMyInfo: string,

      Logout: string,

      createOrder: string,
   },

   globalDefaultImage: string,

   cachedTime: number,

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      configLocales: Array<any>,

      locales: any,

      detectBrowserLanguage: {
         alwaysRedirect: boolean,

         cookieCrossOrigin: boolean,

         cookieDomain: any,

         cookieKey: string,

         cookieSecure: boolean,

         fallbackLocale: string,

         redirectOn: string,

         useCookie: boolean,
      },

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,
      },
   },

   aos: any,

   primevue: {
      usePrimeVue: boolean,

      autoImport: boolean,

      resolvePath: any,

      importPT: any,

      importTheme: any,

      options: {
         theme: {
            preset: {
               primitive: {
                  borderRadius: {
                     none: string,

                     xs: string,

                     sm: string,

                     md: string,

                     lg: string,

                     xl: string,
                  },

                  emerald: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  green: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  lime: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  red: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  orange: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  amber: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  yellow: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  teal: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  cyan: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  sky: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  blue: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  indigo: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  violet: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  purple: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  fuchsia: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  pink: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  rose: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  slate: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  gray: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  zinc: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  neutral: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  stone: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },
               },

               semantic: {
                  transitionDuration: string,

                  focusRing: {
                     width: string,

                     style: string,

                     color: string,

                     offset: string,

                     shadow: string,
                  },

                  disabledOpacity: string,

                  iconSize: string,

                  anchorGutter: string,

                  primary: {
                     50: string,

                     100: string,

                     200: string,

                     300: string,

                     400: string,

                     500: string,

                     600: string,

                     700: string,

                     800: string,

                     900: string,

                     950: string,
                  },

                  formField: {
                     paddingX: string,

                     paddingY: string,

                     borderRadius: string,

                     focusRing: {
                        width: string,

                        style: string,

                        color: string,

                        offset: string,

                        shadow: string,
                     },

                     transitionDuration: string,
                  },

                  list: {
                     padding: string,

                     gap: string,

                     header: {
                        padding: string,
                     },

                     option: {
                        padding: string,

                        borderRadius: string,
                     },

                     optionGroup: {
                        padding: string,

                        fontWeight: string,
                     },
                  },

                  content: {
                     borderRadius: string,
                  },

                  mask: {
                     transitionDuration: string,
                  },

                  navigation: {
                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        padding: string,

                        borderRadius: string,

                        gap: string,
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,
                     },

                     submenuIcon: {
                        size: string,
                     },
                  },

                  overlay: {
                     select: {
                        borderRadius: string,

                        shadow: string,
                     },

                     popover: {
                        borderRadius: string,

                        padding: string,

                        shadow: string,
                     },

                     modal: {
                        borderRadius: string,

                        padding: string,

                        shadow: string,
                     },

                     navigation: {
                        shadow: string,
                     },
                  },

                  colorScheme: {
                     light: {
                        surface: {
                           0: string,

                           50: string,

                           100: string,

                           200: string,

                           300: string,

                           400: string,

                           500: string,

                           600: string,

                           700: string,

                           800: string,

                           900: string,

                           950: string,
                        },

                        primary: {
                           color: string,

                           contrastColor: string,

                           hoverColor: string,

                           activeColor: string,
                        },

                        highlight: {
                           background: string,

                           focusBackground: string,

                           color: string,

                           focusColor: string,
                        },

                        mask: {
                           background: string,

                           color: string,
                        },

                        formField: {
                           background: string,

                           disabledBackground: string,

                           filledBackground: string,

                           filledFocusBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           focusBorderColor: string,

                           invalidBorderColor: string,

                           color: string,

                           disabledColor: string,

                           placeholderColor: string,

                           floatLabelColor: string,

                           floatLabelFocusColor: string,

                           floatLabelInvalidColor: string,

                           iconColor: string,

                           shadow: string,
                        },

                        text: {
                           color: string,

                           hoverColor: string,

                           mutedColor: string,

                           hoverMutedColor: string,
                        },

                        content: {
                           background: string,

                           hoverBackground: string,

                           borderColor: string,

                           color: string,

                           hoverColor: string,
                        },

                        overlay: {
                           select: {
                              background: string,

                              borderColor: string,

                              color: string,
                           },

                           popover: {
                              background: string,

                              borderColor: string,

                              color: string,
                           },

                           modal: {
                              background: string,

                              borderColor: string,

                              color: string,
                           },
                        },

                        list: {
                           option: {
                              focusBackground: string,

                              selectedBackground: string,

                              selectedFocusBackground: string,

                              color: string,

                              focusColor: string,

                              selectedColor: string,

                              selectedFocusColor: string,

                              icon: {
                                 color: string,

                                 focusColor: string,
                              },
                           },

                           optionGroup: {
                              background: string,

                              color: string,
                           },
                        },

                        navigation: {
                           item: {
                              focusBackground: string,

                              activeBackground: string,

                              color: string,

                              focusColor: string,

                              activeColor: string,

                              icon: {
                                 color: string,

                                 focusColor: string,

                                 activeColor: string,
                              },
                           },

                           submenuLabel: {
                              background: string,

                              color: string,
                           },

                           submenuIcon: {
                              color: string,

                              focusColor: string,

                              activeColor: string,
                           },
                        },
                     },

                     dark: {
                        surface: {
                           0: string,

                           50: string,

                           100: string,

                           200: string,

                           300: string,

                           400: string,

                           500: string,

                           600: string,

                           700: string,

                           800: string,

                           900: string,

                           950: string,
                        },

                        primary: {
                           color: string,

                           contrastColor: string,

                           hoverColor: string,

                           activeColor: string,
                        },

                        highlight: {
                           background: string,

                           focusBackground: string,

                           color: string,

                           focusColor: string,
                        },

                        mask: {
                           background: string,

                           color: string,
                        },

                        formField: {
                           background: string,

                           disabledBackground: string,

                           filledBackground: string,

                           filledFocusBackground: string,

                           borderColor: string,

                           hoverBorderColor: string,

                           focusBorderColor: string,

                           invalidBorderColor: string,

                           color: string,

                           disabledColor: string,

                           placeholderColor: string,

                           floatLabelColor: string,

                           floatLabelFocusColor: string,

                           floatLabelInvalidColor: string,

                           iconColor: string,

                           shadow: string,
                        },

                        text: {
                           color: string,

                           hoverColor: string,

                           mutedColor: string,

                           hoverMutedColor: string,
                        },

                        content: {
                           background: string,

                           hoverBackground: string,

                           borderColor: string,

                           color: string,

                           hoverColor: string,
                        },

                        overlay: {
                           select: {
                              background: string,

                              borderColor: string,

                              color: string,
                           },

                           popover: {
                              background: string,

                              borderColor: string,

                              color: string,
                           },

                           modal: {
                              background: string,

                              borderColor: string,

                              color: string,
                           },
                        },

                        list: {
                           option: {
                              focusBackground: string,

                              selectedBackground: string,

                              selectedFocusBackground: string,

                              color: string,

                              focusColor: string,

                              selectedColor: string,

                              selectedFocusColor: string,

                              icon: {
                                 color: string,

                                 focusColor: string,
                              },
                           },

                           optionGroup: {
                              background: string,

                              color: string,
                           },
                        },

                        navigation: {
                           item: {
                              focusBackground: string,

                              activeBackground: string,

                              color: string,

                              focusColor: string,

                              activeColor: string,

                              icon: {
                                 color: string,

                                 focusColor: string,

                                 activeColor: string,
                              },
                           },

                           submenuLabel: {
                              background: string,

                              color: string,
                           },

                           submenuIcon: {
                              color: string,

                              focusColor: string,

                              activeColor: string,
                           },
                        },
                     },
                  },
               },

               components: {
                  accordion: {
                     root: {
                        transitionDuration: string,
                     },

                     panel: {
                        borderWidth: string,

                        borderColor: string,
                     },

                     header: {
                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        activeHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        padding: string,

                        fontWeight: string,

                        borderRadius: string,

                        borderWidth: string,

                        borderColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        toggleIcon: {
                           color: string,

                           hoverColor: string,

                           activeColor: string,

                           activeHoverColor: string,
                        },

                        first: {
                           topBorderRadius: string,

                           borderWidth: string,
                        },

                        last: {
                           bottomBorderRadius: string,

                           activeBottomBorderRadius: string,
                        },
                     },

                     content: {
                        borderWidth: string,

                        borderColor: string,

                        background: string,

                        color: string,

                        padding: string,
                     },
                  },

                  autocomplete: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     option: {
                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        padding: string,

                        borderRadius: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        fontWeight: string,

                        padding: string,
                     },

                     dropdown: {
                        width: string,

                        background: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     chip: {
                        borderRadius: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },

                     colorScheme: {
                        light: {
                           dropdown: {
                              hoverBackground: string,

                              activeBackground: string,
                           },
                        },

                        dark: {
                           dropdown: {
                              hoverBackground: string,

                              activeBackground: string,
                           },
                        },
                     },
                  },

                  avatar: {
                     root: {
                        width: string,

                        height: string,

                        fontSize: string,

                        background: string,

                        borderRadius: string,
                     },

                     group: {
                        borderColor: string,

                        offset: string,
                     },

                     lg: {
                        width: string,

                        height: string,

                        fontSize: string,
                     },

                     xl: {
                        width: string,

                        height: string,

                        fontSize: string,
                     },
                  },

                  badge: {
                     root: {
                        borderRadius: string,

                        padding: string,

                        fontSize: string,

                        fontWeight: string,

                        minWidth: string,

                        height: string,
                     },

                     dot: {
                        size: string,
                     },

                     sm: {
                        fontSize: string,

                        minWidth: string,

                        height: string,
                     },

                     lg: {
                        fontSize: string,

                        minWidth: string,

                        height: string,
                     },

                     xl: {
                        fontSize: string,

                        minWidth: string,

                        height: string,
                     },

                     colorScheme: {
                        light: {
                           primary: {
                              background: string,

                              color: string,
                           },

                           secondary: {
                              background: string,

                              color: string,
                           },

                           success: {
                              background: string,

                              color: string,
                           },

                           info: {
                              background: string,

                              color: string,
                           },

                           warn: {
                              background: string,

                              color: string,
                           },

                           danger: {
                              background: string,

                              color: string,
                           },

                           contrast: {
                              background: string,

                              color: string,
                           },
                        },

                        dark: {
                           primary: {
                              background: string,

                              color: string,
                           },

                           secondary: {
                              background: string,

                              color: string,
                           },

                           success: {
                              background: string,

                              color: string,
                           },

                           info: {
                              background: string,

                              color: string,
                           },

                           warn: {
                              background: string,

                              color: string,
                           },

                           danger: {
                              background: string,

                              color: string,
                           },

                           contrast: {
                              background: string,

                              color: string,
                           },
                        },
                     },
                  },

                  blockui: {
                     root: {
                        borderRadius: string,
                     },
                  },

                  breadcrumb: {
                     root: {
                        padding: string,

                        background: string,

                        gap: string,

                        transitionDuration: string,
                     },

                     item: {
                        color: string,

                        hoverColor: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           hoverColor: string,
                        },

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     separator: {
                        color: string,
                     },
                  },

                  button: {
                     root: {
                        borderRadius: string,

                        roundedBorderRadius: string,

                        gap: string,

                        paddingX: string,

                        paddingY: string,

                        iconOnlyWidth: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        label: {
                           fontWeight: string,
                        },

                        raisedShadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           offset: string,
                        },

                        badgeSize: string,

                        transitionDuration: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              primary: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              secondary: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              info: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              success: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              warn: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              help: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              danger: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              contrast: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           outlined: {
                              primary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              secondary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              success: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              info: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              warn: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              help: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              danger: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              contrast: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              plain: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },
                           },

                           text: {
                              primary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              secondary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              success: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              info: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              warn: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              help: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              danger: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              plain: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },
                           },

                           link: {
                              color: string,

                              hoverColor: string,

                              activeColor: string,
                           },
                        },

                        dark: {
                           root: {
                              primary: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              secondary: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              info: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              success: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              warn: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              help: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              danger: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },

                              contrast: {
                                 background: string,

                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 hoverBorderColor: string,

                                 activeBorderColor: string,

                                 color: string,

                                 hoverColor: string,

                                 activeColor: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           outlined: {
                              primary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              secondary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              success: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              info: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              warn: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              help: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              danger: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              contrast: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },

                              plain: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 borderColor: string,

                                 color: string,
                              },
                           },

                           text: {
                              primary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              secondary: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              success: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              info: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              warn: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              help: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              danger: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },

                              plain: {
                                 hoverBackground: string,

                                 activeBackground: string,

                                 color: string,
                              },
                           },

                           link: {
                              color: string,

                              hoverColor: string,

                              activeColor: string,
                           },
                        },
                     },
                  },

                  datepicker: {
                     root: {
                        transitionDuration: string,
                     },

                     panel: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        padding: string,
                     },

                     header: {
                        background: string,

                        borderColor: string,

                        color: string,

                        padding: string,

                        fontWeight: string,

                        gap: string,
                     },

                     title: {
                        gap: string,

                        fontWeight: string,
                     },

                     dropdown: {
                        width: string,

                        background: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     inputIcon: {
                        color: string,
                     },

                     selectMonth: {
                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        padding: string,
                     },

                     selectYear: {
                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        padding: string,
                     },

                     group: {
                        borderColor: string,

                        gap: string,
                     },

                     dayView: {
                        margin: string,
                     },

                     weekDay: {
                        padding: string,

                        fontWeight: string,

                        color: string,
                     },

                     date: {
                        hoverBackground: string,

                        selectedBackground: string,

                        rangeSelectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        rangeSelectedColor: string,

                        width: string,

                        height: string,

                        borderRadius: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     monthView: {
                        margin: string,
                     },

                     month: {
                        borderRadius: string,
                     },

                     yearView: {
                        margin: string,
                     },

                     year: {
                        borderRadius: string,
                     },

                     buttonbar: {
                        padding: string,

                        borderColor: string,
                     },

                     timePicker: {
                        padding: string,

                        borderColor: string,

                        gap: string,

                        buttonGap: string,
                     },

                     colorScheme: {
                        light: {
                           dropdown: {
                              hoverBackground: string,

                              activeBackground: string,
                           },

                           today: {
                              background: string,

                              color: string,
                           },
                        },

                        dark: {
                           dropdown: {
                              hoverBackground: string,

                              activeBackground: string,
                           },

                           today: {
                              background: string,

                              color: string,
                           },
                        },
                     },
                  },

                  card: {
                     root: {
                        background: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     body: {
                        padding: string,

                        gap: string,
                     },

                     caption: {
                        gap: string,
                     },

                     title: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     subtitle: {
                        color: string,
                     },
                  },

                  carousel: {
                     root: {
                        transitionDuration: string,
                     },

                     content: {
                        gap: string,
                     },

                     indicatorList: {
                        padding: string,

                        gap: string,
                     },

                     indicator: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     colorScheme: {
                        light: {
                           indicator: {
                              background: string,

                              hoverBackground: string,

                              activeBackground: string,
                           },
                        },

                        dark: {
                           indicator: {
                              background: string,

                              hoverBackground: string,

                              activeBackground: string,
                           },
                        },
                     },
                  },

                  cascadeselect: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     option: {
                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        padding: string,

                        borderRadius: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           size: string,
                        },
                     },
                  },

                  checkbox: {
                     root: {
                        borderRadius: string,

                        width: string,

                        height: string,

                        background: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,

                        disabledBackground: string,

                        filledBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        checkedBorderColor: string,

                        checkedHoverBorderColor: string,

                        checkedFocusBorderColor: string,

                        checkedDisabledBorderColor: string,

                        invalidBorderColor: string,

                        shadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     icon: {
                        size: string,

                        color: string,

                        checkedColor: string,

                        checkedHoverColor: string,

                        disabledColor: string,
                     },
                  },

                  chip: {
                     root: {
                        borderRadius: string,

                        paddingX: string,

                        paddingY: string,

                        gap: string,

                        transitionDuration: string,
                     },

                     image: {
                        width: string,

                        height: string,
                     },

                     icon: {
                        size: string,
                     },

                     removeIcon: {
                        size: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     colorScheme: {
                        light: {
                           root: {
                              background: string,

                              color: string,
                           },

                           icon: {
                              color: string,
                           },

                           removeIcon: {
                              color: string,
                           },
                        },

                        dark: {
                           root: {
                              background: string,

                              color: string,
                           },

                           icon: {
                              color: string,
                           },

                           removeIcon: {
                              color: string,
                           },
                        },
                     },
                  },

                  colorpicker: {
                     root: {
                        transitionDuration: string,
                     },

                     preview: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     panel: {
                        shadow: string,

                        borderRadius: string,
                     },

                     colorScheme: {
                        light: {
                           panel: {
                              background: string,

                              borderColor: string,
                           },

                           handle: {
                              color: string,
                           },
                        },

                        dark: {
                           panel: {
                              background: string,

                              borderColor: string,
                           },

                           handle: {
                              color: string,
                           },
                        },
                     },
                  },

                  confirmdialog: {
                     icon: {
                        size: string,

                        color: string,
                     },

                     content: {
                        gap: string,
                     },
                  },

                  confirmpopup: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        gutter: string,

                        arrowOffset: string,
                     },

                     content: {
                        padding: string,

                        gap: string,
                     },

                     icon: {
                        size: string,

                        color: string,
                     },

                     footer: {
                        gap: string,

                        padding: string,
                     },
                  },

                  contextmenu: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,
                        },
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },
                  },

                  dataview: {
                     root: {
                        borderColor: string,

                        borderWidth: string,

                        borderRadius: string,

                        padding: string,
                     },

                     header: {
                        background: string,

                        color: string,

                        borderColor: string,

                        borderWidth: string,

                        padding: string,

                        borderRadius: string,
                     },

                     content: {
                        background: string,

                        color: string,

                        borderColor: string,

                        borderWidth: string,

                        padding: string,

                        borderRadius: string,
                     },

                     footer: {
                        background: string,

                        color: string,

                        borderColor: string,

                        borderWidth: string,

                        padding: string,

                        borderRadius: string,
                     },

                     paginatorTop: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     paginatorBottom: {
                        borderColor: string,

                        borderWidth: string,
                     },
                  },

                  datatable: {
                     root: {
                        transitionDuration: string,
                     },

                     header: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,
                     },

                     headerCell: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        gap: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     columnTitle: {
                        fontWeight: string,
                     },

                     row: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     bodyCell: {
                        borderColor: string,

                        padding: string,
                     },

                     footerCell: {
                        background: string,

                        borderColor: string,

                        color: string,

                        padding: string,
                     },

                     columnFooter: {
                        fontWeight: string,
                     },

                     footer: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,
                     },

                     dropPointColor: string,

                     columnResizerWidth: string,

                     resizeIndicator: {
                        width: string,

                        color: string,
                     },

                     sortIcon: {
                        color: string,

                        hoverColor: string,
                     },

                     loadingIcon: {
                        size: string,
                     },

                     rowToggleButton: {
                        hoverBackground: string,

                        selectedHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedHoverColor: string,

                        size: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     filter: {
                        inlineGap: string,

                        overlaySelect: {
                           background: string,

                           borderColor: string,

                           borderRadius: string,

                           color: string,

                           shadow: string,
                        },

                        overlayPopover: {
                           background: string,

                           borderColor: string,

                           borderRadius: string,

                           color: string,

                           shadow: string,

                           padding: string,

                           gap: string,
                        },

                        rule: {
                           borderColor: string,
                        },

                        constraintList: {
                           padding: string,

                           gap: string,
                        },

                        constraint: {
                           focusBackground: string,

                           selectedBackground: string,

                           selectedFocusBackground: string,

                           color: string,

                           focusColor: string,

                           selectedColor: string,

                           selectedFocusColor: string,

                           separator: {
                              borderColor: string,
                           },

                           padding: string,

                           borderRadius: string,
                        },
                     },

                     paginatorTop: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     paginatorBottom: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              borderColor: string,
                           },

                           row: {
                              stripedBackground: string,
                           },

                           bodyCell: {
                              selectedBorderColor: string,
                           },
                        },

                        dark: {
                           root: {
                              borderColor: string,
                           },

                           row: {
                              stripedBackground: string,
                           },

                           bodyCell: {
                              selectedBorderColor: string,
                           },
                        },
                     },
                  },

                  dialog: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,
                     },

                     header: {
                        padding: string,

                        gap: string,
                     },

                     title: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     content: {
                        padding: string,
                     },

                     footer: {
                        padding: string,

                        gap: string,
                     },
                  },

                  divider: {
                     root: {
                        borderColor: string,
                     },

                     content: {
                        background: string,

                        color: string,
                     },

                     horizontal: {
                        margin: string,

                        padding: string,

                        content: {
                           padding: string,
                        },
                     },

                     vertical: {
                        margin: string,

                        padding: string,

                        content: {
                           padding: string,
                        },
                     },
                  },

                  dock: {
                     root: {
                        background: string,

                        borderColor: string,

                        padding: string,

                        borderRadius: string,
                     },

                     item: {
                        borderRadius: string,

                        padding: string,

                        size: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  drawer: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,
                     },

                     header: {
                        padding: string,
                     },

                     title: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     content: {
                        padding: string,
                     },
                  },

                  editor: {
                     toolbar: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,
                     },

                     toolbarItem: {
                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,

                        padding: string,
                     },

                     overlayOption: {
                        focusBackground: string,

                        color: string,

                        focusColor: string,

                        padding: string,

                        borderRadius: string,
                     },

                     content: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,
                     },
                  },

                  fieldset: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        padding: string,

                        transitionDuration: string,
                     },

                     legend: {
                        background: string,

                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        borderRadius: string,

                        borderWidth: string,

                        borderColor: string,

                        padding: string,

                        gap: string,

                        fontWeight: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     toggleIcon: {
                        color: string,

                        hoverColor: string,
                     },

                     content: {
                        padding: string,
                     },
                  },

                  fileupload: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        transitionDuration: string,
                     },

                     header: {
                        background: string,

                        color: string,

                        padding: string,

                        borderWidth: string,

                        borderRadius: string,

                        gap: string,
                     },

                     content: {
                        highlightBorderColor: string,

                        padding: string,
                     },

                     file: {
                        padding: string,

                        gap: string,

                        borderColor: string,

                        info: {
                           gap: string,
                        },
                     },

                     progressbar: {
                        height: string,
                     },

                     basic: {
                        gap: string,
                     },
                  },

                  floatlabel: {
                     root: {
                        color: string,

                        focusColor: string,

                        invalidColor: string,

                        transitionDuration: string,
                     },
                  },

                  galleria: {
                     root: {
                        borderWidth: string,

                        borderColor: string,

                        borderRadius: string,

                        transitionDuration: string,
                     },

                     navButton: {
                        background: string,

                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        size: string,

                        gutter: string,

                        prev: {
                           borderRadius: string,
                        },

                        next: {
                           borderRadius: string,
                        },

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     navIcon: {
                        size: string,
                     },

                     thumbnailsContent: {
                        background: string,

                        padding: string,
                     },

                     thumbnailNavButton: {
                        size: string,

                        borderRadius: string,

                        gutter: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     thumbnailNavButtonIcon: {
                        size: string,
                     },

                     caption: {
                        background: string,

                        color: string,

                        padding: string,
                     },

                     indicatorList: {
                        gap: string,

                        padding: string,
                     },

                     indicatorButton: {
                        width: string,

                        height: string,

                        activeBackground: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     insetIndicatorList: {
                        background: string,
                     },

                     insetIndicatorButton: {
                        background: string,

                        hoverBackground: string,

                        activeBackground: string,
                     },

                     mask: {
                        background: string,

                        color: string,
                     },

                     closeButton: {
                        size: string,

                        gutter: string,

                        background: string,

                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     closeButtonIcon: {
                        size: string,
                     },

                     colorScheme: {
                        light: {
                           thumbnailNavButton: {
                              hoverBackground: string,

                              color: string,

                              hoverColor: string,
                           },

                           indicatorButton: {
                              background: string,

                              hoverBackground: string,
                           },
                        },

                        dark: {
                           thumbnailNavButton: {
                              hoverBackground: string,

                              color: string,

                              hoverColor: string,
                           },

                           indicatorButton: {
                              background: string,

                              hoverBackground: string,
                           },
                        },
                     },
                  },

                  iconfield: {
                     icon: {
                        color: string,
                     },
                  },

                  image: {
                     root: {
                        transitionDuration: string,
                     },

                     preview: {
                        icon: {
                           size: string,
                        },

                        mask: {
                           background: string,

                           color: string,
                        },
                     },

                     toolbar: {
                        position: {
                           left: string,

                           right: string,

                           top: string,

                           bottom: string,
                        },

                        blur: string,

                        background: string,

                        borderColor: string,

                        borderWidth: string,

                        borderRadius: string,

                        padding: string,

                        gap: string,
                     },

                     action: {
                        hoverBackground: string,

                        color: string,

                        hoverColor: string,

                        size: string,

                        iconSize: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  inlinemessage: {
                     root: {
                        padding: string,

                        borderRadius: string,

                        gap: string,
                     },

                     text: {
                        fontWeight: string,
                     },

                     icon: {
                        size: string,
                     },

                     colorScheme: {
                        light: {
                           info: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           success: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           warn: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           error: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           secondary: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           contrast: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },
                        },

                        dark: {
                           info: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           success: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           warn: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           error: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           secondary: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },

                           contrast: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,
                           },
                        },
                     },
                  },

                  inplace: {
                     root: {
                        padding: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     display: {
                        hoverBackground: string,

                        hoverColor: string,
                     },
                  },

                  inputchips: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     chip: {
                        borderRadius: string,
                     },

                     colorScheme: {
                        light: {
                           chip: {
                              focusBackground: string,

                              color: string,
                           },
                        },

                        dark: {
                           chip: {
                              focusBackground: string,

                              color: string,
                           },
                        },
                     },
                  },

                  inputgroup: {
                     addon: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,
                     },
                  },

                  inputnumber: {
                     root: {
                        transitionDuration: string,
                     },

                     button: {
                        background: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        width: string,

                        borderRadius: string,

                        verticalPadding: string,
                     },

                     colorScheme: {
                        light: {
                           button: {
                              hoverBackground: string,

                              activeBackground: string,
                           },
                        },

                        dark: {
                           button: {
                              hoverBackground: string,

                              activeBackground: string,
                           },
                        },
                     },
                  },

                  inputtext: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,

                        sm: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },

                        lg: {
                           fontSize: string,

                           paddingX: string,

                           paddingY: string,
                        },
                     },
                  },

                  knob: {
                     root: {
                        transitionDuration: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     value: {
                        background: string,
                     },

                     text: {
                        color: string,
                     },

                     colorScheme: {
                        light: {
                           range: {
                              background: string,
                           },
                        },

                        dark: {
                           range: {
                              background: string,
                           },
                        },
                     },
                  },

                  listbox: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        shadow: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,

                        header: {
                           padding: string,
                        },
                     },

                     option: {
                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        padding: string,

                        borderRadius: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        fontWeight: string,

                        padding: string,
                     },

                     checkmark: {
                        color: string,

                        gutterStart: string,

                        gutterEnd: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },

                     colorScheme: {
                        light: {
                           option: {
                              stripedBackground: string,
                           },
                        },

                        dark: {
                           option: {
                              stripedBackground: string,
                           },
                        },
                     },
                  },

                  megamenu: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        gap: string,

                        verticalOrientation: {
                           padding: string,

                           gap: string,
                        },

                        horizontalOrientation: {
                           padding: string,
                        },

                        transitionDuration: string,
                     },

                     baseItem: {
                        borderRadius: string,

                        padding: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,
                        },
                     },

                     overlay: {
                        padding: string,

                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,

                        gap: string,
                     },

                     submenu: {
                        padding: string,

                        gap: string,
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,

                        background: string,

                        color: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },

                     mobileButton: {
                        borderRadius: string,

                        size: string,

                        color: string,

                        hoverColor: string,

                        hoverBackground: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  menu: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        focusBackground: string,

                        color: string,

                        focusColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,
                        },
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,

                        background: string,

                        color: string,
                     },

                     separator: {
                        borderColor: string,
                     },
                  },

                  menubar: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        gap: string,

                        padding: string,

                        transitionDuration: string,
                     },

                     baseItem: {
                        borderRadius: string,

                        padding: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,
                        },
                     },

                     submenu: {
                        padding: string,

                        gap: string,

                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        shadow: string,

                        mobileIndent: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },

                     mobileButton: {
                        borderRadius: string,

                        size: string,

                        color: string,

                        hoverColor: string,

                        hoverBackground: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  message: {
                     root: {
                        borderRadius: string,

                        borderWidth: string,

                        transitionDuration: string,
                     },

                     content: {
                        padding: string,

                        gap: string,
                     },

                     text: {
                        fontSize: string,

                        fontWeight: string,
                     },

                     icon: {
                        size: string,
                     },

                     closeButton: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           offset: string,
                        },
                     },

                     closeIcon: {
                        size: string,
                     },

                     colorScheme: {
                        light: {
                           info: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           success: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           warn: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           error: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           secondary: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           contrast: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },
                        },

                        dark: {
                           info: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           success: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           warn: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           error: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           secondary: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           contrast: {
                              background: string,

                              borderColor: string,

                              color: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },
                        },
                     },
                  },

                  metergroup: {
                     root: {
                        borderRadius: string,

                        gap: string,
                     },

                     meters: {
                        size: string,
                     },

                     label: {
                        gap: string,
                     },

                     labelMarker: {
                        size: string,
                     },

                     labelIcon: {
                        size: string,
                     },

                     labelList: {
                        verticalGap: string,

                        horizontalGap: string,
                     },

                     colorScheme: {
                        light: {
                           meters: {
                              background: string,
                           },
                        },

                        dark: {
                           meters: {
                              background: string,
                           },
                        },
                     },
                  },

                  multiselect: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,

                        header: {
                           padding: string,
                        },
                     },

                     option: {
                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        fontWeight: string,

                        padding: string,
                     },

                     chip: {
                        borderRadius: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },
                  },

                  orderlist: {
                     root: {
                        gap: string,
                     },

                     controls: {
                        gap: string,
                     },
                  },

                  organizationchart: {
                     root: {
                        gutter: string,

                        transitionDuration: string,
                     },

                     node: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        borderColor: string,

                        color: string,

                        selectedColor: string,

                        hoverColor: string,

                        padding: string,

                        toggleablePadding: string,

                        borderRadius: string,
                     },

                     nodeToggleButton: {
                        background: string,

                        hoverBackground: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        size: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     connector: {
                        color: string,

                        borderRadius: string,

                        height: string,
                     },
                  },

                  overlaybadge: {
                     root: {
                        outline: {
                           width: string,

                           color: string,
                        },
                     },
                  },

                  popover: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        gutter: string,

                        arrowOffset: string,
                     },

                     content: {
                        padding: string,
                     },
                  },

                  paginator: {
                     root: {
                        padding: string,

                        gap: string,

                        borderRadius: string,

                        background: string,

                        color: string,

                        transitionDuration: string,
                     },

                     navButton: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     currentPageReport: {
                        color: string,
                     },

                     jumpToPageInput: {
                        maxWidth: string,
                     },
                  },

                  password: {
                     meter: {
                        borderRadius: string,

                        height: string,
                     },

                     icon: {
                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        padding: string,

                        shadow: string,
                     },

                     content: {
                        gap: string,
                     },

                     colorScheme: {
                        light: {
                           meter: {
                              background: string,
                           },

                           strength: {
                              weakBackground: string,

                              mediumBackground: string,

                              strongBackground: string,
                           },
                        },

                        dark: {
                           meter: {
                              background: string,
                           },

                           strength: {
                              weakBackground: string,

                              mediumBackground: string,

                              strongBackground: string,
                           },
                        },
                     },
                  },

                  panel: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,
                     },

                     header: {
                        background: string,

                        color: string,

                        padding: string,

                        borderWidth: string,

                        borderColor: string,

                        borderRadius: string,
                     },

                     toggleableHeader: {
                        padding: string,
                     },

                     title: {
                        fontWeight: string,
                     },

                     content: {
                        padding: string,
                     },

                     footer: {
                        padding: string,
                     },
                  },

                  panelmenu: {
                     root: {
                        gap: string,

                        transitionDuration: string,
                     },

                     panel: {
                        background: string,

                        borderColor: string,

                        borderWidth: string,

                        color: string,

                        padding: string,

                        borderRadius: string,

                        first: {
                           borderWidth: string,

                           topBorderRadius: string,
                        },

                        last: {
                           borderWidth: string,

                           bottomBorderRadius: string,
                        },
                     },

                     item: {
                        focusBackground: string,

                        color: string,

                        focusColor: string,

                        gap: string,

                        padding: string,

                        borderRadius: string,

                        icon: {
                           color: string,

                           focusColor: string,
                        },
                     },

                     submenu: {
                        indent: string,
                     },

                     submenuIcon: {
                        color: string,

                        focusColor: string,
                     },
                  },

                  picklist: {
                     root: {
                        gap: string,
                     },

                     controls: {
                        gap: string,
                     },
                  },

                  progressbar: {
                     root: {
                        borderRadius: string,

                        height: string,
                     },

                     value: {
                        background: string,
                     },

                     label: {
                        color: string,

                        fontSize: string,

                        fontWeight: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              background: string,
                           },
                        },

                        dark: {
                           root: {
                              background: string,
                           },
                        },
                     },
                  },

                  progressspinner: {
                     colorScheme: {
                        light: {
                           root: {
                              "color.1": string,

                              "color.2": string,

                              "color.3": string,

                              "color.4": string,
                           },
                        },

                        dark: {
                           root: {
                              "color.1": string,

                              "color.2": string,

                              "color.3": string,

                              "color.4": string,
                           },
                        },
                     },
                  },

                  radiobutton: {
                     root: {
                        width: string,

                        height: string,

                        background: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,

                        disabledBackground: string,

                        filledBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        checkedBorderColor: string,

                        checkedHoverBorderColor: string,

                        checkedFocusBorderColor: string,

                        checkedDisabledBorderColor: string,

                        invalidBorderColor: string,

                        shadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     icon: {
                        size: string,

                        checkedColor: string,

                        checkedHoverColor: string,

                        disabledColor: string,
                     },
                  },

                  rating: {
                     root: {
                        gap: string,

                        transitionDuration: string,
                     },

                     icon: {
                        size: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },
                  },

                  scrollpanel: {
                     root: {
                        transitionDuration: string,
                     },

                     bar: {
                        size: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     colorScheme: {
                        light: {
                           bar: {
                              background: string,
                           },
                        },

                        dark: {
                           bar: {
                              background: string,
                           },
                        },
                     },
                  },

                  select: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     list: {
                        padding: string,

                        gap: string,

                        header: {
                           padding: string,
                        },
                     },

                     option: {
                        focusBackground: string,

                        selectedBackground: string,

                        selectedFocusBackground: string,

                        color: string,

                        focusColor: string,

                        selectedColor: string,

                        selectedFocusColor: string,

                        padding: string,

                        borderRadius: string,
                     },

                     optionGroup: {
                        background: string,

                        color: string,

                        fontWeight: string,

                        padding: string,
                     },

                     clearIcon: {
                        color: string,
                     },

                     checkmark: {
                        color: string,

                        gutterStart: string,

                        gutterEnd: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },
                  },

                  selectbutton: {
                     root: {
                        borderRadius: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              invalidBorderColor: string,
                           },
                        },

                        dark: {
                           root: {
                              invalidBorderColor: string,
                           },
                        },
                     },
                  },

                  skeleton: {
                     root: {
                        borderRadius: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              background: string,

                              animationBackground: string,
                           },
                        },

                        dark: {
                           root: {
                              background: string,

                              animationBackground: string,
                           },
                        },
                     },
                  },

                  slider: {
                     root: {
                        transitionDuration: string,
                     },

                     track: {
                        borderRadius: string,

                        size: string,
                     },

                     range: {
                        background: string,
                     },

                     handle: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        background: string,

                        hoverBackground: string,

                        content: {
                           borderRadius: string,

                           background: string,

                           hoverBackground: string,

                           width: string,

                           height: string,

                           shadow: string,
                        },

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     colorScheme: {
                        light: {
                           track: {
                              background: string,
                           },
                        },

                        dark: {
                           track: {
                              background: string,
                           },
                        },
                     },
                  },

                  speeddial: {
                     root: {
                        gap: string,

                        transitionDuration: string,
                     },
                  },

                  splitter: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        transitionDuration: string,
                     },

                     gutter: {
                        background: string,
                     },

                     handle: {
                        size: string,

                        background: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },
                  },

                  splitbutton: {
                     root: {
                        borderRadius: string,

                        roundedBorderRadius: string,

                        raisedShadow: string,
                     },
                  },

                  stepper: {
                     root: {
                        transitionDuration: string,
                     },

                     separator: {
                        background: string,

                        activeBackground: string,

                        margin: string,

                        size: string,
                     },

                     step: {
                        padding: string,

                        gap: string,
                     },

                     stepHeader: {
                        padding: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        gap: string,
                     },

                     stepTitle: {
                        color: string,

                        activeColor: string,

                        fontWeight: string,
                     },

                     stepNumber: {
                        background: string,

                        activeBackground: string,

                        borderColor: string,

                        activeBorderColor: string,

                        color: string,

                        activeColor: string,

                        size: string,

                        fontSize: string,

                        fontWeight: string,

                        borderRadius: string,

                        shadow: string,
                     },

                     steppanels: {
                        padding: string,
                     },

                     steppanel: {
                        background: string,

                        color: string,

                        padding: string,
                     },
                  },

                  steps: {
                     root: {
                        transitionDuration: string,
                     },

                     separator: {
                        background: string,
                     },

                     itemLink: {
                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        gap: string,
                     },

                     itemLabel: {
                        color: string,

                        activeColor: string,

                        fontWeight: string,
                     },

                     itemNumber: {
                        background: string,

                        activeBackground: string,

                        borderColor: string,

                        activeBorderColor: string,

                        color: string,

                        activeColor: string,

                        size: string,

                        fontSize: string,

                        fontWeight: string,

                        borderRadius: string,

                        shadow: string,
                     },
                  },

                  tabmenu: {
                     root: {
                        transitionDuration: string,
                     },

                     tablist: {
                        borderWidth: string,

                        background: string,

                        borderColor: string,
                     },

                     item: {
                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderWidth: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        padding: string,

                        fontWeight: string,

                        margin: string,

                        gap: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     itemIcon: {
                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },

                     activeBar: {
                        height: string,

                        bottom: string,

                        background: string,
                     },
                  },

                  tabs: {
                     root: {
                        transitionDuration: string,
                     },

                     tablist: {
                        borderWidth: string,

                        background: string,

                        borderColor: string,
                     },

                     tab: {
                        background: string,

                        hoverBackground: string,

                        activeBackground: string,

                        borderWidth: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,

                        padding: string,

                        fontWeight: string,

                        margin: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     tabpanel: {
                        background: string,

                        color: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     navButton: {
                        background: string,

                        color: string,

                        hoverColor: string,

                        width: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     activeBar: {
                        height: string,

                        bottom: string,

                        background: string,
                     },

                     colorScheme: {
                        light: {
                           navButton: {
                              shadow: string,
                           },
                        },

                        dark: {
                           navButton: {
                              shadow: string,
                           },
                        },
                     },
                  },

                  tabview: {
                     root: {
                        transitionDuration: string,
                     },

                     tabList: {
                        background: string,

                        borderColor: string,
                     },

                     tab: {
                        borderColor: string,

                        activeBorderColor: string,

                        color: string,

                        hoverColor: string,

                        activeColor: string,
                     },

                     tabPanel: {
                        background: string,

                        color: string,
                     },

                     navButton: {
                        background: string,

                        color: string,

                        hoverColor: string,
                     },

                     colorScheme: {
                        light: {
                           navButton: {
                              shadow: string,
                           },
                        },

                        dark: {
                           navButton: {
                              shadow: string,
                           },
                        },
                     },
                  },

                  textarea: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },
                  },

                  tieredmenu: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderRadius: string,

                        shadow: string,

                        transitionDuration: string,
                     },

                     list: {
                        padding: string,

                        gap: string,
                     },

                     item: {
                        focusBackground: string,

                        activeBackground: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,

                        padding: string,

                        borderRadius: string,

                        gap: string,

                        icon: {
                           color: string,

                           focusColor: string,

                           activeColor: string,
                        },
                     },

                     submenuLabel: {
                        padding: string,

                        fontWeight: string,

                        background: string,

                        color: string,
                     },

                     submenuIcon: {
                        size: string,

                        color: string,

                        focusColor: string,

                        activeColor: string,
                     },

                     separator: {
                        borderColor: string,
                     },
                  },

                  tag: {
                     root: {
                        fontSize: string,

                        fontWeight: string,

                        padding: string,

                        gap: string,

                        borderRadius: string,

                        roundedBorderRadius: string,
                     },

                     icon: {
                        size: string,
                     },

                     colorScheme: {
                        light: {
                           primary: {
                              background: string,

                              color: string,
                           },

                           secondary: {
                              background: string,

                              color: string,
                           },

                           success: {
                              background: string,

                              color: string,
                           },

                           info: {
                              background: string,

                              color: string,
                           },

                           warn: {
                              background: string,

                              color: string,
                           },

                           danger: {
                              background: string,

                              color: string,
                           },

                           contrast: {
                              background: string,

                              color: string,
                           },
                        },

                        dark: {
                           primary: {
                              background: string,

                              color: string,
                           },

                           secondary: {
                              background: string,

                              color: string,
                           },

                           success: {
                              background: string,

                              color: string,
                           },

                           info: {
                              background: string,

                              color: string,
                           },

                           warn: {
                              background: string,

                              color: string,
                           },

                           danger: {
                              background: string,

                              color: string,
                           },

                           contrast: {
                              background: string,

                              color: string,
                           },
                        },
                     },
                  },

                  terminal: {
                     root: {
                        background: string,

                        borderColor: string,

                        color: string,

                        height: string,

                        padding: string,

                        borderRadius: string,
                     },

                     prompt: {
                        gap: string,
                     },

                     commandResponse: {
                        margin: string,
                     },
                  },

                  timeline: {
                     event: {
                        minHeight: string,
                     },

                     horizontal: {
                        eventContent: {
                           padding: string,
                        },
                     },

                     vertical: {
                        eventContent: {
                           padding: string,
                        },
                     },

                     eventMarker: {
                        size: string,

                        borderRadius: string,

                        borderWidth: string,

                        background: string,

                        borderColor: string,

                        content: {
                           borderRadius: string,

                           size: string,

                           background: string,

                           insetShadow: string,
                        },
                     },

                     eventConnector: {
                        color: string,

                        size: string,
                     },
                  },

                  togglebutton: {
                     root: {
                        padding: string,

                        borderRadius: string,

                        gap: string,

                        fontWeight: string,

                        background: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        checkedBackground: string,

                        checkedColor: string,

                        checkedBorderColor: string,

                        disabledBackground: string,

                        disabledBorderColor: string,

                        disabledColor: string,

                        invalidBorderColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     icon: {
                        color: string,

                        hoverColor: string,

                        checkedColor: string,

                        disabledColor: string,
                     },

                     content: {
                        left: string,

                        top: string,

                        checkedBackground: string,

                        checkedShadow: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              hoverBackground: string,
                           },
                        },

                        dark: {
                           root: {
                              hoverBackground: string,
                           },
                        },
                     },
                  },

                  toggleswitch: {
                     root: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        gap: string,

                        shadow: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        borderWidth: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        checkedBorderColor: string,

                        checkedHoverBorderColor: string,

                        invalidBorderColor: string,

                        background: string,

                        hoverBackground: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,

                        transitionDuration: string,

                        slideDuration: string,

                        disabledBackground: string,
                     },

                     handle: {
                        borderRadius: string,

                        size: string,

                        background: string,

                        hoverBackground: string,

                        checkedBackground: string,

                        checkedHoverBackground: string,

                        disabledBackground: string,
                     },
                  },

                  tree: {
                     root: {
                        background: string,

                        color: string,

                        padding: string,

                        gap: string,

                        indent: string,

                        transitionDuration: string,
                     },

                     node: {
                        padding: string,

                        borderRadius: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        gap: string,
                     },

                     nodeIcon: {
                        color: string,

                        hoverColor: string,

                        selectedColor: string,
                     },

                     nodeToggleButton: {
                        borderRadius: string,

                        size: string,

                        hoverBackground: string,

                        selectedHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedHoverColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     loadingIcon: {
                        size: string,
                     },
                  },

                  treeselect: {
                     root: {
                        background: string,

                        disabledBackground: string,

                        filledBackground: string,

                        filledFocusBackground: string,

                        borderColor: string,

                        hoverBorderColor: string,

                        focusBorderColor: string,

                        invalidBorderColor: string,

                        color: string,

                        disabledColor: string,

                        placeholderColor: string,

                        shadow: string,

                        paddingX: string,

                        paddingY: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },

                        transitionDuration: string,
                     },

                     dropdown: {
                        width: string,

                        color: string,
                     },

                     overlay: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        shadow: string,
                     },

                     tree: {
                        padding: string,
                     },

                     emptyMessage: {
                        padding: string,
                     },

                     chip: {
                        borderRadius: string,
                     },
                  },

                  treetable: {
                     root: {
                        transitionDuration: string,
                     },

                     header: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,
                     },

                     headerCell: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        borderColor: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        gap: string,

                        padding: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     columnTitle: {
                        fontWeight: string,
                     },

                     row: {
                        background: string,

                        hoverBackground: string,

                        selectedBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedColor: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     bodyCell: {
                        borderColor: string,

                        padding: string,

                        gap: string,
                     },

                     footerCell: {
                        background: string,

                        borderColor: string,

                        color: string,

                        padding: string,
                     },

                     columnFooter: {
                        fontWeight: string,
                     },

                     footer: {
                        background: string,

                        borderColor: string,

                        color: string,

                        borderWidth: string,

                        padding: string,
                     },

                     columnResizerWidth: string,

                     resizeIndicator: {
                        width: string,

                        color: string,
                     },

                     sortIcon: {
                        color: string,

                        hoverColor: string,
                     },

                     loadingIcon: {
                        size: string,
                     },

                     nodeToggleButton: {
                        hoverBackground: string,

                        selectedHoverBackground: string,

                        color: string,

                        hoverColor: string,

                        selectedHoverColor: string,

                        size: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           color: string,

                           offset: string,

                           shadow: string,
                        },
                     },

                     paginatorTop: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     paginatorBottom: {
                        borderColor: string,

                        borderWidth: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              borderColor: string,
                           },

                           bodyCell: {
                              selectedBorderColor: string,
                           },
                        },

                        dark: {
                           root: {
                              borderColor: string,
                           },

                           bodyCell: {
                              selectedBorderColor: string,
                           },
                        },
                     },
                  },

                  toast: {
                     root: {
                        width: string,

                        borderRadius: string,

                        borderWidth: string,

                        transitionDuration: string,
                     },

                     icon: {
                        size: string,
                     },

                     content: {
                        padding: string,

                        gap: string,
                     },

                     text: {
                        gap: string,
                     },

                     summary: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     detail: {
                        fontWeight: string,

                        fontSize: string,
                     },

                     closeButton: {
                        width: string,

                        height: string,

                        borderRadius: string,

                        focusRing: {
                           width: string,

                           style: string,

                           offset: string,
                        },
                     },

                     closeIcon: {
                        size: string,
                     },

                     colorScheme: {
                        light: {
                           blur: string,

                           info: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           success: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           warn: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           error: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           secondary: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           contrast: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },
                        },

                        dark: {
                           blur: string,

                           info: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           success: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           warn: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           error: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           secondary: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },

                           contrast: {
                              background: string,

                              borderColor: string,

                              color: string,

                              detailColor: string,

                              shadow: string,

                              closeButton: {
                                 hoverBackground: string,

                                 focusRing: {
                                    color: string,

                                    shadow: string,
                                 },
                              },
                           },
                        },
                     },
                  },

                  toolbar: {
                     root: {
                        background: string,

                        borderColor: string,

                        borderRadius: string,

                        color: string,

                        gap: string,

                        padding: string,
                     },
                  },

                  virtualscroller: {
                     loader: {
                        mask: {
                           background: string,

                           color: string,
                        },

                        icon: {
                           size: string,
                        },
                     },
                  },
               },

               directives: {
                  tooltip: {
                     root: {
                        maxWidth: string,

                        gutter: string,

                        shadow: string,

                        padding: string,

                        borderRadius: string,
                     },

                     colorScheme: {
                        light: {
                           root: {
                              background: string,

                              color: string,
                           },
                        },

                        dark: {
                           root: {
                              background: string,

                              color: string,
                           },
                        },
                     },
                  },

                  ripple: {
                     colorScheme: {
                        light: {
                           root: {
                              background: string,
                           },
                        },

                        dark: {
                           root: {
                              background: string,
                           },
                        },
                     },
                  },
               },
            },
         },
      },

      components: Array<{

      }>,

      directives: Array<{

      }>,

      composables: Array<{

      }>,

      config: Array<{

      }>,

      services: Array<any>,

      styles: Array<{

      }>,

      injectStylesAsString: Array<any>,

      injectStylesAsStringToTop: Array<string>,
   },

   googleSignIn: {
      clientId: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }