export default {
  slots: {
    viewport: 'fixed flex flex-col gap-4 w-full sm:w-96 z-[100] data-[expanded=true]:h-[--height]',
    base: 'absolute inset-x-0 z-[--index] transform-[--transform] data-[expanded=false]:data-[front=false]:h-[--front-height] data-[swipe=move]:transition-none transition-[transform,height] will-change-[transform,height] duration-200 ease-out'
  },
  variants: {
    position: {
      'top-left': {
        viewport: 'left-4'
      },
      'top-center': {
        viewport: 'left-1/2 transform -translate-x-1/2'
      },
      'top-right': {
        viewport: 'right-4'
      },
      'bottom-left': {
        viewport: 'left-4'
      },
      'bottom-center': {
        viewport: 'left-1/2 transform -translate-x-1/2'
      },
      'bottom-right': {
        viewport: 'right-4'
      }
    },
    swipeDirection: {
      up: 'data-[swipe=end]:animate-[toast-slide-up_200ms_ease-out]',
      right: 'data-[swipe=end]:animate-[toast-slide-right_200ms_ease-out]',
      down: 'data-[swipe=end]:animate-[toast-slide-down_200ms_ease-out]',
      left: 'data-[swipe=end]:animate-[toast-slide-left_200ms_ease-out]'
    }
  },
  compoundVariants: [{
    position: ['top-left', 'top-center', 'top-right'],
    class: {
      viewport: 'top-4',
      base: 'top-0 data-[state=open]:animate-[slide-in-from-top_200ms_ease-in-out] data-[state=closed]:animate-[toast-slide-up_200ms_ease-in-out]'
    }
  }, {
    position: ['bottom-left', 'bottom-center', 'bottom-right'],
    class: {
      viewport: 'bottom-4',
      base: 'bottom-0 data-[state=open]:animate-[slide-in-from-bottom_200ms_ease-in-out] data-[state=closed]:animate-[toast-slide-down_200ms_ease-in-out]'
    }
  }, {
    swipeDirection: ['left', 'right'],
    class: 'data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=cancel]:translate-x-0'
  }, {
    swipeDirection: ['up', 'down'],
    class: 'data-[swipe=move]:translate-y-[--radix-toast-swipe-move-y] data-[swipe=end]:translate-y-[--radix-toast-swipe-end-y] data-[swipe=cancel]:translate-y-0'
  }],
  defaultVariants: {
    position: 'bottom-right'
  }
}
