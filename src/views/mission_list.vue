<template>
    <a-layout style="padding: 24px 24px;">
        <div id="components-form-demo-advanced-search">
            <a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch" >
                <a-row :gutter="24">
                    <a-col
                            :span="8"
                    >
                        <a-form-item :label="`编号`">
                            <a-input
                                    v-decorator="[
                                    `number`,
                                    {
                                      rules: [
                                        {
                                          required: false,
                                          message: 'Input something!',
                                        },
                                      ],
                                    },
                                  ]"
                                    placeholder="placeholder"
                            />
                        </a-form-item>
                    </a-col>
                    <a-col
                            :span="8"
                    >
                        <a-form-item :label="`job组`">
                            <a-input
                                    v-decorator="[
                                    `job`,
                                    {
                                      rules: [
                                        {
                                          required: false,
                                          message: 'Input something!',
                                        },
                                      ],
                                    },
                                  ]"
                                    placeholder="placeholder"
                            />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row>
                    <a-col :span="24" :style="{ textAlign: 'right' }">
                        <a-button type="primary" html-type="submit">
                            查询
                        </a-button>
                        <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
                            清除
                        </a-button>
                    </a-col>
                </a-row>
            </a-form>
            <div class="search-result-list">
                <a-table :columns="columns" :data-source="list"
                         :pagination="{
                            defaultPageSize: 10,
                            showSizeChanger: true,
                            pageSizeOptions: ['10', '20', '50', '100'],
                            }">
                    <!--                编辑-->
                    <template slot="operation" slot-scope="text, record, index">
                        <div class="editable-row-operations">
                        <span >
                          <router-link to="/">编辑</router-link>
                        </span>
                        </div>
                    </template>
                </a-table>
            </div>
        </div>
    </a-layout>
</template>
<script>
    const columns = [
        {
            title: 'id',
            dataIndex: 'etlTablesId',
            key:"etlTablesId"
        },
        {
            title: '编号',
            dataIndex: 'code',
            key: "code",
            ellipsis: true,
        },
        {
            title: 'job组',
            dataIndex: 'jobGroup',
            key: "jobGroup",
            ellipsis: true
        },
        {
            title: 'jobClassName',
            dataIndex: 'jobClassName',
            key: "jobClassName",
            ellipsis: true,
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'cronExpression',
            dataIndex: 'cronExpression',
            key: 'cronExpression',
            ellipsis: true,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            ellipsis: true,
            scopedSlots: { customRender: 'operation' },
        },
    ];
    const list = [];
    import { get } from "axios";
    export default {
        name:"mission_list",
        data() {
            return {
                columns,
                list,
                expand: false,
                form: this.$form.createForm(this, { name: 'advanced_search' }),
            };
        },
        async created() {
            const { data } = await get("/etlTask/jobTask/getAllJobTask");
            console.log(data);
            this.list = data.data;
        },
        computed: {
            count() {
                return this.expand ? 11 : 7;
            },
        },
        updated() {
            console.log('updated');
        },
        methods: {
            handleSearch(e) {
                e.preventDefault();
                this.form.validateFields((error, values) => {
                    console.log('error', error);
                    console.log('Received values of form: ', values);
                });
            },

            handleReset() {
                this.form.resetFields();
            },
        },
    };
</script>
<style scoped>
    ::v-deep .ant-table-tbody{
        background-color: #FFFFFF;
    }
</style>
<style>

    .ant-advanced-search-form {
        padding: 24px;
        border-radius: 0;
        border: none;
        background-color: #FFFFFF;
    }

    .ant-advanced-search-form .ant-form-item {
        display: flex;
    }

    .ant-advanced-search-form .ant-form-item-control-wrapper {
        flex: 1;
    }

    #components-form-demo-advanced-search .ant-form {
        max-width: none;
    }
    #components-form-demo-advanced-search .search-result-list {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        /*background-color: #fafafa;*/
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
    }
    #components-form-demo-advanced-search .search-result-list {
        padding-top: 0;
    }

</style>