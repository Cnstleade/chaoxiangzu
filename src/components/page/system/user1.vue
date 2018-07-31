<template>
    <div class="container">

    </div>
</template>
<script>
    
</script>

<style>

</style>

<template>
    <div class="container">
        <el-row>
            <el-alert
              :title="title"
              :closable="false"
              type="info">
            </el-alert>           
        </el-row>   
        <el-row class="m20 col-flex-end"  >
                  <div style="flex-grow:1" class="l20">
                    <!-- <el-button   icon="el-icon-plus" type="primary" @click="resetForm" >新增</el-button> -->

                  </div>
        

                  <!-- <el-button  class="l20 " type="danger" @click="download">下载模板</el-button>
      
            <div class="l20">                            
                  <el-upload
                    class="upload-demo flex"
                    ref="upload"
                    action="123"
                    :before-upload="beforeAvatarUpload"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                  </el-upload>                
            </div>    -->
               
         
                    <el-button  class="l20" type="primary" style="margin-left:10px" @click="reset">重置</el-button>
                    <div class="l20">
                        <el-input
                        style="padding:0px 10px 0px 0px"
                          placeholder="请输入手机号码"
                          v-model="search.mobilePhone"
                          clearable>
                        </el-input> 
                    </div>
                    <div class="l20">
                        <el-input
                        style="padding:0px 10px 0px 0px"
                          placeholder="请输入关键字"
                          v-model="search.keywords"
                          clearable>
                        </el-input> 
                    </div>
                    <!-- <el-select class="l20" v-model="search.sendStatus" placeholder="状态">
                      <el-option
                        v-for="item in sendStatus"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>  -->
                    <el-select class="l20" v-model="search.sendPlatform" placeholder="维修师傅">
                      <el-option
                        v-for="item in sendPlatform"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>                                                                            
                    <el-button @click="handleSearch" class="l20" style="margin-left:20px" icon="el-icon-search"  type="success" circle></el-button>                                                                  
            
        </el-row>
        <el-table
            :data="tableData"  
            border  
            ref="multipleTable" 
            tooltip-effect="dark"
            style="width: 100%"
            class="m20"
            v-loading="loading"
            @selection-change="handleSelectionChange"
            id="text"
          >
            <el-table-column
              type="selection"
              align="center"
              width="55">
            </el-table-column>        
        
            <el-table-column prop="id" label="序号" align="center" width="70"   sortable></el-table-column>

            <el-table-column prop="senddatetime" label="预计维修时间" align="center" width="140" ></el-table-column>
            <el-table-column prop="mobilePhone" label="电话" align="center" width="120" ></el-table-column>
            <!-- <el-table-column prop="recordStatus" label="短信状态" align="center" width="100" 
             :filters="[{ text: '正常', value: '1' }, { text: '更新', value: '2' }, { text: '撤销', value: '3' }]" :filter-method="filterRecordStatus" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.recordStatus ==1?'success':scope.row.recordStatus ==2?'info':'danger'">
                          {{ scope.row.recordStatus ==1?'正常':scope.row.recordStatus ==2?'更新':'撤销' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>             -->
            <el-table-column prop="sendStatus" label="状态" align="center" width="100" 
             :filters="[{ text: '待解决', value: '1' }, { text: '解决中', value: '2' }, { text: '已完结', value: '3' }, { text: '失败重发中', value: '4' }, { text: '撤销', value: '5' }]" :filter-method="filterStatus" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendStatus ==1?'danger':scope.row.sendStatus ==2?'info':scope.row.sendStatus ==3?'success':scope.row.sendStatus ==4?'primay':'warning'">
                          {{ scope.row.sendStatus ==1?'待解决':scope.row.sendStatus ==2?'解决中':scope.row.sendStatus ==3?'已完结':scope.row.sendStatus ==4?'失败重发中':'撤销' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>
            <el-table-column prop="reciverName" label="客户姓名" align="center" width="100" ></el-table-column>
            <!-- <el-table-column prop="senderName" label="创建人" align="center" width="100" ></el-table-column> -->
          <el-table-column prop="messageContent" label="反馈内容" align="center" min-width='300' >
                          <template slot-scope="scope">
                          <el-tooltip class="item" effect="dark" :content="scope.row.messageContent" placement="top">
                              <span>{{scope.row.messageContent}}</span>
                          </el-tooltip>
                    </template> 
          </el-table-column>            
            <el-table-column prop="remarks" label="小区" align="center" width='200' >
                         <template slot-scope="scope">
                          <el-tooltip class="item" effect="dark" :content="scope.row.remarks" placement="top">
                              <span>{{scope.row.remarks}}</span>
                          </el-tooltip>
                    </template> 
            </el-table-column>
            <!-- <el-table-column prop="sendPlatform" label="发送平台" align="center"  width="100" 
             :filters="[{ text: '华信', value: '1' }, { text: '创蓝', value: '2' }]" :filter-method="filterSendPlatform" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendPlatform ===1?'success':'danger'">
                          {{ scope.row.sendPlatform ===1?'华信':'创蓝' }}
                        </el-tag>
                    </template> 

            </el-table-column> -->
  
            <!-- <el-table-column prop="messageType" label="短信类型" align="center" width="100"
             :filters="[{ text: '下款', value: '1' }, { text: '还款', value: '2' }, { text: '还本', value: '3' },{ text: '付息提醒', value: '4' },{ text: '付本提醒', value: '5' },{ text: '其他', value: '6' }]" :filter-method="filterMessageType" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type=" scope.row.messageType ===1?'':scope.row.messageType ===2?'success':scope.row.messageType ===3?'info':scope.row.messageType ===4?'warning':scope.row.messageType ===5?'danger':'' ">
                          {{ scope.row.messageType ===1?'下款':scope.row.messageType ===2?'还款':scope.row.messageType ===3?'还本':scope.row.messageType ===4?'付息提醒':scope.row.messageType ===5?'付本提醒':'其他' }}
                        </el-tag>
                    </template> 
              
            </el-table-column> -->
            <!-- <el-table-column prop="sendStatus" label="发送状态" align="center" width="100" 
             :filters="[{ text: '已发送', value: '1' }, { text: '未发送', value: '2' }, { text: '发送失败', value: '3' }]" :filter-method="filterStatus" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendStatus ==1?'success':scope.row.sendStatus ==2?'info':'danger'">
                          {{ scope.row.sendStatus ==1?'已发送':scope.row.sendStatus ==2?'未发送':'发送失败' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>             -->
            <el-table-column prop="cz"  align="center" label="操作" width="240"  >
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="success"
                    @click="handleShow(scope.$index, scope.row)"
                   >详情</el-button>                  
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                   >编辑</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                   >完结</el-button>                   
                </template> 
            </el-table-column>            
        </el-table>  
       <el-row class="m20" v-if="total>0">
            <el-button type="primary" style="float:left" @click="handelConfigAll" :disabled="multipleSelection.length==0">批量完结</el-button>
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
          title="新增短信"
          :visible.sync="dialogVisible1"
          center
          width="35%"
          >
            <el-form :rules="rules" :model="ruleForm3" status-icon  ref="ruleForm3" label-width="100px" >
              <!-- <el-form-item label="发送时间" >
                <el-input v-model="ruleForm3.username" ></el-input>
              </el-form-item> -->
              <el-form-item label="手机号码" prop='mobile'>
                <el-input v-model="ruleForm3.mobile"></el-input>
              </el-form-item>  
              <el-form-item label="立即维修">
                <el-switch v-model="ruleForm3.now"></el-switch>
              </el-form-item>   
              <el-form-item label="预计维修时间" v-if="!ruleForm3.now">
                <el-date-picker
                  v-model="ruleForm3.sendTime"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期时间">
                </el-date-picker>                
              </el-form-item>  
              <!-- <el-form-item label="发送状态" prop="status" >
                    <el-select  v-model="ruleForm3.status" placeholder="发送状态">
                      <el-option
                        v-for="item in sendStatus"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>                -->
              <el-form-item label="接客户姓名" prop="reciverName">
                <el-input v-model="ruleForm3.reciverName" ></el-input>
              </el-form-item>  
              <el-form-item label="创建人" prop="senderName">
                <el-input v-model="ruleForm3.senderName" :disabled="true"></el-input>
              </el-form-item>   
              <!-- <el-form-item label="短信类型" prop="messageType">
                    <el-select  v-model="ruleForm3.messageType" placeholder="短信类型">
                      <el-option
                        v-for="item in messageType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>  -->
              <!-- <el-form-item label="发送签名" prop="signature">
                    <el-select  v-model="ruleForm3.signature" placeholder="发送签名">
                      <el-option
                        v-for="item in signatureType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>   -->
              <el-form-item label="维修师傅" prop="sendPlatform">
                    <el-select  v-model="ruleForm3.sendPlatform" placeholder="维修师傅">
                      <el-option
                        v-for="item in sendPlatform"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>  
              <el-form-item label="反馈内容">
                <el-input type="textarea" v-model="ruleForm3.messageContent"></el-input>
              </el-form-item>              
 
              <el-form-item label="备注">
                <el-input type="textarea" v-model="ruleForm3.remarks"></el-input>
              </el-form-item>                                                      
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm3')">提交</el-button>
                  <el-button @click="resetForm('ruleForm3')">重置</el-button>
                </el-form-item>
            </el-form>       
        </el-dialog>   
       <el-dialog
          title="售后管理"
          :visible.sync="dialogVisible2"
          center
          width="35%"
          >
            <el-form :rules="rules" :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" >
              <!-- <el-form-item label="发送时间" >
                <el-input v-model="ruleForm3.username" ></el-input>
              </el-form-item> -->
              <el-form-item label="手机号码" prop='mobilePhone'>
                <el-input v-model="ruleForm2.mobilePhone"></el-input>
              </el-form-item>  
              <el-form-item label="立即维修">
                <el-switch v-model="ruleForm2.now"></el-switch>
              </el-form-item>   
              <el-form-item label="预计维修时间" v-if="!ruleForm2.now">
                <el-date-picker
                  v-model="ruleForm2.senddatetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>                
              </el-form-item>  
              <!-- <el-form-item label="发送状态" prop="sendStatus" >
                    <el-select  v-model="ruleForm2.sendStatus" placeholder="发送状态">
                      <el-option
                        v-for="item in sendStatus"
                        :key="item.value"
                        
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>                -->
              <el-form-item label="客户姓名" prop="reciverName">
                <el-input v-model="ruleForm2.reciverName" ></el-input>
              </el-form-item>  
              <el-form-item label="创建人" prop="senderName">
                <el-input v-model="ruleForm2.senderName" :disabled="true"></el-input>
              </el-form-item>   
              <el-form-item label="小区">
                <el-input type="textarea" v-model="ruleForm2.remarks"></el-input>
              </el-form-item>
              <el-form-item label="维修师傅" prop="sendPlatform">
                    <el-select  v-model="ruleForm2.sendPlatform" placeholder="维修师傅">
                      <el-option
                        v-for="item in sendPlatform"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>  
              <el-form-item label="反馈内容">
                <el-input type="textarea" v-model="ruleForm2.messageContent"></el-input>
              </el-form-item>              
              <!-- <el-form-item label="短信类型" prop="messageType">
                    <el-select  v-model="ruleForm2.messageType" placeholder="短信类型">
                      <el-option
                        v-for="item in messageType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item> 
              <el-form-item label="发送签名" prop="signature">
                    <el-select  v-model="ruleForm2.signature" placeholder="发送签名">
                      <el-option
                        v-for="item in signatureType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select> 
              </el-form-item>                                            -->
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
            </el-form>       
      </el-dialog> 
      <el-dialog
          title="售后详情"
          :visible.sync="dialogVisible3"
          center
          width="58%"
        >
        <!-- <el-row>
            <el-alert
              :title="showTitle"
              :closable="false"
              type="error">
            </el-alert>           
        </el-row>          -->
        <el-row>
          <el-button  icon="el-icon-plus" type="primary" @click="open" >短信来源</el-button>
        </el-row>
        <el-table
            :data="DetailtableData"  
            border  
            ref="multipleTable" 
            tooltip-effect="dark"
            style="width: 100%"
            class="m20"
            v-loading="loading"
            @selection-change="handleSelectionChange"
          >
       
        
            <el-table-column prop="id" label="序号" align="center" width="70"   sortable></el-table-column>

            <el-table-column prop="senddatetime" label="预计维修时间" align="center" width="140" ></el-table-column>
            <el-table-column prop="mobilePhone" label="电话" align="center" width="120" ></el-table-column>
            <!-- <el-table-column prop="recordStatus" label="短信状态" align="center" width="100" 
             :filters="[{ text: '正常', value: '1' }, { text: '更新', value: '2' }, { text: '撤销', value: '3' }]" :filter-method="filterRecordStatus" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.recordStatus ==1?'success':scope.row.recordStatus ==2?'info':'danger'">
                          {{ scope.row.recordStatus ==1?'正常':scope.row.recordStatus ==2?'更新':'撤销' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>             -->
            <el-table-column prop="sendStatus" label="状态" align="center" width="100" 
             :filters="[{ text: '待解决', value: '1' }, { text: '解决中', value: '2' }, { text: '已完结', value: '3' }, { text: '失败重发中', value: '4' }, { text: '撤销', value: '5' }]" :filter-method="filterStatus" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendStatus ==1?'danger':scope.row.sendStatus ==2?'info':scope.row.sendStatus ==3?'success':scope.row.sendStatus ==4?'primay':'warning'">
                          {{ scope.row.sendStatus ==1?'待解决':scope.row.sendStatus ==2?'解决中':scope.row.sendStatus ==3?'已完结':scope.row.sendStatus ==4?'失败重发中':'撤销' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>
            <el-table-column prop="reciverName" label="客户姓名" align="center" width="100" ></el-table-column>
            <el-table-column prop="senderName" label="创建人" align="center" width="100" ></el-table-column>
          <!-- <el-table-column prop="messageContent" label="消息内容" align="center" width='300'></el-table-column>    -->
          <el-table-column prop="sendTimes" label="维修次数" align="center" width='80'></el-table-column>                    
            <!-- <el-table-column prop="senderName" label="备注" align="center" ></el-table-column> -->
            <el-table-column prop="sendPlatform" label="维修师傅" align="center"   
             :filters="[{ text: '华信', value: '1' }, { text: '创蓝', value: '2' }]" :filter-method="filterSendPlatform" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendPlatform ===1?'success':'danger'">
                          {{ scope.row.sendPlatform ===1?'华信':'创蓝' }}
                        </el-tag>
                    </template> 

            </el-table-column>
  
            <!-- <el-table-column prop="messageType" label="短信类型" align="center" width="100"
             :filters="[{ text: '下款', value: '1' }, { text: '还款', value: '2' }, { text: '还本', value: '3' },{ text: '付息提醒', value: '4' },{ text: '付本提醒', value: '5' },{ text: '其他', value: '6' }]" :filter-method="filterMessageType" filter-placement="bottom-end"
                    >
  
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type=" scope.row.messageType ===1?'':scope.row.messageType ===2?'success':scope.row.messageType ===3?'info':scope.row.messageType ===4?'warning':scope.row.messageType ===5?'danger':'' ">
                          {{ scope.row.messageType ===1?'下款':scope.row.messageType ===2?'还款':scope.row.messageType ===3?'还本':scope.row.messageType ===4?'付息提醒':scope.row.messageType ===5?'付本提醒':'其他' }}
                        </el-tag>
                    </template>                     
              
            </el-table-column> -->
            <!-- <el-table-column prop="sendStatus" label="发送状态" align="center" width="100" 
             :filters="[{ text: '发送成功', value: '1' }, { text: '待发送', value: '2' }, { text: '发送失败', value: '3' }, { text: '失败重发中', value: '4' }, { text: '撤销', value: '5' }]" :filter-method="filterStatus" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendStatus ==1?'success':scope.row.sendStatus ==2?'info':scope.row.sendStatus ==3?'danger':scope.row.sendStatus ==4?'primay':'warning'">
                          {{ scope.row.sendStatus ==1?'发送成功':scope.row.sendStatus ==2?'待发送':scope.row.sendStatus ==3?'发送失败':scope.row.sendStatus ==4?'失败重发中':'撤销' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>               -->
            <!-- <el-table-column prop="cz"  align="center" label="操作" width="240"  >
                <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="success"
                    @click="handleShow(scope.$index, scope.row)"
                   >详情</el-button>                  
                <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)"
                   >编辑</el-button>
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                   >撤销</el-button>                   
                </template> 
            </el-table-column>             -->
        </el-table>  
            <el-card shadow="hover" class="m20" v-if="DetailtableData[0]">
                 <strong style="display:inline-block;width:80px;margin-right:20px">反馈内容:</strong> <i>{{DetailtableData[0].messageContent}}</i> 
            </el-card> 
            <el-card shadow="hover" class="m20" v-if="DetailtableData[0]">
                 <strong style="display:inline-block;width:80px;margin-right:20px">小区:</strong><i>{{DetailtableData[0].remarks}}</i> 
            </el-card>               
            <!-- <el-card shadow="hover" class="m20">
                 <strong style="margin-right:20px">备注:</strong> {{DetailtableData[0].messageContent}}
            </el-card>                     -->
        <el-table
            :data="showData"  
            border  
            style="width: 100%"
            class="m20"
          >
               <el-table-column
      type="index"
      label="维修编号"
       align="center" 
      width="100">
    </el-table-column>          
            <el-table-column prop="sendstatus" label="状态" align="center"
             :filters="[{ text: '成功', value: '1' }, { text: '失败', value: '2' }]" :filter-method="filterSendstatus" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendstatus ===1?'success':'danger'">
                          {{ scope.row.sendstatus ===1?'成功':'失败' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>           
            <el-table-column prop="sendTime" label="维修时间" align="center"  ></el-table-column>            
            <!-- <el-table-column prop="type" label="短信类型" align="center" width="100"
             :filters="[{ text: '周期短信', value: '1' }, { text: '定时短信', value: '2' }]" :filter-method="filterType" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.type ===1?'success':'danger'">
                          {{ scope.row.type ===1?'周期短信':'定时短信' }}
                        </el-tag>
                    </template> 
              
            </el-table-column>           -->
            <!-- <el-table-column prop="sendPlatform" label="发送平台" align="center"  
             :filters="[{ text: '华信', value: '1' }, { text: '创蓝', value: '2' }]" :filter-method="filterSendPlatform" filter-placement="bottom-end"
                    >
                    <template slot-scope="scope">
                        <el-tag style="margin-left: 10px" :type="scope.row.sendStatus ===1?'success':'danger'">
                          {{ scope.row.sendPlatform ===1?'华信':'创蓝' }}
                        </el-tag>
                    </template> 

            </el-table-column>          -->
        </el-table>
       <el-row class="m20" v-if="showTotal>0">
            <!-- <el-button type="primary" style="float:left" @click="handelConfigAll" :disabled="multipleSelection.length==0">批量删除</el-button> -->
             <div style="float:right">
                 <el-pagination
                   @current-change="handleCurrentChangeS"
                    @size-change="handleSizeChangeS"
                   :current-page="showNpage"
                    :page-sizes="[10, 20, 30, 40]"
                     :page-size="pagesize"
                   background
                   layout="total,sizes,prev, pager, next,jumper"
                   :total="showTotal">
                 </el-pagination>   
             </div>
        </el-row>         
      </el-dialog>                                            
    </div>
</template>

<script>
import axios from "axios";
import { timeFormat } from "../../../config/time";

export default {
  computed: {


  },
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value != null && value != "") {
        var reg = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!reg.test(value)) {
          return callback(
            new Error("请输入4-16位包含大小写字母和数字的用户名！")
          );
        } else {
          callback();
        }
      } else {
        return callback(
          new Error("请输入4-16位包含大小写字母和数字的用户名！")
        );
      }
    };

    var validatePassword = (rule, value, callback) => {
      if (value != null && value != "") {
        var reg = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
        if (!reg.test(value)) {
          return callback(
            new Error("密码必须由6-16个英文字母和数字的字符串组成！")
          );
        } else {
          callback();
        }
      } else {
        return callback(
          new Error("密码必须由6-16个英文字母和数字的字符串组成！")
        );
      }
    };

    var validateEmail = (rule, value, callback) => {
      if (value != null && value != "") {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        if (!reg.test(value)) {
          return callback(new Error("请输入正确邮箱！"));
        } else {
          callback();
        }
      } else {
        return callback(new Error("请输入正确邮箱！"));
      }
    };

    var validateMobile = (rule, value, callback) => {
      var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|19[0|1|2|3|5|6|7|8|9])\d{8}$/;
      console.log(value);
      if (value == "") {
        callback(new Error("请输入正确手机号码！"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确手机号码！"));
      } else {
        callback();
      }
    };
    return {
      name: "",
      url: "",
      signatureType: [
        { label: "恒舜金融", value: 1 },
        { label: "恒舜普融", value: 2 },
        { label: "恒舜财富", value: 3 }
      ],
      DetailtableData: [],
      title: "售后管理",
      multipleSelection: [],
      search: {
        time: [],
        keywords: ""
      },
      sendStatus: [
        { label: "发送成功", value: 1 },
        { label: "待发送", value: 2 },
        { label: "发送失败", value: 3 },
        { label: "失败重发中", value: 4 },
        { label: "撤销", value: 5 }
      ],
      sendPlatform: [{ label: "华信", value: 1 }, { label: "创蓝", value: 2 }],
      messageType: [
        { label: "下款", value: 1 },
        { label: "还款", value: 2 },
        { label: "还本", value: 3 },
        { label: "付息提醒", value: 4 },
        { label: "付本提醒", value: 5 },
        { label: "其他", value: 6 }
      ],
      dialogVisible1: false,
      dialogVisible3: false,
      showData: [],
      currentId: "",
      showNpage: 0,
      showPageSize: 10,
      showTotal: 0,
      showTitle: "",
      fileList: [],
      tableData: [],
      loading: false,
      npage: 1,
      pagesize: 10,
      total: 0,
      dialogVisible2: false,
      ruleForm3: {
        now: false,
        sendPlatform: 1,
        senderName: 'admin',
        signature: 1
      },
      ruleForm2: {},
      rules: {
        staffName: [
          { required: true, message: "请输入真实姓名", trigger: "blur" }
        ],
        reciverName: [
          { required: true, message: "请输入真实姓名", trigger: "blur" }
        ],
        senderName: [{ message: "请输入真实姓名", trigger: "blur" }],
        username: [
          { require: true, validator: validateUsername, trigger: "blur" }
        ],
        password: [
          { require: true, validator: validatePassword, trigger: "blur" }
        ],
        mobilePhone: [
          { require: true, validator: validateMobile, trigger: "blur" }
        ],
        email: [{ require: true, validator: validateEmail, trigger: "blur" }],
        mobile: [{ require: true, validator: validateMobile, trigger: "blur" }],
        roles: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个角色",
            trigger: "change"
          }
        ],
        signature: [
          {
            required: true,
            message: "请选择发送签名",
            trigger: "change"
          }
        ],
        ssex: [{ required: true, message: "请选择性别", trigger: "change" }],
        deptId: [{ required: true, message: "请选择部门", trigger: "change" }],
        sendStatus: [
          { required: true, message: "请选择状态", trigger: "change" }
        ],
        sendPlatform: [
          { required: true, message: "请选择维修师傅", trigger: "change" }
        ],
        messageType: [
          { required: true, message: "请选择维修师傅", trigger: "change" }
        ]
      }
    };
  },
  methods: {

 
    //得到短信详情
    _httpFindMessageRecording(id) {
      this.dialogVisible3 = false;

          let data = {"msg":"查询成功","code":200,"data":{"total":1,"rows":[{"id":12,"messageId":18,"sendstatus":1,"sendTime":"2018-07-27 03:00:02","message":"操作成功","type":2,"sendPlatform":1}]}};
          this.showTotal = data.data.total;
          this.showData = data.data.rows;
          this.dialogVisible3 = true;

    },
    //新增修改用户
    _httpUpdateMessageAll(
      Id,
      senddatetime,
      mobilePhone,
      sendTime,
      sendStatus,
      reciverName,
      senderName,
      sendDate,
      remarks,
      sendPlatform,
      messageContent,
      messageType,
      signature
    ) {
  
      httpUpdateMessageAll(
        Id,
        senddatetime,
        mobilePhone,
        sendTime,
        sendStatus,
        reciverName,
        senderName,
        sendDate,
        remarks,
        sendPlatform,
        messageContent,
        messageType,
        signature
      )
        .then(res => {
          let data = res.data;
          if (data.status) {
            this.$message({
              message: data.messager,
              type: "success"
            });
            this.dialogVisible2 = false;
            this.dialogVisible1 = false;
            this.init(this.npage, this.pagesize);
          } else {
            this.$message.error(data.messager);
          }
        })
        .catch(err => {
          let data = err.response ? err.response.data : {};

          if (data.message == "当前登陆用户已失效，请重新登陆") {
            this.$message.error(data.message);
            this.$router.push("/login");
          } else {
            this.$message.error("网络错误请联系管理员");
          }
        });
    },
    init(
      pageNumber,
      pageSize,
      mobilePhone,
      sendStatus,
      messageContent,
      sendPlatform
    ) {
   
      let _this = this;
      this.loading = true;

             let data = {
        msg: "查询成功",
        code: 200,
        data: {
          total: 20,
          rows: [
            {
              reciverName: "庄周",
              mobilePhone: "18761864005",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "马桶坏了 赶紧来修",
              senderName: "-",
              lastedSendTime: "2018-07-27 03:00:02",
              sendDate: null,
              remarks: "威尼斯十四街区",
              sendPlatform: 1,
              senddatetime: "2018-07-27 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 18,
              filePathId: 3
            },
            {
              reciverName: "王点点",
              mobilePhone: "18360469221",
              sendTime: null,
              periodId: null,
              sendStatus: 2,
              messageContent:
                "我家水龙头出问题了",
              senderName: "-",
              lastedSendTime: "2018-07-23 03:04:23",
              sendDate: null,
              remarks: "幸福筑家",
              sendPlatform: 1,
              senddatetime: "2018-07-23 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 11,
              filePathId: 3
            },
            {
              reciverName: "陈晨",
              mobilePhone: "18761864005",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "隔壁人太吵了 你们想办法 叫他们安静点",
              senderName: "-",
              lastedSendTime: "2018-07-29 03:00:02",
              sendDate: null,
              remarks: "金鼎湾国际",
              sendPlatform: 1,
              senddatetime: "2018-07-29 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 22,
              filePathId: 3
            },
            {
              reciverName: "周春来",
              mobilePhone: "18360469221",
              sendTime: null,
              periodId: null,
              sendStatus: 2,
              messageContent:
                "我怎么又违约金的你们这个违约金怎么来的请电话联系孟经理：15295396671。",
              senderName: " ",
              lastedSendTime: "2018-07-23 10:16:04",
              sendDate: null,
              remarks: "北秀村小区",
              sendPlatform: 1,
              senddatetime: "2018-07-25 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 0,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 15,
              filePathId: 3
            },
            {
              reciverName: "王如玉",
              mobilePhone: "18360469221",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "昨天停水了 今天还是停水 什么时候修好",
              senderName: "-",
              lastedSendTime: "2018-07-27 03:00:03",
              sendDate: null,
              remarks: " 北秀村小区",
              sendPlatform: 1,
              senddatetime: "2018-07-27 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 19,
              filePathId: 3
            },
            {
              reciverName: "杜政",
              mobilePhone: "18761864005",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "物业费也是我们出吗？",
              senderName: "",
              lastedSendTime: "2018-07-24 11:00:25",
              sendDate: null,
              remarks: "中山南路升州路砂珠巷小区",
              sendPlatform: 1,
              senddatetime: "2018-07-24 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 12,
              filePathId: 3
            },
            {
              reciverName: "周博",
              mobilePhone: "18360469221",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "我不知道说什么",
              senderName: "-",
              lastedSendTime: "2018-07-29 03:00:03",
              sendDate: null,
              remarks: " 29中 ",
              sendPlatform: 1,
              senddatetime: "2018-07-29 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 23,
              filePathId: 3
            },
            {
              reciverName: "李牧",
              mobilePhone: "18761864005",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "钥匙掉了 能再送一把吗",
              senderName: "天泓山庄 ",
              lastedSendTime: "2018-07-26 03:01:38",
              sendDate: null,
              remarks: "汉口西路",
              sendPlatform: 1,
              senddatetime: "2018-07-26 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 16,
              filePathId: 3
            },
            {
              reciverName: "程真",
              mobilePhone: "18761864005",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "我们的大厅怎么都是垃圾  能不能派人清理一下",
              senderName: "-",
              lastedSendTime: "2018-07-28 03:00:02",
              sendDate: null,
              remarks: "钟英 武学园",
              sendPlatform: 1,
              senddatetime: "2018-07-28 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 20,
              filePathId: 3
            },
            {
              reciverName: "田甜",
              mobilePhone: "18360469221",
              sendTime: null,
              periodId: null,
              sendStatus: 1,
              messageContent:
                "维修师傅想我爸爸",
              senderName: "-",
              lastedSendTime: "2018-07-24 03:01:38",
              sendDate: null,
              remarks: "汉口西路",
              sendPlatform: 1,
              senddatetime: "2018-07-24 11:00:00",
              createTime: "2018-07-23 10:16:04",
              sendTimes: 1,
              messageType: 2,
              periodicMessageId: null,
              source: null,
              url:
                "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720160632605.xls",
              signature: 1,
              id: 13,
              filePathId: 3
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
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {},
    handlePreview(file) {},
    beforeAvatarUpload(file) {
      //将文件 的所有的内容都添加在这一起上传
      let fd = new FormData();
      fd.append("upload", file);
      // fd.append("realMoney", Number(this.editForm.realMoney)); //其他参数
      // fd.append("withdrawId", Number(this.editForm.withdrawId)); //其他参数
      // fd.append("discountAmt", Number(this.editForm.discountAmt)); //其他参数
      // fd.append("mustPayBackAmt", Number(this.editForm.mustPayBackAmt)); //其他参数
      // fd.append("actualPayBackAmt", Number(this.editForm.actualPayBackAmt)); //其他参数
      // fd.append("remark", this.editForm.remark); //其他参数
      // console.log(fd);
      // const isJPG = /image\/\w+/.test(file.type);
      // const isLt2M = file.size / 1024 / 1024 < 4;

      // if (!isJPG) {
      //   this.$message.error("必须上传图片!");
      // }
      // if (!isLt2M) {
      //   this.$message.error("上传头像图片大小不能超过 4MB!");
      // }
      // return isJPG && isLt2M;
      console.log(file);
      var re = /\w+\.(txt|xlsx)/;
      const isJPG = re.test(file.name);
      console.log(isJPG);
      const isLt2M = file.size / 1024 / 1024 < 4;

      // if (!isJPG) {
      //   return this.$message.error("上传头像图片只能是 txt和xlsx格式!");
      // }
      if (!isLt2M) {
        return this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      if (!file) {
        return this.$message.error("请上传文本");
      }
      this.$message({
        message: "申请提交成功等待审核",
        type: "success"
      });
      axios
        .post("/readExcel", fd, {})
        .then(res => {
          let data = res.data;
          if (data.code == 200) {
            this.$message({
              message: data.msg,
              type: "success"
            });
          } else if (data.code == 500) {
            this.$message.error(data.msg);
            this.$router.push("/login");
          } else {
            this.$message.error("上传文件有误请先下载模板");
          }
          this.init(this.npage, this.pagesize);
        })
        .catch(err => {
          this.$message.error("上传文件有误请先下载模板");
        });
      return isJPG && isLt2M;
    },
    reset() {
      this.search = {};

      this.init(this.npage, this.pagesize);
    },
    handleSearch() {
      this.init(
        this.npage,
        this.pagesize,
        this.search.mobilePhone,
        this.search.sendStatus,
        this.search.keywords,
        this.search.sendPlatform
      );
    },
    handleCurrentChange(val) {
      this.npage = val;
      this.handleSearch();
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.handleSearch();
    },
    handleCurrentChangeS(val) {
      this.showNpage = val;
      this._httpFindMessageRecording(this.currentId);
    },
    handleSizeChangeS(val) {
      this.showPageSize = val;
      this._httpFindMessageRecording(this.currentId);
    },
    //提交更新修改
    onSubmit(formName) {

      if (formName == "ruleForm3") {
        if (this.ruleForm3.now) {
          this._httpUpdateMessageAll(
            null,
            timeFormat(new Date()),
            this.ruleForm3.mobile,
            null,
            this.ruleForm3.status,
            this.ruleForm3.reciverName,
            this.ruleForm3.senderName,
            null,
            this.ruleForm3.remarks,
            this.ruleForm3.sendPlatform,
            this.ruleForm3.messageContent,
            this.ruleForm3.messageType,
            this.ruleForm3.signature
          );
        } else {
          this._httpUpdateMessageAll(
            null,
            this.ruleForm3.sendTime,
            this.ruleForm3.mobile,
            null,
            this.ruleForm3.status,
            this.ruleForm3.reciverName,
            this.ruleForm3.senderName,
            null,
            this.ruleForm3.remarks,
            this.ruleForm3.sendPlatform,
            this.ruleForm3.messageContent,
            this.ruleForm3.messageType,
            this.ruleForm3.signature
          );
        }
      } else {
        if (this.ruleForm2.now) {
          this._httpUpdateMessageAll(
            this.ruleForm2.id,
            timeFormat(new Date()),
            this.ruleForm2.mobilePhone,
            null,
            null,
            this.ruleForm2.reciverName,
            this.ruleForm2.senderName,
            null,
            this.ruleForm2.remarks,
            this.ruleForm2.sendPlatform,
            this.ruleForm2.messageContent,
            this.ruleForm2.messageType,
            this.ruleForm2.signature
          );
        } else {
          this._httpUpdateMessageAll(
            this.ruleForm2.id,
            this.ruleForm2.senddatetime,
            this.ruleForm2.mobilePhone,
            null,
            null,
            this.ruleForm2.reciverName,
            this.ruleForm2.senderName,
            null,
            this.ruleForm2.remarks,
            this.ruleForm2.sendPlatform,
            this.ruleForm2.messageContent,
            this.ruleForm2.messageType,
            this.ruleForm2.signature
          );
        }
      }
    },
    submitForm(formName) {
      let _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
            this.$message({
        message: "您无此权限，如需开通权限请联系管理员!",
        type: "error"
      });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
    this.$message({
        message: "您无此权限，如需开通权限请联系管理员!",
        type: "error"
      });
    //   this.$refs[formName].resetFields();
    //   this.ruleForm3 = {
    //     now: false,
    //     sendPlatform: 1,
    //     senderName: "admin",
    //     signature: 1
    //   };
    },
    handleEdit(index, row) {
      let id = row.id;
      let _this = this;

      this.ruleForm2 = Object.assign({}, row, { now: false });
      this.dialogVisible2 = true;
    },
    handleDelete(index, row) {
      let id = row.id;
      let _this = this;
      this.$confirm("此操作将完结该售后, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
      this.$message({
        message: "您无此权限，如需开通权限请联系管理员!",
        type: "error"
      });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    _httpApmsgDeleteData(ids) {
      let _this = this;
      httpApmsgDeleteData(ids)
        .then(res => {
          let data = res.data;
          if (data.status) {
            _this.$message({
              message: data.messager,
              type: "success"
            });
          } else {
            _this.$message.error(data.messager);
          }
          _this.init(this.npage, this.pagesize);
        })
        .catch(err => {
          let data = err.response ? err.response.data : {};

          if (data.message == "当前登陆用户已失效，请重新登陆") {
            this.$message.error(data.message);
            this.$router.push("/login");
          } else {
            this.$message.error("网络错误请联系管理员");
          }
        });
    },
    //批量选择
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handelConfigAll() {
      let ids = [];
          this.$message({
            message: "您无此权限，如需开通权限请联系管理员!",
            type: "error"
          });      
      let _this = this;
      for (let a = 0; a < this.multipleSelection.length; a++) {
        ids.push(this.multipleSelection[a].id);
      }
      this.$confirm("此操作将永久删除该短信, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          _this._httpApmsgDeleteData(ids.join(","));
          _this.init(this.npage, this.pagesize);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    filterStatus(value, row, column) {
      return row.sendStatus == value;
    },
    filterSendPlatform(value, row, column) {
      return row.sendPlatform == value;
    },
    filterMessageType(value, row, column) {
      return row.messageType == value;
    },
    filterType(value, row, column) {
      return row.Type == value;
    },
    filterSendstatus(value, row, column) {
      return row.sendstatus == value;
    },
    filterRecordStatus(value, row, column) {
      return row.recordStatus == value;
    },
    //download
    download() {
      window.open(
        "http://paxfivrd0.bkt.clouddn.com/EXCEL20180720154813186.xls"
      );
    },
    handleShow(index, row) {
      this.currentId = "";
      this.showTitle = "";
      this.url = "";
      let id = row.id;
      this.currentId = id;
      this.url = row.url;
      this.DetailtableData.length = 0;
      this.DetailtableData.push(JSON.parse(JSON.stringify(row)));
      // this.url = "https://www.baidu.com/?tn=02003390_2_hao_pg";
      this.showTitle = row.messageContent;
      this._httpFindMessageRecording(id);
    },
    open() {
      window.open(this.url);
    }
  },
  mounted() {
    this.init(this.npage, this.pagesize);

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
