<template>
    <div
        v-if="show"
        :class="containerClass"
    >
        <div class="shrink-0">
            <component
                :is="iconComponent"
                :class="iconClass"
            />
        </div>
        <div class="flex-1 space-y-2 min-w-0">
            <h2
                v-if="title"
                :class="titleClass"
            >
                {{ title }}
            </h2>
            <div :class="contentClass">
                <slot></slot>
            </div>
        </div>
        <div class="shrink-0 bg-red-600">
            <button
                class="text-blue-900/70 hover:text-blue-900 hover:bg-blue-200 p-0.5 rounded-md -m-1"
                @click="dismiss()"
            >
                <XMarkIcon class="w-6 h-6" />
            </button>
        </div>
    </div>
</template>

<script>
import {
    InformationCircleIcon,
    XMarkIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
    XCircleIcon,
} from "@heroicons/vue/20/solid/index.js";
import {cva} from "class-variance-authority";

export default {
    props: {
        intent: {
            type: String,
            validator(value) {
                return ["info", "success", "danger", "warning", "close"].includes(value);
            },
            default: "success",
        },
        title: String,
        show: {
            type: Boolean,
            default: true,
        },
        onDismiss: Function,
        dismissLabel: {
            type: String,
            default: "Dismiss",
        }
    },
    computed: {
        containerClass() {
            return cva("flex p-4 rounded-md space-x-3 w-1/2 max-w-sm mx-auto", {
                variants: {
                    intent: {
                        info: "bg-blue-100",
                        success: "bg-green-100",
                        warning: "bg-orange-100",
                        danger: "bg-red-100",
                    }
                }
            })({
                intent: this.intent,
            })
        },
        iconClass() {
            return cva("w-6 h-6", {
                variants: {
                    intent: {
                        info: "text-blue-700",
                        success: "text-green-600",
                        warning: "text-orange-400",
                        danger: "text-red-500",
                    }
                }
            })({
                intent: this.intent
            })
        },
        titleClass() {
            return cva("font-medium", {
                variants: {
                    intent: {
                        info: "text-blue-900",
                        success: "text-green-900",
                        warning: "text-orange-900",
                        danger: "text-red-900",
                    }
                }
            })({
                intent: this.intent
            })
        },
        contentClass() {
            return cva("text-sm", {
                variants: {
                    intent: {
                        info: "text-blue-800",
                        success: "text-green-800",
                        warning: "text-orange-800",
                        danger: "text-red-800",
                    }
                }
            })({
                intent: this.intent
            })
        },
        closeButtonClass() {
            return cva("p-0.5 rounded-md -m-1", {
                variants: {
                    intent: {
                        info: "text-blue-900/70 hover:text-blue-900 hover:bg-blue-200 active:bg-blue-300",
                        success: "text-green-900/70 hover:text-green-900 hover:bg-green-200 active:bg-green-300",
                        warning: "text-orange-900/70 hover:text-orange-900 hover:bg-orange-200 active:bg-orange-300",
                        danger: "text-red-900/70 hover:text-red-900 hover:bg-red-200 active:bg-red-300",
                    }
                }
            })({
                intent: this.intent
            })
        },
        iconComponent() {
            const icons = {
                success: CheckCircleIcon,
                warning: ExclamationTriangleIcon,
                danger: XCircleIcon,
                info: InformationCircleIcon,
                close: XMarkIcon
            };

            return icons[this.intent];
        }
    },
    methods: {
        dismiss() {
            if (this.onDismiss) {
                this.onDismiss();
            }
        }
    }
}

</script>