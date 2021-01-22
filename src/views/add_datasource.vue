<template>
    <a-layout style="padding: 24px 24px;">
        <div class="my_container">
            <span>添加数据源</span>
            <div style="width: 80%">
                <a-form :form="form" @submit="handleSubmit">
                    <a-form-item v-bind="formItemLayout" label="状态" has-feedback>
                        <a-select
                                v-decorator="[
                                  'databaseType',
                                   {
                                    initialValue:'1',
                                    rules: [
                                      {
                                        required: true,
                                      }
                                    ],
                                  },
                                ]"
                        >
                            <a-select-option v-for="(item,index) in status.list" :value="index" :key="index">
                                {{item}}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="code" has-feedback>
                        <a-input
                                allow-clear
                                v-decorator="[
                                  'code',
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: '请输入code!',
                                      }
                                    ],
                                  },
                                ]"
                        />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="database" has-feedback>
                        <a-input
                                allow-clear
                                v-decorator="[
                                  'database',
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: '请输入database!',
                                      }
                                    ],
                                  },
                                ]"
                        />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" v-model="base.token" label="数据库类型" has-feedback>
                        <a-select
                                v-decorator="[
                                  'databaseType',
                                   {
                                    initialValue:'1',
                                    rules: [
                                      {
                                        required: true,
                                      }
                                    ],
                                  },
                                ]"
                        >
                            <a-select-option v-for="(item,index) in base.list" :value="index" :key="index">
                                {{item}}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="Driver" has-feedback>
                        <a-input
                                allow-clear
                                v-decorator="[
                                  'Driver',
                                   {
                                    initialValue:'com.mysql.jdbc.Driver',
                                    rules: [
                                      {
                                        required: true,
                                        message: '请输入驱动类',
                                      },

                                    ],
                                  },
                                ]"
                        />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="链接" has-feedback>
                        <a-input
                                allow-clear
                                v-decorator="[
                                  'url',
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: '请输入url!',
                                      }
                                    ],
                                  },
                                ]"
                        />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="名字" has-feedback>
                        <a-input
                                allow-clear
                                v-decorator="[
                                  'name',
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: '请输入名字!',
                                      }
                                    ],
                                  },
                                ]"
                        />
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="密码" has-feedback>
                        <a-input-password
                                v-decorator="[
                                  'password',
                                  {
                                    rules: [
                                      {
                                        required: true,
                                        message: '请输入你的密码!',
                                      },
                                    ],
                                  },
                                ]"

                        />
                    </a-form-item>
                    <a-form-item v-bind="tailFormItemLayout">
                        <a-button type="primary" html-type="submit" style="width: 40%">
                            提交
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </a-layout>
</template>

<script>
    const status={
        token:"1",
        list: {
            1:"有效",
            2:"无效"
        }
    }
    const base={
        token:"1",
        list:{
            1:"MYSQL",
            2:"ORACLE"
        }
    }
    export default {
        data() {
            return {
                confirmDirty: false,
                base,
                status,
                autoCompleteResult: [],
                formItemLayout: {
                    labelCol: {
                        xs: { span: 24 },
                        sm: { span: 8 },
                    },
                    wrapperCol: {
                        xs: { span: 24 },
                        sm: { span: 16 },
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 12,
                        },
                    },
                },
            };
        },

        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'register' });
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], { force: true });
                }
                callback();
            },

        },
    };
</script>
<style>
    .my_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /*align-items: center;*/
        width: 100%;
        background-color: #FFFFFF;
    }
    .my_container>span{
        text-align: center;
        padding: 24px;
    }
    .my_container>div{
        width: 80%;
    }
</style>