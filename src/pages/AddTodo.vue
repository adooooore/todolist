<template>
    <div class="row">
        <div class="col p-3 posttitle">
            Add new post
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
                <input type="text" class="form-control newpost_content" id="todo" v-model="todoItem.todo"
                    style="background-color: rgba(255, 255, 255, 0.089); border: 0px; color: rgb(211, 211, 211);" />
            </div>
            <div class="form-group">
                <label htmlFor="desc" class="newtitle">content</label>
                <textarea class="form-control" rows="3" id="desc" v-model="todoItem.desc"
                    style="background-color: rgba(255, 255, 255, 0.089); border: 0px; color: rgb(211, 211, 211);"></textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary m-1" @click="addTodoHandler"
                    style="border-radius: 100px; padding: 8px 20px; font-weight: 600; ">
                    Add
                </button>
                <button type="button" class="btn btn-primary m-1 cancle" @click="router.push('/todos')"
                    style="border-radius: 100px; padding: 8px 20px; background-color: rgba(255, 255, 255, 0); border: 1px solid rgba(255, 255, 255, 0.3);">
                    Cancle
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { addTodo } = inject('actions');
const todoItem = reactive({ todo: "", desc: "", category: "Healing" });

const addTodoHandler = () => {
    let { todo } = todoItem;
    if (!todo || todo.trim() === "") {
        alert('할일은 반드시 입력해야 합니다');
        return;
    }
    addTodo({ ...todoItem });
    router.push('/todos');
};
</script>

<style>
.type_box {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.posttitle {
    color: white;
    font-size: 24px;
}
.radio {
    color: white;
}
.newtitle {
    color: white;
    font-size: 18px;
    padding: 6px 0;
}
.col {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.newcontent_box {
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 20px;
}
.cancle:hover {
    background-color: rgba(255, 255, 255, 0.5);
}
</style>