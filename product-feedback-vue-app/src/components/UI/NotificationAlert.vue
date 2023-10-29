<template>
    <dialog open class="bg-blue-200 text-blue-900 p-4 rounded shadow-md">
        <slot></slot>
    </dialog>
</template>

<script>
// import Swal from "sweetalert2";

export default {

    // methods: {
    //     alerts(type, message) {
    //         const Toast = Swal.mixin({
    //             toast: true,
    //             position: 'top',
    //             showConfirmButton: false,
    //             timer: 10000,
    //             timerProgressBar: true,
    //             didOpen: (toast) => {
    //                 toast.addEventListener('mouseenter', Swal.stopTimer);
    //                 toast.addEventListener('mouseleave', Swal.resumeTimer);
    //             },
    //         });
    //
    //         Toast.fire({
    //             icon: type,
    //             title: message,
    //         });
    //     }
    // }
}

</script>
