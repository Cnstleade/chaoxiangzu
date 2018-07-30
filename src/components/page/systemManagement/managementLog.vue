<template>
    <div class="container">
        <el-row>
            <el-alert
              :title="title"
              :closable="false"
              type="info">
            </el-alert>           
        </el-row>  
        <el-table
            :data="tableData"  
            border  
            ref="multipleTable" 
            tooltip-effect="dark"
            style="width: 100%"
            class="m20"
            @selection-change="handleSelectionChange"
            v-loading="loading"
            id="text"
          >
                 <el-table-column prop="id" label="编号" align="center" width="80" sortable>
   
            </el-table-column>
            <el-table-column prop="username" label="操作用户" align="center" width="160"  sortable>
   
            </el-table-column>
            <el-table-column prop="operation" label="描述" align="center"  min-width="150">
                    <template slot-scope="scope">
                          <el-tooltip class="item" effect="dark" :content="scope.row.operation" placement="top">
                              <span>{{scope.row.operation}}</span>
                          </el-tooltip>
                    </template> 
            </el-table-column>
            <el-table-column prop="time" label="耗时（毫秒）" align="center" width="120" sortable>
   
            </el-table-column>
            <el-table-column prop="method" label="操作方法" align="center"  min-width="400">
                     <template slot-scope="scope">
                          <el-tooltip class="item" effect="dark" :content="scope.row.method" placement="top">
                              <span>{{scope.row.method}}</span>
                          </el-tooltip>
                    </template> 
            </el-table-column>
            <el-table-column prop="ip" label="登陆IP地址" align="center" width="140"  >
   
            </el-table-column>   
            <el-table-column prop="createTime" label="操作时间" align="center" width="180" sortable>
   
            </el-table-column>                                                            
            

                <!-- <el-table-column prop="cz"  align="center" label="操作"   >
                    <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="success"
                        @click="handleAllocation(scope.$index, scope.row)"
                       >分配</el-button>
                    </template> 
                </el-table-column>             -->
        </el-table>     
        <el-row class="m20" v-if="total>0">
             <div style="float:right">
                 <el-pagination
                   @current-change="handleCurrentChange"
                    @size-change="handleSizeChange"
                   :current-page="npage"
                    :page-sizes="[10, 20, 30, 40]"
                     :page-size="pagesize"
                   background
                   layout="total,sizes,prev, pager, next,jumper"
                   :total="total">
                 </el-pagination>   
             </div>
        </el-row>                               
    </div>
</template>

<script>

export default {
  data() {
    return {
      title: "日志列表",
      search: {
        input: "",
        time: ""
      },
      tableData: [],
      loading: true,
      npage: 1,
      pagesize: 10,
      total: 0,
      multipleSelection: [] //全部选中嘛
    };
  },

  methods: {
    getData(pageNum, pageSize) {
      let _this = this;
      // httpLogList(pageNum, pageSize)
      _this.loading = true;
      let data = {
        msg: "操作成功",
        code: 200,
        data: {
          pageNum: 1,
          pageSize: 10,
          size: 10,
          startRow: 1,
          endRow: 10,
          total: 838,
          pages: 84,
          list: [
            {
              id: 838,
              username: "admin",
              operation: "日志查询",
              time: 236,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-30 02:25:36",
              location: null
            },
            {
              id: 837,
              username: "admin",
              operation: "日志查询",
              time: 190,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 02:23:00",
              location: null
            },
            {
              id: 836,
              username: "admin",
              operation: "日志查询",
              time: 192,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 02:22:52",
              location: null
            },
            {
              id: 835,
              username: "admin",
              operation: "日志查询",
              time: 208,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 02:22:28",
              location: null
            },
            {
              id: 834,
              username: "admin",
              operation: "日志查询",
              time: 198,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 02:22:26",
              location: null
            },
            {
              id: 833,
              username: "admin",
              operation: "日志查询",
              time: 166,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 02:22:17",
              location: null
            },
            {
              id: 832,
              username: "admin",
              operation: "日志查询",
              time: 205,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 02:22:05",
              location: null
            },
            {
              id: 831,
              username: "admin",
              operation: "日志查询",
              time: 217,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 02:21:55",
              location: null
            },
            {
              id: 830,
              username: "admin",
              operation: "日志查询",
              time: 168,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-27 01:45:09",
              location: null
            },
            {
              id: 829,
              username: "admin",
              operation: "日志查询",
              time: 227,
              method:
                "com.hengshun.sms.system.controller.LogController.logList()",
              params:
                "sysLogConditionVO: BaseConditionVO(pageNumber=1, pageSize=10, pageStart=0, orderField=null, orderDirection=null, keywords=null, startDate=null, endDate=null)",
              ip: "58.213.133.150",
              createTime: "2018-07-26 07:10:18",
              location: null
            }
          ],
          prePage: 0,
          nextPage: 2,
          isFirstPage: true,
          isLastPage: false,
          hasPreviousPage: false,
          hasNextPage: true,
          navigatePages: 8,
          navigatepageNums: [1, 2, 3, 4, 5, 6, 7, 8],
          navigateFirstPage: 1,
          navigateLastPage: 8,
          firstPage: 1,
          lastPage: 8
        }
      };
      if (data.code == 200) {
        _this.tableData = data.data.list;
        _this.total = data.data.total;
      } else if (data.code == 500) {
        this.$message.error(data.msg);
        this.$router.push("/login");
      } else {
        this.$message.error(data.msg);
      }
      setTimeout(() => {
        _this.loading = false;
      }, 800);
      // .catch(err => {
      //   console.log(err);
      //   let data = err.response ? err.response.data : {};

      //   if (data.message == "当前登陆用户已失效，请重新登陆") {
      //     this.$message.error(data.message);
      //     this.$router.push("/login");
      //   } else {
      //     this.$message.error("网络错误请联系管理员");
      //   }
      //   _this.tableData = [];
      //   _this.loading = false;
      // });
    },
    handleSearch() {
      this.getData(this.npage, this.pagesize);
    },
    handleAllocation(index, row) {},
    handleCurrentChange(val) {
      this.npage = val;
      this.handleSearch();
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.handleSearch();
    },
    reset() {
      this.search = null;
      this.getData(this.npage, this.pagesize);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
    this.getData(this.npage, this.pagesize);
    console.log(1);
  }
};
</script>

<style>
#text .cell {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
