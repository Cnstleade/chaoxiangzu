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
                    <el-button  icon="el-icon-plus" type="primary"  @click="handleAdd" >新增</el-button>
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
                    <div class="l20">
                        <el-input
                        style="padding:0px 10px 0px 0px"
                          placeholder="请输入关键字"
                          v-model="search.input"
                          clearable>
                        </el-input> 
                    </div>                                  
                    <el-date-picker
                    style="width:340px"
                    class="l20"
                      v-model="search.time"
                      type="daterange"
                      value-format="yyyy-MM-dd"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>                
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
            @selection-change="handleSelectionChange"
            v-loading="loading"
            id="text"
          >
            <el-table-column prop="bh" label="编号" align="center" width="140" sortable>
            </el-table-column>
            <el-table-column prop="zt" label="状态" align="center" width="100" 
              :filters="[{ value: 1, text: '上架' }, { value: 2, text: '维护中' }, { value: 3, text: '下架' }]"
              :filter-method="filterStauts"     
              >         
              <template  slot-scope="scope">
                      <el-tag
                                :type="scope.row.zt===1?'':scope.row.zt===2?'success':'danger'"
                            >{{scope.row.zt===1?'上架':scope.row.zt===2?'维护中':'下架'}}</el-tag>                
              </template>  
            </el-table-column>     
            <!-- <el-table-column prop="zt1" label="出租状态" align="center" width="100" 
              :filters="[{ value: 1, text: '已租' }, { value: 2, text: '未租' }, { value: 3, text: '下架' }]"
              :filter-method="filterStauts"     
              >         
              <template  slot-scope="scope">
                      <el-tag
                                :type="scope.row.zt1===1?'':'danger'"
                            >{{scope.row.zt1===1?'已租':'未租'}}</el-tag>                
              </template>  
            </el-table-column>                           -->
            <el-table-column prop="cs" label="城市" align="center" width="100" >
            </el-table-column>            
            <el-table-column prop="tj" label="添加时间" align="center" width="120" sortable>
            </el-table-column>
            <el-table-column prop="jg" label="价格" align="center" width="80" sortable>
            </el-table-column>
            <el-table-column prop="mj" label="面积" align="center" width="80" sortable>
            </el-table-column>
            <el-table-column prop="cx" label="朝向" align="center" width="80" >
            </el-table-column>
            <el-table-column prop="wz" label="详细地址" align="center" min-width="130" >
                    <template slot-scope="scope">
                          <el-tooltip class="item" effect="dark" :content="scope.row.wz" placement="top">
                              <span>{{scope.row.wz}}</span>
                          </el-tooltip>
                    </template>               
            </el-table-column>            
            <el-table-column prop="xq" label="小区" align="center" min-width="130" >
                    <template slot-scope="scope">
                          <el-tooltip class="item" effect="dark" :content="scope.row.xq" placement="top">
                              <span>{{scope.row.xq}}</span>
                          </el-tooltip>
                    </template>               
            </el-table-column>
            <el-table-column prop="gly" label="管理员" align="center" width="120" >
            </el-table-column>  
            <el-table-column prop="glylx" label="管理员联系方式" align="center" width="140" >
            </el-table-column>                                                                                    
            <!-- <el-table-column prop="applyTime" label="申请时间" align="center" width="180" sortable>
                <template slot-scope="scope">
                    {{scope.row.applyTime|dateServer}}
                </template>
            </el-table-column> -->
            <el-table-column type="expand" label="更多详情" width="80" >
              <template slot-scope="props" >
                <el-alert
                  title="房屋信息"
                  type="success"
                  :closable="false"
                  center
                  >
                </el-alert>
                <el-table
                  :data="props.row.fwxx"
                  border 
                  style="width: 100%"
                  >
                      <el-table-column  prop="dt" label="地铁" align="center" min-width="200">
                        <template slot-scope="scope">
                              <el-tooltip class="item" effect="dark" :content="scope.row.dt" placement="top">
                                  <span>{{scope.row.dt}}</span>
                              </el-tooltip>
                        </template>    
                      </el-table-column>
                      <el-table-column  prop="gj" label="公交" align="center" min-width="200">
                        <template slot-scope="scope">
                              <el-tooltip class="item" effect="dark" :content="scope.row.gj" placement="top">
                                  <span>{{scope.row.gj}}</span>
                              </el-tooltip>
                        </template>                           
                      </el-table-column>
                      <el-table-column  prop="chuang" label="床" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.chuang?'success':'danger'"
                                        >{{scope.row.chuang?'有':'无'}}</el-tag>                
                          </template>  
                      </el-table-column>
                      <el-table-column  prop="kd" label="宽带" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.kd?'success':'danger'"
                                        >{{scope.row.kd?'有':'无'}}</el-tag>                
                          </template> 
                      </el-table-column>
                      <el-table-column  prop="bx" label="冰箱" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.bx?'success':'danger'"
                                        >{{scope.row.bx?'有':'无'}}</el-tag>                
                          </template> 
                      </el-table-column>
                      <el-table-column  prop="xyj" label="洗衣机" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.xyj?'success':'danger'"
                                        >{{scope.row.xyj?'有':'无'}}</el-tag>                
                          </template>                         
                      </el-table-column>
                      <el-table-column  prop="kt" label="空调" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.kt?'success':'danger'"
                                        >{{scope.row.kt?'有':'无'}}</el-tag>                
                          </template>                         
                      </el-table-column>
                      <el-table-column  prop="rsq" label="热水器" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.rsq?'success':'danger'"
                                        >{{scope.row.rsq?'有':'无'}}</el-tag>                
                          </template>                         
                      </el-table-column>
                      <el-table-column  prop="wbl" label="微波炉" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.wbl?'success':'danger'"
                                        >{{scope.row.wbl?'有':'无'}}</el-tag>                
                          </template>                         
                      </el-table-column>
                      <el-table-column  prop="zns" label="智能锁" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.zns?'success':'danger'"
                                        >{{scope.row.zns?'有':'无'}}</el-tag>                
                          </template>                         
                      </el-table-column>
                      <el-table-column  prop="ctk" label="床头柜" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.ctk?'success':'danger'"
                                        >{{scope.row.ztk?'有':'无'}}</el-tag>                
                          </template>                         
                      </el-table-column>
                      <el-table-column  prop="yk" label="衣柜" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.yk?'success':'danger'"
                                        >{{scope.row.yk?'有':'无'}}</el-tag>                
                          </template>                         
                      </el-table-column>
                      <!-- <el-table-column prop="status" label="是否逾期" align="center" 
                         :filters="[{ value: 0, text: '放款中 ' }, { value: 1, text: '放款成功' }, { value: 2, text: '逾期' }, { value: 3, text: '还款成功' }, { value: 4, text: '放款失败' }, { value: 5, text: '还款中' }, { value: 6, text: '还款失败' }]"
                         :filter-method="filterStauts"                      
                      >
                        <template slot-scope="scope">
                            <el-tag
                                :type="scope.row.status===0?'':scope.row.status===1?'success':scope.row.status===2?'danger':scope.row.status===4?'success':scope.row.status===4?'info':scope.row.status===5?'':'warning'"
                            >{{scope.row.status===0?'放款中':scope.row.status===1?'放款成功':scope.row.status===2?'逾期':scope.row.status===3?'还款成功':scope.row.status===4?'放款失败':scope.row.status===5?'还款中':'还款失败'}}</el-tag>
                        </template>                         
                      </el-table-column>
                      <el-table-column  prop="overdue.overdueDay" label="逾期天数" align="center" sortable></el-table-column>
                      <el-table-column  prop="overdue.lateFee" label="违约金" align="center" sortable></el-table-column> -->
                </el-table>
                <el-alert
                  title="房屋照片"
                  type="success"
                  :closable="false"
                  class="m20"
                  center
                  >
                 
                </el-alert>   
                  <el-row class="m20">
                    <el-col :span="3" v-for="(temp, index) in props.row.img" :key="index" :offset="index > 0 ? 1 : 0" style="text-align:center">
                      <el-card :body-style="{ padding: '0px',background:'rgba(0,0,0,0.1)'}" >
                        <img :src="temp.src" class="image" width="60" height="60" @click="imgShow(temp.src)" style="cursor:pointer">
                      </el-card>
                    </el-col>
                  </el-row>  
                        <el-dialog
              id="dialog"
              width="80%"
              top="100px"
              title="照片信息"
              :visible.sync="innerImgVisible"
              append-to-body>
                
                      <el-card  :body-style="{ padding: '0px' }"  shadow="never">
                          <img :src="imgSrc" class="imgCenter" >
                          <!-- <div style="padding: 14px;text-align:center">
                            <span>{{o.label}}</span>
                          </div>                                     -->
                      </el-card>
                

                    <!-- <button type="button" @click="changImgIndex(-1)" class="el-carousel__arrow el-carousel__arrow--left"><i class="el-icon-arrow-left"></i></button>    -->
                    <!-- <button type="button"   @click="changImgIndex(1)" class="el-carousel__arrow el-carousel__arrow--right"><i class="el-icon-arrow-right"></i></button>                        -->
            </el-dialog>                                                
                <el-alert
                  title="屋主信息"
                  type="success"
                  :closable="false"
                  center
                  class="m20"
                  >
                </el-alert>                
                <el-table
                  :data="props.row.wzxx"
                  border 
                  style="width: 100%"
                  >
                      <el-table-column prop="gx" label="关系" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.gx==1?'success':scope.row.gx==2?'':'danger'"
                                        >{{scope.row.gx==1?'屋主':scope.row.gx==2?'亲属':'朋友'}}</el-tag>                
                          </template> 
                      </el-table-column>
                      <el-table-column prop="xm" label="姓名" align="center" width="120"></el-table-column>
                      <el-table-column prop="lxdh" label="联系电话" align="center" width="120"></el-table-column>
                      <el-table-column prop="sfz" label="身份证" align="center" width="180"></el-table-column>
                      <el-table-column prop="xb" label="性别" align="center" width="80">
                          <template  slot-scope="scope">
                                  <el-tag
                                            :type="scope.row.yk?'success':'danger'"
                                        >{{scope.row.yk?'男':'女'}}</el-tag>                
                          </template>  
                      </el-table-column>
                      <el-table-column prop="wxh" label="微信号" align="center" width="140"></el-table-column>
                      <el-table-column prop="cjd" label="常居地" align="center" min-width="200">
                        <template slot-scope="scope">
                              <el-tooltip class="item" effect="dark" :content="scope.row.cjd" placement="top">
                                  <span>{{scope.row.cjd}}</span>
                              </el-tooltip>
                        </template>                          
                      </el-table-column>
                      <el-table-column prop="remarks" label="备注" align="center" min-width="200">
                        <template slot-scope="scope">
                              <el-tooltip class="item" effect="dark" :content="scope.row.remarks" placement="top">
                                  <span>{{scope.row.remarks}}</span>
                              </el-tooltip>
                        </template>                          
                      </el-table-column>                      
                      <!-- <el-table-column prop="result" label="结果" align="center" >
                        <template slot-scope="scope">
                            <el-tag
                                :type="scope.row.status===1?'':scope.row.status===2?'danger':'success'"
                            >{{scope.row.status===1?'成功':scope.row.status===2?'失败':'进行中 '}}</el-tag>
                        </template>                         
                      </el-table-column>
                      <el-table-column prop="type" label="催收方式" align="center" >
                        <template slot-scope="scope">
                            <el-tag
                                :type="scope.row.status===1?'':scope.row.status===2?'danger':'success'"
                            >{{scope.row.status===1?'电话':scope.row.status===2?'短信':'其他 '}}</el-tag>
                        </template>                         
                      </el-table-column>                       -->
                </el-table>                
              </template>
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
                    <el-button
                        size="mini"
                        type="danger"
                        :disabled="scope.row.zt===3||scope.row.zt1===1" 
                        @click="handleDelete(scope.$index, scope.row)"
                       >出租</el-button>                         
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
          title="新增房源"
          :visible.sync="addVisible"
          center
          width="60%"
          >
                <el-alert
                  title="房屋信息"
                  type="success"
                  :closable="false"
                  center
                  class="m20"
                  >
                </el-alert>           
                                <!-- <el-cascader
                          placeholder="请选择地区"
                        class="l20"
                          :options="citys"
                           v-model="search.city"
                        ></el-cascader> -->
            <el-form  class="m20" :model="fwForm" status-icon  ref="fwForm" label-width="100px" >
              <el-form-item label="城市">
                        <el-cascader
                          placeholder="请选择城市"
                          :options="citys"
                           v-model="fwForm.city"
                        ></el-cascader>
              </el-form-item>
              <el-row>
                <el-col :span="7">
                    <el-form-item label="价格" prop='receiverName'>
                      <el-input v-model="fwForm.jg" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="4">
                  <el-form-item label="面积" prop='receiverName'>
                    <el-input v-model="fwForm.mj" ></el-input>
                  </el-form-item> 
                </el-col>  
              </el-row>
              <el-form-item label="朝向" prop='receiverName'>
                  <el-radio-group v-model="fwForm.cx" >
                    <el-radio-button  label="正南" >正南</el-radio-button>
                    <el-radio-button   label="东南" >东南</el-radio-button>
                    <el-radio-button  label="东" >东</el-radio-button>
                    <el-radio-button label="西南" >西南</el-radio-button>
                    <el-radio-button  label="北" >北</el-radio-button>
                    <el-radio-button  label="西" >西</el-radio-button>
                  </el-radio-group>
              </el-form-item> 
              <el-form-item label="详细地址">
                      <el-row class="flex">
                        
                          <el-cascader
                            placeholder="请选择城市"
                            :options="city"
                             v-model="fwForm.citys"
                          ></el-cascader>
                  
                     
                        <el-input v-model="fwForm.xxdz" class="l20"></el-input>
                   
                      </el-row>
              </el-form-item>
              <el-row>
                <el-col :span="7">
                    <el-form-item label="小区" prop='receiverName'>
                      <el-input v-model="fwForm.xiaoqu" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="7" :offset="4">
                    <el-form-item label="管理员" prop='receiverName'>
                          <el-select  v-model="fwForm.guanliyuan" placeholder="管理员">
                            <el-option
                              v-for="item in guanliyuans"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select> 
                    </el-form-item> 
                </el-col>  
              </el-row>

 
              <el-form-item label="地铁" prop='receiverName'>            
                  <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{tag}}
                  </el-tag>
                  <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                  >
                  </el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 地铁</el-button>
              </el-form-item>
              <el-form-item label="公交" prop='receiverName'>
                  <el-tag
                    :key="tag"
                    v-for="tag in gongjiaoTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose1(tag)">
                    {{tag}}
                  </el-tag>
                  <el-input
                    class="input-new-tag"
                    v-if="inputVisible1"
                    v-model="inputValue1"
                    ref="gongjiaoInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm1"
                    @blur="handleInputConfirm1"
                  >
                  </el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput1">+ 公交</el-button>
              </el-form-item>   
              <el-row>
                <el-col :span="6">
                  <el-form-item label="床">
                    <el-switch
                      v-model="fwForm.chuang"
                      active-text="有"
                      inactive-text="无">
                    </el-switch>                
                  </el-form-item> 
                </el-col>
                <el-col :span="6">
                 <el-form-item label="宽带">
                   <el-switch
                     v-model="fwForm.kd"
                     active-text="有"
                     inactive-text="无">
                   </el-switch>                
                 </el-form-item> 
                </el-col> 
                <el-col :span="6">
                  <el-form-item label="冰箱">
                    <el-switch
                      v-model="fwForm.bx"
                      active-text="有"
                      inactive-text="无">
                    </el-switch>                
                  </el-form-item> 
                </el-col>                                
              </el-row>           
              <el-row>
                <el-col :span="6">

              <el-form-item label="洗衣机">
                <el-switch
                  v-model="fwForm.xyj"
                  active-text="有"
                  inactive-text="无">
                </el-switch>                
              </el-form-item> 
                </el-col>
                <el-col :span="6">
                 <el-form-item label="空调">
                <el-switch
                  v-model="fwForm.kt"
                  active-text="有"
                  inactive-text="无">
                </el-switch>                
              </el-form-item>  
                </el-col> 
                <el-col :span="6">
                  <el-form-item label="热水器">
                    <el-switch
                      v-model="fwForm.rsq"
                      active-text="有"
                      inactive-text="无">
                    </el-switch>                
                  </el-form-item> 
                </el-col>                                
              </el-row>   
              <el-row>
                <el-col :span="6">
         <el-form-item label="微波炉">
                <el-switch
                  v-model="fwForm.wbl"
                  active-text="有"
                  inactive-text="无">
                </el-switch>                
              </el-form-item> 
                </el-col>
                <el-col :span="6">
     
              <el-form-item label="智能锁">
                <el-switch
                  v-model="fwForm.zns"
                  active-text="有"
                  inactive-text="无">
                </el-switch>                
              </el-form-item> 
                </el-col> 
                <el-col :span="6">
              <el-form-item label="床头柜">
                <el-switch
                  v-model="fwForm.ctg"
                  active-text="有"
                  inactive-text="无">
                </el-switch>                
              </el-form-item> 
                </el-col>                                
              </el-row>   
              <el-form-item label="衣柜">
                <el-switch
                  v-model="fwForm.yg"
                  active-text="有"
                  inactive-text="无">
                </el-switch>                
              </el-form-item> 
              <el-form-item label="照片">
                    <el-upload
                     class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :file-list="fileList2"
                     list-type="picture">
                     <el-button size="small" type="primary">点击上传</el-button>
                     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>             
              </el-form-item>                                                                                                                                              
              <!-- <el-form-item label="发送时间" prop="sendTime">
                <el-time-picker
              
                  v-model="fwForm.sendTime"
          
                  placeholder="发送时间">
                </el-time-picker>                           
              </el-form-item>  
              <el-form-item label="启始区间" prop="time">
                 <el-date-picker
                   v-model="fwForm.time"
                   value-format="yyyy-MM-dd"
                   type="daterange"
                   range-separator="至"
                   start-placeholder="开始日期"
                   end-placeholder="结束日期">
                 </el-date-picker>                
              </el-form-item> -->
              <!-- <el-form-item label="发送状态" prop="status" >
                    <el-select  v-model="fwForm.status" placeholder="发送状态">
                      <el-option
                        v-for="item in sendStatus"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>                -->
              <!-- <el-form-item label="短信类型" prop="messageType">
                    <el-select  v-model="fwForm.messageType" placeholder="短信类型">
                      <el-option
                        v-for="item in messageType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>                 -->
              <!-- <el-form-item label="发送人" prop="senderName">
                <el-input v-model="fwForm.senderName" ></el-input>
              </el-form-item>    -->
 
              <!-- <el-form-item label="发送签名" prop="signatureType">
                    <el-select  v-model="fwForm.signatureType" placeholder="发送签名">
                      <el-option
                        v-for="item in signatureType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>   -->
              <!-- <el-form-item label="" prop="messageContent">
                <el-input type="textarea" v-model="fwForm.messageContent"></el-input>
              </el-form-item>    -->
                <el-alert
                  title="屋主信息"
                  type="success"
                  :closable="false"
                  center
                  class="m20"
                  >
                </el-alert>   
                  <el-row class="m20" >
                    <el-col :span="7" >
                      <el-form-item label="姓名" prop='receiverName'>
                        <el-input v-model="fwForm.xingm" ></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="4">
                      <el-form-item label="联系电话" prop='receiverName'>
                        <el-input v-model="fwForm.lianxidianhua" ></el-input>
                      </el-form-item>  
                    </el-col>
                  </el-row>
                  <el-row  >
                    <el-col :span="7">
                <el-form-item label="身份证号" prop='receiverName'>
                      <el-input v-model="fwForm.sfz" ></el-input>
                    </el-form-item>  
                    </el-col>
                    <el-col :span="7" :offset="4">
                    <el-form-item label="微信号" prop='receiverName'>
                      <el-input v-model="fwForm.wxh" ></el-input>
                    </el-form-item> 
                    </el-col>
                  </el-row>                  
                  <el-row  >
                    <el-col :span="7">
                    <el-form-item label="性别" prop='receiverName'>
                      <el-select  v-model="fwForm.sex" placeholder="请输入性别">
                        <el-option
                          v-for="item in sexs"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select> 
                    </el-form-item>   
                    </el-col>
                    <el-col :span="7" :offset="4">
                    <el-form-item label="关系" prop='receiverName'>
                    <el-select  v-model="fwForm.rla" placeholder="请输入关系">
                      <el-option
                        v-for="item in rlas"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
                    </el-form-item> 
                    </el-col>
                  </el-row>  
                  
                      
 
   
              <el-form-item label="常居地">
                      <el-row class="flex">
                          <el-cascader
                            placeholder="请选择城市"
                            :options="city"
                             v-model="fwForm.citys"
                          ></el-cascader>
                        <el-input v-model="fwForm.xxdz" class="l20"></el-input>
                      </el-row>
              </el-form-item>                                       
             <el-form-item label="备注" prop="remarks">
                <el-input type="textarea" v-model="fwForm.remarks"></el-input>
              </el-form-item>                         
              <!-- <el-form-item label="短信类型" prop="messageType">
                    <el-select  v-model="fwForm.messageType" placeholder="短信类型">
                      <el-option
                        v-for="item in messageType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>                              -->
                <el-form-item>
                  <el-button type="primary" @click="submitForm('fwForm')">提交</el-button>
                  <el-button @click="resetForm('fwForm')">重置</el-button>
                </el-form-item>
            </el-form>       
      </el-dialog>                          
    </div>
</template>

<script>
import Good from "@/config/goods";
import ARRAll from "@/assets/js/city";
import AllCity from "@/assets/js/citys";
export default {
  data() {
    return {
      fileList2: [],
      dynamicTags: [],
      gongjiaoTags: [],
      innerImgVisible: false,
      inputVisible: false,
      inputVisible1: false,
      inputValue: "",
      inputValue1: "",
      imgSrc: "",
      guanliyuans: [
        { label: "陈宏波", value: 1 },
        { label: "王成成", value: 2 },
        { label: "夏颖", value: 3 }
      ],
      sexs: [{ label: "男", value: 1 }, { label: "女", value: 2 }],
      rlas: [
        { label: "屋主", value: 1 },
        { label: "亲属", value: 2 },
        { label: "朋友", value: 2 }
      ],
      addVisible: false,
      title: "待租房源",
      search: {
        input: "",
        time: "",
        city: []
      },
      fwForm: {},
      tableData: [
        new Good({
          bh: "hxz-201807271",
          zt: 1,
          cs: "南京",
          tj: "2018-07-27",
          jg: "1000",
          mj: "12",
          cx: "北向",
          xq: "金盛花园",
          gly: "陈宏波",
          glylx: "15366512811",
          wz: "天津和平区面馆百年面道(和平路店)",
          zt1: 1,
          img: [
            { src: require("../../../assets/image/bannner1.jpg") },
            { src: require("../../../assets/image/bannner2.jpg") },
            { src: require("../../../assets/image/bannner3.jpg") }
          ],
          fwxx: [
            {
              dt: "1号线 共康路  1号线 通河新村  1号线 彭浦新村 ",
              gj: "共康路三泉路，719路,长临路共康路(招呼站)，850路",
              chuang: true,
              kd: true,
              bx: false,
              xyj: false,
              kt: true,
              rsq: false,
              wbl: false,
              zns: true,
              ctk: true,
              yk: false
            }
          ],
          wzxx: [
            {
              gx: 1,
              xm: "陈少侠",
              lxdh: "13056195939",
              sfz: "320981199210294290",
              xb: true,
              wxh: "chb921029",
              cjd: "共康路三泉路，719路,长临路共康路(招呼站)，850路",
              remarks:
                "屋主要卖3000块屋主要卖3000块屋主要卖3000块屋主要卖3000块屋主要卖3000块屋主要卖3000块屋主要卖3000块屋主要卖3000块屋主要卖3000块"
            }
          ]
        }),
        new Good({
          bh: "hxz-201807272",
          zt: 3,
          cs: "南京",
          tj: "2018-07-27",
          jg: "1000",
          mj: "12",
          cx: "北向",
          xq: "情网花园",
          gly: "陈宏波",
          glylx: "15366512811",
          wz: "天津和平区面馆百年面道(和平路店)",
          zt1: 2,
          img: [
            { src: require("../../../assets/image/bannner1.jpg") },
            { src: require("../../../assets/image/bannner2.jpg") },
            { src: require("../../../assets/image/bannner3.jpg") }
          ],
          fwxx: [
            {
              dt: "1号线 共康路  1号线 通河新村  1号线 彭浦新村 ",
              gj: "共康路三泉路，719路,长临路共康路(招呼站)，850路",
              chuang: true,
              kd: true,
              bx: false,
              xyj: false,
              kt: true,
              rsq: false,
              wbl: false,
              zns: true,
              ctk: true,
              yk: false
            }
          ],
          wzxx: [
            {
              gx: 1,
              xm: "陈少侠",
              lxdh: "13056195939",
              sfz: "320981199210294290",
              xb: true,
              wxh: "chb921029",
              cjd: "共康路三泉路，719路,长临路共康路(招呼站)，850路"
            },
            {
              gx: 2,
              xm: "王少侠",
              lxdh: "13056195939",
              sfz: "320981199210294290",
              xb: true,
              wxh: "chb921029",
              cjd: "共康路三泉路，719路,长临路共康路(招呼站)，850路"
            }
          ]
        })
      ],
      loading: true,
      npage: 1,
      pagesize: 10,
      total: 0,
      multipleSelection: [] //全部选中嘛
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
    getData() {
      let _this = this;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 800);
      // url()
      //   .then(res => {
      //     let data = res.data;
      //   })
      //   .catch(err => {
      //     _this.tableData = [];
      //     _this.loading = false;
      //   });
    },
    handleSearch() {},
    //新增
    handleAdd() {
      this.fwForm = {};
      this.dynamicTags.length = 0;
      this.gongjiaoTags.length = 0;
      this.addVisible = true;
    },
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
      this.search = {};
      getData();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    filterStauts(value, row) {
      return row.status === value;
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    handleClose1(tag) {
      this.gongjiaoTags.splice(this.gongjiaoTags.indexOf(tag), 1);
    },

    showInput1() {
      this.inputVisible1 = true;
      this.$nextTick(_ => {
        this.$refs.gongjiaoInput.$refs.input.focus();
      });
    },

    handleInputConfirm1() {
      let inputValue1 = this.inputValue1;
      if (inputValue1) {
        this.gongjiaoTags.push(inputValue1);
      }
      this.inputVisible1 = false;
      this.inputValue1 = "";
    },
    //展示图片
    imgShow(src) {
      this.imgSrc = src;
      this.innerImgVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style >
#dialog .el-dialog__header {
  display: none;
}
#dialog .el-dialog {
  padding: 0;
  background: rgba(0, 0, 0, 0);
}
#dialog .el-dialog__body {
  padding: 0;
  background: rgba(0, 0, 0, 0.1);
}
#dialog .el-card__body {
  background: rgba(0, 0, 0, 0.1);
}
#dialog .el-card {
  background: rgba(0, 0, 0, 0.1);
  border: none;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.imgCenter {
  clear: both;
  display: block;
  margin: auto;
  cursor: pointer;
}
</style>
