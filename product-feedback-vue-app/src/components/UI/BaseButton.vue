<template>
    <button type="submit" :class="btnClass">
        <svg v-show="isLoading"
             class="animate-spin h-5 w-5 absolute"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
        >
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            >
            </circle>
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            >
            </path>
        </svg>
        <span :class="{'invisible' : isLoading}">
            <slot>{{ btnText }}</slot>
        </span>
    </button>
</template>


<script>
import {cva} from 'class-variance-authority'

export default {
    props: {
        btnText: String,
        isLoading: {
            type: Boolean,
            default: false
        },
        as: {
            type: String,
            default: 'button'
        },
        intent: {
            type: String,
            validator: value => {
                return ['primary', 'secondary', 'success', 'warning'].includes(value)
            },
            default: 'primary'
        }
    },
    computed: {
        btnClass() {
            return cva("inline-flex text-white items-center justify-center rounded-[10px] h-11 px-6 py-3 hover:transition duration-300 ease-in-out",
                {
                    variants: {
                        intent: {
                            primary: 'bg-[#AD1FEA] hover:bg-[#C75AF6]',
                            secondary: 'bg-[#4661E6] hover:bg-[#7C91F9]',
                            danger: 'bg-[#D73737] hover:bg-[#E98888]',
                            warning: 'bg-[#3A4374] '
                        }
                    }
                }
            )({intent: this.intent})
        }
    }
}

</script>

