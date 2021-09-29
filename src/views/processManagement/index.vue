<template>
    <div>process</div>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
export default defineComponent({
    components: {},
    setup() {
        const a = reactive([]);
        const b = ref(1);
        return {a, b};
    }
});
</script>

<style scoped lang="less"></style>
