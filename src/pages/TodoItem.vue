<template>
  <li :class="todoItem.done ? 'list-group-item list-group-item-success' : 'list-group-item'"
    style="border-radius: 20px; padding: 20px;">
    <span :class="todoItem.done ? 'todo-done pointer' : 'pointer'" @click="toggleDone(todoItem.id)"
      style="font-size: 24px;">
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <span class="float-end badge bg-secondary pointer m-1" @click="router.push(`/todos/edit/${todoItem.id}`)" style="font-size: 16px;
    padding: 10px 20px;
    border-radius: 50px;">
      Edit</span>
    <span class="float-end badge bg-secondary pointer m-1" @click="deleteTodo(todoItem.id)" style="font-size: 16px;
    padding: 10px 20px;
    border-radius: 50px;">
      Delete</span>
    <p>{{ todoItem.desc }}</p>
    <p>카테고리: {{ todoItem.category }}</p>
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

defineProps({
  todoItem: { Type: Object, required: true }
});

const router = useRouter();
const { deleteTodo, toggleDone } = inject('actions');
// console.log(todo);
</script>

<style></style>
