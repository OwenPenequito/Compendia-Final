<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
        
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>


<style>
.modal {
    width: 300px;
    padding: 20px;
    margin: 100px auto;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    color: cyan;
}
.modal h1 {
        color: #03cfb4;
        border: none;
        padding: 0;
}
</style>