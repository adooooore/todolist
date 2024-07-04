<template>
    <div class="row">
        <div class="col p-3 addbt addbt">
            <router-link class="btn" to="/todos/add">
                add
            </router-link>
        </div>
    </div>
    <div class="row" style="padding-top: 12px;">
        <div class="col">
            <ul class="list-group">
                <TodoItem v-for="todoItem in todoList" :key="todoItem.id" :todoItem="todoItem" />
            </ul>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
import TodoItem from '@/pages/TodoItem.vue';

const todoList = inject('todoList');
</script>

<style>
.row > .col > .btn {
    border: 1px solid rgba(255, 255, 255, 0.3);
    ;
    color: white;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 20px;
    width: 100px;
}
.row > .col > .btn:hover {
    background-color: rgba(255, 255, 255, 0.5);
}
.list-group {
    width: 100%;
    gap: 6px;
}
.addbt {
    align-items: end;
}
</style>