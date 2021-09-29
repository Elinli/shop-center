<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>
<script>
import {defineComponent, onMounted} from 'vue';

export default defineComponent({
    setup() {
        onMounted(() => {
            history.pushState(null, null, document.URL);
            window.addEventListener('popstate', function(e) {
                e.preventDefault()
                history.pushState(null, null, document.URL);
            });
        });
    }
});
</script>
<style lang="less"></style>
