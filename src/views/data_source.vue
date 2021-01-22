<template>
    <a-layout style="padding: 24px 24px;">
        <a-layout-content style="margin: 16px 0;padding: 8px 16px;;background-color: #FFFFFF">
            <a-button type="primary">
                <router-link to="/add_datasource">添加数据源</router-link>
            </a-button>
        </a-layout-content>
        <div style="background-color: #FFFFFF">
            <a-table :columns="columns"
                     :data-source="list"
                     :pagination="pagination">
                <!--                链接-->
                <a slot="url" slot-scope="text" @click="warning(text)">{{text}}</a>
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
    </a-layout>
</template>


<script>
    const columns = [
        {
            title: 'database',
            dataIndex: 'database',
            key:"database"
        },
        {
            title: 'code',
            dataIndex: 'code',
            key: "code",
            ellipsis: true,
        },
        {
            title: '链接',
            dataIndex: 'url',
            key: "url",
            ellipsis: true,
            scopedSlots: { customRender: 'url' },
        },
        {
            title: '数据库类型',
            dataIndex: 'driverType',
            key: "driverType",
            ellipsis: true,
        },
        {
            title: '驱动类',
            dataIndex: 'driverClass',
            key: 'driverClass',
        },
        {
            title: '创建人',
            dataIndex: 'updateBy',
            key: 'updateBy',
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
        name:"data_source",
        methods:{
            //    提示框
            warning(url) {
                // console.log(e);
                this.$warning({
                    title: "链接",
                    content: url,
                    okText:"知道了"
                });
            },
        },
        data() {
            return {
                list,
                columns,
                pagination:{
                    style:"position: absolute;right:0"
                }
            };
        },
        async created() {
            const { data } = await get("basicData/datasource/getAllDatasource");
            console.log(data);
            this.list = data.data;
        },
    };


</script>

<style scoped>
    .data_title{
        background-color:#FAFAFA;
    }
    .data_container{
        padding: 20px;
        font-weight: bold;
        border-bottom: 1px solid #F0F0F0;
        margin-right: 0;
        margin-left: 0;
    }
    .data_container>div{
        word-break: break-all;
        padding-right: 30px;
    }
</style>