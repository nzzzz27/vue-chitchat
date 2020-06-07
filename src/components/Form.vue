<template>
    <div>
        <button @click="showCommentForm = !showCommentForm" class="btn btn__add">
                    <span></span>
        </button>
        <transition>
            <div v-show="showCommentForm">
                <div class="drawer__overlay" @click.stop="showCommentForm = !showCommentForm"></div>
                <div class="drawer__base">
                    <div class="drawer__baseInner">
                        <p>新しいコメント</p>
                        <div v-if="errorMessage.emptyName == true">
                            <p>ニックネームを入力してください</p>
                        </div>
                        <p><input type="text" v-model="newPost.name" placeholder="ニックネーム" class="form form__input"></p>
                        <div v-if="errorMessage.emptyComment == true">
                            <p>コメントを入力してください</p>
                        </div>
                        <p><textarea type="text" rows="10" cols="5" v-model="newPost.comment" v-on:keyup.enter="addComment()" placeholder="コメント" class="form form__inputComment"></textarea></p>
                        <button @click="addComment()" class="btn btn__send">
                                    投稿<span>（Press Enter）</span>
                                </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Form',
        data() {
            return {
                showCommentForm: false,
                errorMessage: {
                    emptyName: false,
                    emptyComment: false
                },
                newPost: {
                    name: '',
                    comment: ''
                },
            }
        },
        methods: {
            addComment() {
                if (Object.keys(this.newPost.comment).length === 0 || Object.keys(this.newPost.name).length === 0) {
                    if (Object.keys(this.newPost.name).length === 0) {
                        this.errorMessage.emptyName = true
                        console.log('error')
                    }
                    if (Object.keys(this.newPost.comment).length === 0) {
                        this.errorMessage.emptyComment = true
                    }
                } else {
                    axios.post(
                        '/comments', {
                            fields: {
                                name: {
                                    stringValue: this.newPost.name
                                },
                                comment: {
                                    stringValue: this.newPost.comment
                                }
                            },
                        }
                    ).then(response => {
                        console.log(response);
                        this.$store.dispatch('getPosts')
                    }).catch(error => {
                        console.log(error);
                    })
                    this.newPost.comment = '',
                        this.newPost.name = '',
                        this.showCommentForm = false,
                        this.errorMessage.emptyName = false,
                        this.errorMessage.emptyComment = false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
        &__send {
            width: 100%;
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            background-color: #2c3e50;
            span {
                font-size: 14px;
                font-weight: normal;
            }
        }
        &__add {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: none;
            background-color: #dc0a58;
            position: fixed;
            bottom: 100px;
            left: 80%;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
            span {
                display: flex;
                align-items: center;
                justify-content: center;
                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    background-color: white;
                    border-radius: 3px;
                }
                &::before {
                    width: 5px;
                    height: 40px;
                }
                &::after {
                    width: 40px;
                    height: 5px;
                }
            }
        }
    }
    .form {
        width: 100%;
        padding: 8px;
        font-size: 16px;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, .12);
        border-radius: 5px;
        &:not(:first-of-type) {
            margin-top: 8px;
        }
    }
    .drawer {
        &__overlay {
            position: fixed;
            top: 0;
            left: 0;
            height: 0;
            width: 100vw;
            min-height: 100vh;
            background-color: rgba(0, 0, 0, .6);
            cursor: pointer;
        }
        &__base {
            background-color: #f7f9f9;
            position: fixed;
            left: 0;
            bottom: 0px;
            border-radius: 30px 30px 0 0;
            width: 100%;
            min-height: 500px;
        }
        &__baseInner {
            padding: 24px;
            max-width: 600px;
            min-height: inherit;
            margin: auto;
        }
    }
</style>