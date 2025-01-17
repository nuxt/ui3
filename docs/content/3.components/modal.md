---
description: A dialog window that can be used to display a message or request user input.
links:
  - label: Dialog
    icon: i-custom-radix-vue
    to: https://www.radix-vue.com/components/dialog.html
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/benjamincanac/ui3/tree/dev/src/runtime/components/Modal.vue
---

## Usage

Use a [Button](/components/button) or any other component in the default slot of the Modal.

Then, use the `#content` slot to add the content displayed when the Modal is open.

::component-code
---
prettier: true
class: 'justify-center'
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

You can also use the `#header`{lang="ts-type"}, `#body`{lang="ts-type"} and `#footer`{lang="ts-type"} slots to customize the Modal's content.

### Title

Use the `title` prop to set the title of the Modal's header.

::component-code
---
prettier: true
class: 'justify-center'
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Description

Use the `description` prop to set the description of the Modal's header.

::component-code
---
prettier: true
class: 'justify-center'
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Close

Use the `close` prop to customize or hide the close button displayed in the Modal's header. You can pass all the props of the [Button](/components/button) component to customize it.

::tip
The close button is not displayed if the `#content` slot is used as it's a part of the header.
::

Use the `close-icon` prop to customize the button [Icon](/components/icon). Defaults to `i-heroicons-x-mark-20-solid`.

::component-code
---
prettier: true
class: 'justify-center'
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
  closeIcon: ''
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.
::

### Overlay

Use the `overlay` prop to control whether the Modal has an overlay or not. Defaults to `true`.

::component-code
---
prettier: true
ignore:
  - title
class: 'justify-center'
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Transition

Use the `transition` prop to control whether the Modal is animated or not. Defaults to `true`.

::component-code
---
prettier: true
ignore:
  - title
class: 'justify-center'
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Fullscreen

Use the `fullscreen` prop to make the Modal fullscreen.

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
class: 'justify-center'
props:
  fullscreen: true
  title: 'Modal fullscreen'
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Prevent close

Use the `prevent-close` prop to prevent the Modal from being closed when clicking outside of it.

::component-code
---
prettier: true
ignore:
  - title
  - preventClose
class: 'justify-center'
props:
  preventClose: true
  title: 'Modal prevent close'
slots:
  default: |

    <UButton label="Open" color="gray" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="Open" color="gray" variant="subtle"}

#body
:placeholder{class="h-48"}
::

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

::component-example
---
name: 'modal-open-example'
class: 'justify-center'
---
::

::note
In this example, press :kbd{value="O"} to toggle the Modal.
::

::tip
This allows you to move the trigger outside of the Modal or remove it entirely.
::

### Programmatic usage

You can use the [`useModal`](/composables/use-modal) composable to open a Modal programatically.

::important
Make sure to wrap your app with the [App](/components/app) component which uses the [ModalProvider](https://github.com/benjamincanac/ui3/blob/dev/src/runtime/components/ModalProvider.vue) component.
::

First, create a modal component that will be opened programatically:

::component-example
---
name: 'modal-example'
preview: false
---
::

Then, use it in your app:

::component-example
---
name: 'modal-programmatic-example'
class: 'justify-center'
---
::

::tip
You can close the modal within the modal component by calling `modal.close()`.
::

### Nested modals

You can nest modals within each other.

::component-example
---
name: 'modal-nested-example'
class: 'justify-center'
---
::

### With footer slot

Use the `#footer` slot to add content after the Modal's body.

::component-example
---
name: 'modal-footer-slot-example'
class: 'justify-center'
---
::

### With command palette

You can use the [CommandPalette](/components/command-palette) component inside the Modal's content.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
class: 'justify-center'
---
::

## API

### Props

::component-props
---
ignore:
  - as
  - to
  - target
  - active
  - activeClass
  - inactiveClass
  - exactActiveClass
  - ariaCurrentValue
  - href
  - rel
  - noRel
  - prefetch
  - noPrefetch
  - prefetchedClass
  - replace
  - exact
  - exactQuery
  - exactHash
  - external
---
::

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme
