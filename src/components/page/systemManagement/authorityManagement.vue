<template>
    <div class="container">
        <el-row>
            <el-alert
              :title="title"
              :closable="false"
              type="info">
            </el-alert>           
        </el-row>  
        <el-row class="m20" >
            <el-col :span="2">
                    <el-button  icon="el-icon-plus" type="primary" @click="dialogVisible1=true" >新增</el-button>
            </el-col>
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
                   <el-table-column
              type="index"
              align="center"
              width="55">
            </el-table-column>    
            <el-table-column prop="roleName" label="角色名称" align="center" width="180"  >
   
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" align="center" width="160" sortable>
   
            </el-table-column>               
            <el-table-column prop="remark" label="描述" align="center" min-width="200" >
                      <template slot-scope="scope">
                          <el-tooltip class="item" effect="dark" :content="scope.row.remark" placement="top">
                              <span>{{scope.row.remark}}</span>
                          </el-tooltip>
                    </template> 
            </el-table-column>
                <el-table-column prop="cz"  align="center" label="操作"   width="260">
                    <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="primary"
                        @click="handleAllocation(scope.$index, scope.row)"
                       >修改角色菜单</el-button>
                                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDlete(scope.$index, scope.row)"
                       >删除</el-button>
                 
   
                    </template>                     
                </el-table-column>            
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
       <el-dialog
          title="新增角色"
          :visible.sync="dialogVisible1"
          center
          width="30%"
          id="xzjs"
          >
            <el-form   :rules="rules" :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" >
              <el-form-item label="角色姓名" prop="username">
                <el-input v-model="ruleForm.username" ></el-input>
              </el-form-item>
              <el-form-item label="用户描述">
                <el-input type="textarea" v-model="ruleForm.description"></el-input>
              </el-form-item>              
              <el-form-item label="可选角色" prop="roles">
                <el-checkbox-group v-model="ruleForm.roles">
                    <el-checkbox v-for="role in MenuList" :label="role.menuId" :key="role.menuId">{{role.menuName}}</el-checkbox>
                </el-checkbox-group>                
              </el-form-item>                                                                                                                 
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>            
        </el-dialog>
       <el-dialog
          title="修改角色权限"
          :visible.sync="dialogVisible2"
          center
          width="30%"
          id="xzjs"
          >
            <el-form   :rules="rules" :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" >
              <el-form-item label="角色姓名" >
                <el-input v-model="ruleForm2.roleName" ></el-input>
              </el-form-item>
              <el-form-item label="用户描述">
                <el-input type="textarea" v-model="ruleForm2.remark"></el-input>
              </el-form-item>              
              <el-form-item label="可选角色">
                <el-checkbox-group v-model="ruleForm2.roles">
                    <el-checkbox v-for="role in roles" :label="role.menuId" :key="role.menuId">{{role.menuName}}</el-checkbox>
                </el-checkbox-group>                
              </el-form-item>                                                                                                                 
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">修改</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>            
        </el-dialog>                                             
    </div>
</template>

<script>


export default {
  data() {
    return {
      title: "权限管理",
      search: {
        input: "",
        time: ""
      },
      tableData: [],
      loading: true,
      dialogVisible1: false,
      dialogVisible2: false,
      npage: 1,
      pagesize: 10,
      total: 0,
      multipleSelection: [], //全部选中嘛
      MenuList: [],
      ruleForm: {
        username: "",
        roles: [],
        description: ""
      },
      ruleForm2: {
        username: "",
        roles: [],
        description: ""
      },
      rules: {
        roles: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个角色",
            trigger: "change"
          }
        ]
      },
      roles: [],
      rolesCheck: []
    };
  },

  methods: {
    // hasUser() {
    //   if (
    //     this.userInfo == "" &&
    //     this.userInfo == null &&
    //     this.userInfo == "undefined"
    //   ) {
    //     this.$message.error("当前登陆用户已失效，请重新登陆");
    //     this.$router.push("/login");
    //     return;
    //   }
    // },
    _httpRoleDeletet(ids) {
      // this.hasUser();
      let _this = this;
      httpRoleDeletet(ids)
        .then(res => {
          let data = res.data;
          if (data.code == 200) {
            _this.$message({
              message: data.msg,
              type: "success"
            });
          } else if (data.code == 500) {
            this.$message.error(data.msg);
            this.$router.push("/login");
          } else {
            _this.$message.error(data.msg);
          }
          _this.getData(this.npage, this.pagesize);
        })
        .catch(err => {
          let data = err.response ? err.response.data : {};

          if (data.message == "当前登陆用户已失效，请重新登陆") {
            this.$message.error(data.message);
            this.$router.push("/login");
          } else {
            console.log(err);
            this.$message.error("网络错误请联系管理员");
          }
        });
    },
    _httpRoleMenu(id) {
      // this.hasUser();
      let _this = this;
      this.roles.length = 0;

          let data = [{"menuId":1,"parentId":0,"menuName":"短信管理","url":"url1","perms":null,"icon":"el-icon-mobile-phone","type":"0","orderNum":1,"createTime":"2017-12-27 00:00:00","modifyTime":null,"checked":false},{"menuId":2,"parentId":0,"menuName":"事务管理","url":"affair","perms":null,"icon":"el-icon-tickets","type":"0","orderNum":1,"createTime":"2017-12-27 00:00:00","modifyTime":null,"checked":true},{"menuId":3,"parentId":0,"menuName":"系統管理","url":"url2","perms":null,"icon":"el-icon-setting","type":"0","orderNum":2,"createTime":"2017-12-27 00:00:00","modifyTime":null,"checked":true},{"menuId":11,"parentId":1,"menuName":"周期短信","url":"message","perms":null,"icon":null,"type":"0","orderNum":null,"createTime":"2018-04-28 00:00:00","modifyTime":null,"checked":false},{"menuId":12,"parentId":1,"menuName":"营销短信","url":"marketing","perms":null,"icon":null,"type":"0","orderNum":null,"createTime":"2018-04-28 00:00:00","modifyTime":null,"checked":false},{"menuId":13,"parentId":3,"menuName":"权限管理","url":"role","perms":null,"icon":null,"type":"0","orderNum":null,"createTime":"2018-05-04 00:00:00","modifyTime":null,"checked":false},{"menuId":31,"parentId":3,"menuName":"用戶管理","url":"user","perms":"","icon":null,"type":"0","orderNum":null,"createTime":"2018-04-12 00:00:00","modifyTime":null,"checked":true},{"menuId":32,"parentId":3,"menuName":"日志管理","url":"logging","perms":null,"icon":null,"type":"0","orderNum":null,"createTime":"2018-04-12 00:00:00","modifyTime":null,"checked":false},{"menuId":33,"parentId":1,"menuName":"定时短信","url":"acyclicMessage","perms":null,"icon":null,"type":"0","orderNum":null,"createTime":"2018-07-11 00:00:00","modifyTime":null,"checked":false},{"menuId":34,"parentId":3,"menuName":"密码修改","url":"passwordManagement","perms":null,"icon":null,"type":"0","orderNum":null,"createTime":"2018-07-11 00:00:00","modifyTime":null,"checked":true}];
          _this.roles = data;
          _this.rolesCheck.length = 0;
          for (let a = 0; a < data.length; a++) {
            if (data[a].checked) {
              _this.rolesCheck.push(data[a].menuId);
            }
          }
          _this.dialogVisible2 = true;

 
    },
    _httpMenuList() {
      let _this = this;

          let data = {
            msg: "查询成功",
            code: 200,
            data: {
              rows: [
                {
                  menuId: 1,
                  parentId: 0,
                  menuName: "短信管理",
                  url: "url1",
                  perms: null,
                  icon: "el-icon-mobile-phone",
                  type: "0",
                  orderNum: 1,
                  createTime: "2017-12-27 00:00:00",
                  modifyTime: null,
                  checked: false
                },
                {
                  menuId: 2,
                  parentId: 0,
                  menuName: "事务管理",
                  url: "affair",
                  perms: null,
                  icon: "el-icon-tickets",
                  type: "0",
                  orderNum: 1,
                  createTime: "2017-12-27 00:00:00",
                  modifyTime: null,
                  checked: false
                },
                {
                  menuId: 3,
                  parentId: 0,
                  menuName: "系統管理",
                  url: "url2",
                  perms: null,
                  icon: "el-icon-setting",
                  type: "0",
                  orderNum: 2,
                  createTime: "2017-12-27 00:00:00",
                  modifyTime: null,
                  checked: false
                },

                {
                  menuId: 13,
                  parentId: 3,
                  menuName: "权限管理",
                  url: "role",
                  perms: null,
                  icon: null,
                  type: "0",
                  orderNum: null,
                  createTime: "2018-05-04 00:00:00",
                  modifyTime: null,
                  checked: false
                },
                {
                  menuId: 31,
                  parentId: 3,
                  menuName: "用戶管理",
                  url: "user",
                  perms: "",
                  icon: null,
                  type: "0",
                  orderNum: null,
                  createTime: "2018-04-12 00:00:00",
                  modifyTime: null,
                  checked: false
                },
                {
                  menuId: 32,
                  parentId: 3,
                  menuName: "日志管理",
                  url: "logging",
                  perms: null,
                  icon: null,
                  type: "0",
                  orderNum: null,
                  createTime: "2018-04-12 00:00:00",
                  modifyTime: null,
                  checked: false
                },
                {
                  menuId: 33,
                  parentId: 1,
                  menuName: "房源管理",
                  url: "acyclicMessage",
                  perms: null,
                  icon: null,
                  type: "0",
                  orderNum: null,
                  createTime: "2018-07-11 00:00:00",
                  modifyTime: null,
                  checked: false
                },
                {
                  menuId: 34,
                  parentId: 3,
                  menuName: "密码修改",
                  url: "passwordManagement",
                  perms: null,
                  icon: null,
                  type: "0",
                  orderNum: null,
                  createTime: "2018-07-11 00:00:00",
                  modifyTime: null,
                  checked: false
                }
              ]
            }
          };
          if (data.code == 200) {
            _this.MenuList = data.data.rows;
          } else if (data.code == 500) {
            this.$message.error(data.msg);
            this.$router.push("/login");
          } else {
            this.$message.error(data.msg);
          }



    },
    getData(pageNum, pageSize) {
      // this.hasUser();
      let _this = this;

          let data = {
            msg: "查询成功",
            code: 200,
            data: {
              total: 6,
              rows: [
                {
                  roleId: 1,
                  roleName: "系统管理员",
                  remark: "可以查看、修改所有系统模块",
                  createTime: "2018-04-20 21:00:00",
                  modifyTime: "2018-07-03 00:00:00",
                  checked: false
                },
                {
                  roleId: 2,
                  roleName: "管理员",
                  remark: "可以查看、修改所有系统模块",
                  createTime: "2018-07-13 00:00:00",
                  modifyTime: "2018-07-18 14:58:00",
                  checked: false
                },
                {
                  roleId: 3,
                  roleName: "房源管理员",
                  remark: "可以查看、修改房源模块",
                  createTime: "2018-07-13 00:00:00",
                  modifyTime: "2018-07-18 14:58:00",
                  checked: false
                },
                {
                  roleId: 4,
                  roleName: "短信管理员（非营销）",
                  remark: "周期短信、定时短信、事务管理",
                  createTime: "2018-07-13 00:00:00",
                  modifyTime: "2018-07-18 17:22:29",
                  checked: false
                },
                {
                  roleId: 5,
                  roleName: "售后管理员",
                  remark: "售后管理模块管理负责售后",
                  createTime: "2018-07-13 00:00:00",
                  modifyTime: "2018-07-18 17:22:29",
                  checked: false
                },
                {
                  roleId: 11,
                  roleName: "事务管理员",
                  remark: "该角色只能查看事务管理",
                  createTime: "2018-07-18 16:16:01",
                  modifyTime: "2018-07-23 16:39:26",
                  checked: false
                }
              ]
            }
          };
          if (data.code == 200) {
            _this.tableData = data.data.rows;
            _this.total = data.data.total;
            _this.loading = false;
          } else if (data.code == 500) {
            this.$message.error(data.msg);
            this.$router.push("/login");
          } else {
            this.$message.error(data.msg);
          }
 
  
    },
    handleSearch() {
      this.getData(this.npage, this.pagesize);
    },
    handleAllocation(index, row) {
      let id = row.roleId;
      this._httpRoleMenu(id);
      this.ruleForm2 = Object.assign({}, row, { roles: this.rolesCheck });
    },
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
      this.getData();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onSubmit(formName) {
      let _this = this;
      this.$message({
        message: "您无此权限，如需开通权限请联系管理员!",
        type: "error"
      });
      // if (formName == "ruleForm") {
      //   this.$jQuery.ajax({
      //     type: "post",
      //     //  url: "http://localhost:8088/role/add",
      //     //  url: "http://47.88.171.117:8088/role/add",
      //     url: "http://101.132.171.38:8088/role/add",
      //     data: {
      //       roleName: this.ruleForm.username,
      //       remark: this.ruleForm.description,
      //       menuId: this.ruleForm.roles
      //     },
      //     success: function(data) {
      //       console.log(data);
      //       _this.resetForm("ruleForm");
      //       if (data.code == 200) {
      //         _this.$message({
      //           message: data.msg,
      //           type: "success"
      //         });
      //         _this.dialogVisible1 = false;
      //         _this.getData(this.npage, this.pagesize);
      //       } else if (data.code == 500) {
      //         _this.$message.error(data.msg);
      //         _this.$router.push("/login");
      //       } else {
      //         _this.$message.error(data.msg);
      //       }
      //     },
      //     error: function() {
      //       _this.$message.error("网络错误");
      //       _this.resetForm("ruleForm");
      //       _this.dialogVisible1 = false;
      //     }
      //   });
      // } else {
      //   this.$jQuery.ajax({
      //     type: "post",
      //     //  url: "http://localhost:8088/role/update",
      //     //  url: "http://47.88.171.117:8088/role/update",
      //     url: "http://101.132.171.38:8088/role/update",
      //     data: {
      //       roleId: this.ruleForm2.roleId,
      //       roleName: this.ruleForm2.roleName,
      //       remark: this.ruleForm2.remark,
      //       menuId: this.ruleForm2.roles
      //     },
      //     success: function(data) {
      //       console.log(data);
      //       _this.resetForm("ruleForm2");
      //       if (data.code == 200) {
      //         _this.$message({
      //           message: data.msg,
      //           type: "success"
      //         });
      //         _this.dialogVisible2 = false;
      //       } else if (data.code == 500) {
      //         this.$message.error(data.msg);
      //         this.$router.push("/login");
      //       } else {
      //         _this.$message.error(data.msg);
      //       }
      //     },
      //     error: function() {
      //       _this.$message.error("网络错误");
      //       _this.resetForm("ruleForm2");
      //       _this.dialogVisible2 = false;
      //     }
      //   });
      // }
    },
    handleDlete(index, row) {
      // this.hasUser();
      let id = row.roleId;
      let _this = this;
      this.$confirm("此操作将永久删除该角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            message: "您无此权限，如需开通权限请联系管理员!",
            type: "error"
          });
          // _this.getData(this.npage, this.pagesize);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    submitForm(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          _this.onSubmit(formName);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    this.getData(this.npage, this.pagesize);
    this._httpMenuList();
  }
};
</script>

<style>
#xzjs .el-checkbox-group label {
  margin-left: 20px;
}
#text .cell {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
