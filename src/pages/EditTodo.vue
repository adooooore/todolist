<template>
    <div class="row">
        <div class="col p-3 posttitle">
            To edit
        </div>
    </div>
    <div class="row newcontent_box">
        <div class="col">
            <div class="form-group type_box">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" value="Healing" v-model="todoItem.category"> <span
                        class="radio">Healing</span>
                </label><br />
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" value="Work" v-model="todoItem.category"> <span
                        class="radio">Work</span>
                </label><br />
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" value="Activity" v-model="todoItem.category"> <span
                        class="radio">Activity</span>
                </label>
            </div>
            <div class="form-group">
                <label htmlFor="todo" class="newtitle">title</label>
                <input type="text" class="form-control" id="todo" v-model="todoItem.todo"
                    style="background-color: rgba(255, 255, 255, 0.089); border: 0px; color: rgb(211, 211, 211);" />
            </div>
            <div class="form-group">
                <label htmlFor="desc" class="newtitle">content</label>
                <textarea class="form-control" rows="3" id="desc" v-model="todoItem.desc"
                    style="background-color: rgba(255, 255, 255, 0.089); border: 0px; color: rgb(211, 211, 211);"></textarea>
            </div>
            <div class="form-group">
                <label htmlFor="done" class="newtitle">completion </label>&nbsp;
                <input type="checkbox" v-model="todoItem.done" />
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary m-1" @click="updateTodoHandler"
                    style="border-radius: 100px; padding: 8px 20px; font-weight: 600; ">
                    Edit
                </button>
                <button type="button" class="btn btn-primary m-1" @click="router.push('/todos')"
                    style="border-radius: 100px; padding: 8px 20px; background-color: rgba(255, 255, 255, 0); border: 1px solid rgba(255, 255, 255, 0.3);">
                    Cancle
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const todoList = inject('todoList');
const { updateTodo } = inject('actions');
const router = useRouter();
const currentRoute = useRoute();

const matchedTodoItem = todoList.value.find((item) => item.id === parseInt(currentRoute.params.id));
if (!matchedTodoItem) {
    router.push('/todos');
}
const todoItem = reactive({ ...matchedTodoItem });

const updateTodoHandler = () => {
    let { todo } = todoItem;
    if (!todo || todo.trim() === "") {
        alert('할일은 반드시 입력해야 합니다');
        return;
    }
    updateTodo({ ...todoItem });
    router.push('/todos');
};
</script>

<style>
.type_box {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>