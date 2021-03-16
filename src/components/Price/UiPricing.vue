<template lang="">
            <a-row :gutter="16">
                <a-col :xs="{span:24 }" :sm="{span:12}" :lg="{span:8}">
                    <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
                    <a-list bordered :data-source="data">
                        <template #renderItem="{ item }">
                            <a-list-item>{{ item }}</a-list-item>
                        </template>
                        <template #header>
                            <div>Header</div>
                        </template>
                        <template #footer>
                            <div>Footer</div>
                        </template>
                    </a-list>
                </a-col>
                <a-col :xs="{span:24 }" :sm="{span:12}" :lg="{span:8}">
                    <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
                    <a-list bordered :data-source="data">
                        <template #renderItem="{ item }">
                            <a-list-item>{{ item }}</a-list-item>
                        </template>
                        <template #header>
                            <div>Header</div>
                        </template>
                        <template #footer>
                            <div>Footer</div>
                        </template>
                    </a-list>
                </a-col>
                <a-col :xs="{span:24 }" :sm="{span:12}" :lg="{span:8}">
                    <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
                    <a-list bordered :data-source="data">
                        <template #renderItem="{ item }">
                            <a-list-item>{{ item }}</a-list-item>
                        </template>
                        <template #header>
                            <div>Header</div>
                        </template>
                        <template #footer>
                            <div>Footer</div>
                        </template>
                    </a-list>
                </a-col>
            </a-row>
</template>
<script lang="ts">
    
    import {
        defineComponent
    } from "vue";
    const data: string[] =[
        'Vận chuyển mở',
        'Có giá đỡ',
        'Tối đa 8-10 xe',
        'vận chuyển tất cả các vùng miền'
    ]
    export default defineComponent({
       

        setup(){
            return{
                data
            }
        }
    });
</script>
<style lang="">
</style>