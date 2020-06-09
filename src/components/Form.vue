<template>
    <div>
        <div v-if="isSignin">
            <div>
                <button @click="showCommentForm = !showCommentForm" class="btn btn__add">
                   <span></span>
                   </button>
            </div>
        </div>
        <div v-else>
            <button @click="linkToLogin()" class="btn btn__add">
                <span></span>
            </button>
        </div>
        <div>
            <transition name="overlay" v-if="showCommentForm">
                <div class="drawer__overlay" @click.stop="showCommentForm = !showCommentForm"></div>
            </transition>
            <transition name="drawer">
                <div class="drawer__base" v-if="showCommentForm">
                    <div class="drawer__baseInner">
                        <p>新しいコメント</p>
                        <div v-if="errorMessage.emptyName == true">
                            <p>ニックネームを入力してください</p>
                        </div>
                        <p><input type="text" v-model="newPost.name" placeholder="ニックネーム" v-on:keyup.shift.enter="addComment()" class="form form__input"></p>
                        <div v-if="errorMessage.emptyComment == true">
                            <p>コメントを入力してください</p>
                        </div>
                        <p>
                            <textarea type="text" rows="10" cols="5" v-model="newPost.comment" v-on:keyup.shift.enter="addComment()" placeholder="コメント" class="form form__inputComment"></textarea>
                            <span class="btn__keyTips">send: Shift + Enter</span>
                        </p>
                        <div>
                            <button @click="addComment()" class="btn btn__send">
                                                                                    投稿
                                                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
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
        computed: {
            isSignin() {
                return this.idToken !== null ? true : false
            },
            idToken() {
                return this.$store.getters.idToken
            }
        },
        methods: {
            linkToLogin() {
                this.$router.push('login')
            },
            addComment() {
                if (Object.keys(this.newPost.comment).length === 0 || Object.keys(this.newPost.name).length === 0) {
                    if (Object.keys(this.newPost.name).length === 0) {
                        this.errorMessage.emptyName = true
                    }
                    if (Object.keys(this.newPost.comment).length === 0) {
                        this.errorMessage.emptyComment = true
                    }
                } else {
                    axios.post(
                        'https://firestore.googleapis.com/v1/projects/vue-chat-82fcf/databases/(default)/documents/comments', {
                            fields: {
                                name: {
                                    stringValue: this.newPost.name
                                },
                                comment: {
                                    stringValue: this.newPost.comment
                                }
                            }
                        }, {
                            headers: {
                                Authorization: `Bearer ${this.idToken}`
                            }
                        }
                    ).then(response => {
                        console.log(response);
                        this.$store.dispatch('getPosts')
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
    .drawer-enter,
    .drawer-leave-to {
        transform: translateY(500px);
    }
    .drawer-enter-to,
    .drawer-leave {
        transform: translateY(0);
    }
    .drawer-enter-active,
    .drawer-leave-active {
        transition: transform .5s;
    }
    .overlay-enter,
    .overlay-leave-to {
        opacity: 0;
    }
    .overlay-enter-to,
    .overlay-leave {
        opacity: 1;
    }
    .opacity-enter-active,
    .opacity-leave-active {
        transition: opacity .2s;
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
            bottom: 0;
            border-radius: 30px 30px 0 0;
            width: 100%;
            height: 500px;
        }
        &__baseInner {
            padding: 24px;
            max-width: 600px;
            min-height: inherit;
            margin: auto;
        }
    }
</style>