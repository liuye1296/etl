<template>
    <a-layout style="padding: 24px 24px;">
        <div id="components-form-demo-advanced-search">
            <a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch" >
                <a-row :gutter="24" >
                    <a-col
                            :span="8"
                    >
                        <a-form-item :label="`id`">
                            <a-input
                                    v-decorator="[
                                        `id`,
                                        {
                                          rules: [
                                            {
                                              required: false,
                                              message: 'Input something!',
                                            },
                                          ],
                                        },
                                      ]"
                                    placeholder="请输入id"
                            />
                        </a-form-item>
                    </a-col>
                    <a-col
                            :span="8"
                    >
                        <a-form-item :label="`源数据库id`">
                            <a-input
                                    v-decorator="[
                                        `source_id`,
                                        {
                                          rules: [
                                            {
                                              required: false,
                                              message: 'Input something!',
                                            },
                                          ],
                                        },
                                      ]"
                                    placeholder="请输入源数据库ID"
                            />
                        </a-form-item>
                    </a-col>
                    <a-col
                            :span="8"
                    >
                        <a-form-item :label="`源数据表名`">
                            <a-input
                                    v-decorator="[
                                        `source_form`,
                                        {
                                          rules: [
                                            {
                                              required: false,
                                              message: 'Input something!',
                                            },
                                          ],
                                        },
                                      ]"
                                    placeholder="请输入源数据表名"
                            />
                        </a-form-item>
                    </a-col>
                    <a-col
                            :span="8"
                            :style="{ display: count ? 'block' : 'none' }"
                    >
                        <a-form-item :label="`目标库`">
                            <a-input
                                    v-decorator="[
                                        `database`,
                                        {
                                          rules: [
                                            {
                                              required: false,
                                              message: 'Input something!',
                                            },
                                          ],
                                        },
                                      ]"
                                    placeholder="请输入目标库id"
                            />
                        </a-form-item>
                    </a-col>
                    <a-col
                            :span="8"
                            :style="{ display: count ? 'block' : 'none' }"
                    >
                        <a-form-item :label="`目标表`">
                            <a-input
                                    v-decorator="[
                                        `sourcce_table`,
                                        {
                                          rules: [
                                            {
                                              required: false,
                                              message: 'Input something!',
                                            },
                                          ],
                                        },
                                      ]"
                                    placeholder="请输入目标表名"
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
                        <a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">
                            更多 <a-icon :type="expand ? 'up' : 'down'" />
                        </a>
                    </a-col>
                </a-row>
            </a-form>
            <a-layout-content style="margin: 16px 0;padding: 8px 16px;;background-color: #FFFFFF">
                <a-button type="primary">
                    <router-link to="/">添加关联</router-link>
                </a-button>
            </a-layout-content>
            <div class="search-result-list">
                <a-table
                        :columns="columns"
                        :data-source="list"
                        :pagination="{
                            defaultPageSize: 10,
                            showSizeChanger: true,
                            pageSizeOptions: ['10', '20', '50', '100'],
                            }"
                        class="components-table-demo-nested"
                >
                    <!--        编辑-->
                    <a slot="operation" slot-scope="text">编辑</a>
                    <!--        时间-->
                    <td slot="createTime" slot-scope="text">{{time(text)}}</td>
                    <!--        数据库-->
                    <td slot="sourceDatasourceId" slot-scope="text">{{get_name(text)}}</td>
                    <!--        关联数据库-->
                    <td slot="targetDatasourceId" slot-scope="text">{{get_name(text)}}</td>
                    <!--       编辑定时任务-->
                    <a slot="edit_mission" slot-scope="text">编辑定时任务</a>
                    <a-table
                            slot="expandedRowRender"
                            slot-scope="text"
                            :columns="innerColumns"
                            :data-source="text.resultMap"
                            :pagination="{
                            defaultPageSize: 10,
                            showSizeChanger: true,
                            pageSizeOptions: ['10', '20', '50', '100'],
                            }"
                    >
                        <!--            <tr slot="jdbcType" slot-scope="text">{{text.jdbcType}}</tr>-->
                    </a-table>
                </a-table>
            </div>
        </div>
    </a-layout>
</template>
<script>
    //数字转换成时间
    Date.prototype.toLocaleString = function() {
        let year = this.getFullYear();
        let Month = this.getMonth()+1;
        let Date = this.getDate();
        let Hours = this.getHours();
        let Minutes = this.getMinutes();
        let Seconds = this.getSeconds();
        if (Month<10){
            Month = "0"+Month;
        }
        if (Date<10){
            Date = "0"+Date;
        }
        if (Hours<10){
            Hours = "0"+Hours;
        }
        if (Minutes<10){
            Minutes = "0"+Minutes;
        }
        if (Seconds<10){
            Seconds = "0"+Seconds;
        }
        return year + "-" + Month + "-" + Date + " " + Hours + ":" + Minutes + ":" + Seconds;
    };
    const columns = [
        {
            title: '数据库',
            dataIndex: 'sourceDatasourceId',
            key:"sourceDatasourceId",
            scopedSlots: {customRender: "sourceDatasourceId"},
            className: "bg_color"
        },
        {
            title: '表名',
            dataIndex: 'sourceTable',
            key: "sourceTable",
            ellipsis: true,
        },
        {
            title: '关联数据库',
            dataIndex: 'targetDatasourceId',
            key: "targetDatasourceId",
            ellipsis: true,
            scopedSlots: {customRender: "targetDatasourceId"}
        },
        {
            title: '关联表',
            dataIndex: 'targetTable',
            key: "targetTable",
            ellipsis: true,
        },
        {
            title: '创建人',
            dataIndex: 'updateBy',
            key: 'updateBy',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            ellipsis: true,
            defaultSortOrder: 'descend',
            scopedSlots: { customRender: 'createTime' },
            // sorter: (a, b) => a.cronExpression - b.cronExpression,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            ellipsis: true,
            scopedSlots: { customRender: 'operation' },
        },
        {
            title: ' ',
            dataIndex: 'edit_mission',
            key: 'edit_mission',
            ellipsis: true,
            scopedSlots: { customRender: 'edit_mission' },
        },
        // {
        //     title: 'resultMap',
        //     dataIndex: 'resultMap',
        //     key: 'resultMap',
        //     ellipsis: true,
        // },
    ];//外层数据头
    const list = [];//关联数据库
    const data_source = [];//数据源
    const innerColumns = [
        { title: '字段', dataIndex: 'sourceColumn', key: 'sourceColumn' },
        { title: '关联字段', dataIndex: 'transferColumn', key: 'transferColumn' },
        { title: 'jdbcType', dataIndex:"jdbcType", key: 'jdbcType'},
        { title: '备注', dataIndex: 'remark', key: 'remark' },
    ];//内层数据头
    const innerData = [];
    import { get } from "axios";
    export default {
        name:"relation_database",
        data() {
            return {
                list,
                data_source,
                columns,
                innerColumns,
                innerData,
                expand: true,
                form: this.$form.createForm(this, { name: 'advanced_search' }),
            };
        },
        computed: {
            count() {
                return !this.expand;
            },
        },
        updated() {
            console.log('updated');
        },
        methods:{
            //时间格式
            time:function(data) {
                let unixTimestamp = new Date( data ) ;
                let commonTime = unixTimestamp.toLocaleString();
                return commonTime;
            },
            //获取数据库名字
            get_name:function(id) {
                for(let key in this.data_source){
                    if (this.data_source[key].id == id){
                        return this.data_source[key].database;
                        break
                    }
                }
            },
            //有关搜索栏
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

            toggle() {
                this.expand = !this.expand;
            },
        },
        async created() {
            const { data } = await get("/basicData/tables/getAllTables");//关联数据库
            const data_source = await get("basicData/datasource/getAllDatasource");//数据源
            this.list = data.data;
            console.log(this.list[0].resultMap);
            this.data_source = data_source.data.data;

        },
    };

</script>
<!--搜索栏-->

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