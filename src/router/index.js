import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import TodoList from '@/pages/TodoList.vue';
import AddTodo from '@/pages/AddTodo.vue';
import EditTodo from '@/pages/EditTodo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/todos', component: TodoList },
        { path: '/todos/add', component: AddTodo },
        { path: '/todos/edit/:id', component: EditTodo },
    ]
});

export default router;