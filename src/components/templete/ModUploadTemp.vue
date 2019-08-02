<template>
    <div class="uploadimg">
        <el-upload
            class="upload-demo"
            action="http://upload.qiniu.com"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="handleSuccess"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :data="postData"
            :show-file-list="filelist"
            >
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
    </div>
</template>
<script>
export default {
    name:'ModUploadTemp',
    props: {
        vindex: {
            type: Number,
            required: true
        },
        vdatatype: {
            validator: function (value) {// 这个值必须匹配下列字符串中的一个
                return ['actdata', 'fixeddata', 'bodydata'].indexOf(value) !== -1
            },
            required: true  
        },
        vnature: {
            type: String,
            required: true
        },
        vsubnode: {
            type: String
        },
        vsubinx:{
            type: Number
        }
    },
    data() {
        return {
            filelist:false,
            postData: {
                token: "QeG0_ag5T2hI0hkwjU0Io7KX8Ljs0xr5mF_XS474:iY9NV0D1LX_T2_j6MsLhFbX7G1c=:eyJyZXR1cm5Cb2R5Ijoie1wia2V5XCI6XCIkKGtleSlcIixcImhhc2hcIjpcIiQoZXRhZylcIixcImZzaXplXCI6JChmc2l6ZSksXCJidWNrZXRcIjpcIiQoYnVja2V0KVwiLFwibmFtZVwiOlwiJCh4Om5hbWUpXCIsXCJ3XCI6IFwiJChpbWFnZUluZm8ud2lkdGgpXCIsXCJoXCI6IFwiJChpbWFnZUluZm8uaGVpZ2h0KVwifSIsInNjb3BlIjoiaGFwcHkiLCJkZWFkbGluZSI6MTU2NDgwNjQzM30="   
            }
        }
    },
    methods:{
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleSuccess(response, file, fileList) {
            console.log(response, file, fileList);
            this.$store.commit('editBtnsParamsSnData', { 
                index: this.vindex, 
                datatype:this.vdatatype,
                nature: this.vnature,
                subnode:this.vsubnode,
                subinx :this.vsubinx,
                imgw:response.w,
                imgh:response.h,
                value: "http://img.chenhuanle.xyz/" + response.key
            });
            let cid = this.$route.query.actid + this.$route.query.id;
            axios.put('/posts/'+cid+'.json',this.$store.state).then((data) =>{
                console.log('图片成功上传后，更新数据！');
            })
        }
    }
}
</script>

<style scoped>

</style>

