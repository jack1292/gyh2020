<template>
    <div>
        <van-dialog v-model="show" title="文字洽谈" confirm-button-text="提交" show-cancel-button @cancel="hide"
                    @confirm="submit" :before-close="onBeforeClose">
            <van-cell-group border class="solid">
                <van-field
                        label-width="3.3em"
                        v-model="username"
                        required
                        label="姓名"
                        placeholder="请输入您的姓名"
                />
                <van-field
                        label-width="3.3em"
                        v-model="organize"
                        required
                        label="机构"
                        placeholder="请输入您的机构名称"
                />
                <van-field
                        label-width="3.3em"
                        v-model="phone"
                        required
                        label="电话"
                        placeholder="请输入您的电话"
                />
                <van-field
                        label-width="3.3em"
                        v-model="content"
                        required
                        rows="3"
                        autosize
                        border
                        label="留言"
                        type="textarea"
                        placeholder="请输入您要洽谈的内容"
                />
            </van-cell-group>
        </van-dialog>
    </div>

</template>
<script>
    import {addMessage} from '@/api'
    import {Toast} from "vant";

    export default {
        name: "Message",
        data() {
            return {
                username: '',
                organize: '',
                phone: '',
                content: '',
            }
        },
        props: {
            show: {
                type: Boolean
            },
            id: {
                type: String,
            },
        },
        methods: {
            async submit() {
                if (!this.username) {
                    Toast('请输入您的姓名')
                    return
                }
                if (!this.organize) {
                    Toast('请输入您的机构名称')
                    return
                }
                if (!this.phone) {
                    Toast('请输入您的电话')
                    return
                }
                if (!this.content) {
                    Toast('请输入您要洽谈的内容')
                    return
                }
                let _data = await addMessage(this.id, this.username, this.phone, this.organize, this.content)
                if (_data.status === 200) {
                    this.username = ''
                    this.organize = ''
                    this.phone = ''
                    this.content = ''
                    Toast('提交成功')
                    this.$emit('setMessage', false)
                } else {
                    Toast(_data.msg)
                }
            },
            onBeforeClose(action, done) {
                if (action === "confirm") {
                    return done(false);
                } else {
                    this.$emit('setMessage', false)
                    return done();
                }
            },
            hide() {
                this.$emit('setMessage', false)
            }
        }
    }
</script>

<style scoped lang="scss">
    .solid {
        padding:30px ;
        border-bottom: 1px solid #eeeeee;
    }

</style>