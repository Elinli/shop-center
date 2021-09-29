<template>
    <div>authority</div>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
export default defineComponent({
    components: {},
    setup() {
        const a = ref(1);
        const b = reactive([]);
        return {a, b};
    }
});
</script>

<style scoped lang="less"></style>
