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
            <el-col   class="col-flex-end">
              <div style="flex-grow:1" class="l20">
                    <!-- <el-button  icon="el-icon-plus" type="primary"  @click="handleAdd" >新增</el-button> -->
           </div>
                    <!-- <el-button-group>
                      <el-button :type="execeedtimeType==0?'info':''" @click="changeExeceedtimeType(0)">重置</el-button>
                      <el-button :type="execeedtimeType==1?'primary':''" @click="changeExeceedtimeType(1)">M1</el-button>
                      <el-button :type="execeedtimeType==2?'success':''" @click="changeExeceedtimeType(2)">M2</el-button>
                      <el-button :type="execeedtimeType==3?'warning':''" @click="changeExeceedtimeType(3)">M3</el-button>
                      <el-button :type="execeedtimeType==4?'danger':''" @click="changeExeceedtimeType(4)">M3+</el-button>
                    </el-button-group>     -->
                    <el-button  type="primary" @click="reset">重置</el-button>
                        <el-cascader
                          placeholder="请选择地区"
                        class="l20"
                          :options="city"
                           v-model="search.city"
                        ></el-cascader> 
                          <el-select  v-model="search.guanliyuan" placeholder="管理员"    class="l20">
                            <el-option
                              v-for="item in guanliyuans"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>                          
                    <div class="l20">
                        <el-input
                        style="padding:0px 10px 0px 0px"
                          placeholder="请输入关键字"
                          v-model="search.input"
                          clearable>
                        </el-input> 
                    </div>        
                                              
                    <!-- <el-date-picker
                    style="width:340px"
                    class="l20"
                      v-model="search.time"
                      type="daterange"
                      value-format="yyyy-MM-dd"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>                 -->
                    <el-button @click="handleSearch" class="l20" style="margin-left:20px" icon="el-icon-search"  type="success" circle></el-button>                                                                  
            </el-col>             
        </el-row>  
        <el-table
            :data="tableData"  
            border  
            ref="multipleTable" 
            tooltip-effect="dark"
            style="width: 100%"
            class="m20"
            v-loading="loading"
            id="text"
          >
            <el-table-column prop="bh" label="编号" align="center" width="120" sortable>
            </el-table-column> 
            <el-table-column prop="czsj" label="出租时间" align="center" width="100" sortable>
            </el-table-column>                     
            <el-table-column prop="qx" label="期限" align="center" width="80" >
            </el-table-column>
            <el-table-column prop="zj" label="租金" align="center" width="80" sortable>
            </el-table-column>
            <el-table-column prop="fkfs" label="付款方式" align="center" width="100" >
            </el-table-column>
            <el-table-column prop="yj" label="押金" align="center" width="80" >
            </el-table-column>
            <el-table-column prop="zk" label="租客" align="center" width="80" >
            </el-table-column>
            <el-table-column prop="sfz" label="身份证" align="center" width="150" >
            </el-table-column>            
            <el-table-column prop="haoma" label="号码" align="center" width="100" >
            </el-table-column>            
            <el-table-column prop="gly" label="管理员" align="center" width="80" >
            </el-table-column>                        
            <el-table-column prop="bz" label="备注" align="center" min-width="140" >
            </el-table-column> 
                <el-table-column prop="cz"  align="center" label="操作"  width="200" >
                    <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="success"
                        @click="handleEdit(scope.$index, scope.row)"
                       >编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        :disabled="scope.row.zt===3" 
                        @click="handleDelete(scope.$index, scope.row)"
                       >下架</el-button>  
                    </template> 
                </el-table-column>                                                                           
        </el-table>                 
    </div>
</template>
<script>
import ARRAll from "@/assets/js/city";
import AllCity from "@/assets/js/citys";
export default {
  data() {
    return {
      title: "有效订单",
      search: {
        input: "",
        guanliyuan: ""
      },
      guanliyuans: [
        { label: "陈宏波", value: 1 },
        { label: "王成成", value: 2 },
        { label: "夏颖", value: 3 }
      ],
      tableData: [
        {
          bh: "hxz-201807271",
          czsj: "2018-7-29",
          qx: "六个月",
          zj: "800",
          fkfs: "支付宝",
          yj: "800",
          bz: "这个房客下个月入住",
          zk: "周春来",
          haoma: "15366221831",
          gly: "陈宏波",
          sfz: "320981199210294290"
        }
      ]
    };
  },
  computed: {
    city() {
      return JSON.parse(JSON.stringify(ARRAll));
    },
    citys() {
      return JSON.parse(JSON.stringify(AllCity));
    }
  },
  methods: {
    reset() {
      this.search = {};
    },
    handleSearch() {},
    //编辑
    handleEdit(index, row) {
      this.$message({
        message: "您无此权限，如需开通权限请联系管理员!",
        type: "error"
      });
    },
    //下架
    handleDelete(index, row) {
      this.$confirm("此操作将下架该房源, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "error",
            message: "您无此权限，如需开通权限请联系管理员!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
</style>
