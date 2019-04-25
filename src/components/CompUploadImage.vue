<template>
    <el-upload
    class="upload-demo"
    action="http://upload.qiniu.com"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :show-file-list="false"
    :on-exceed="handleExceed"
    :data="postData"
    :on-success="handleSuccess"
    >
    <el-button size="small" type="primary">点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
</template>
<script>

export default {
    name:"CompUploadImage",
    data() {
        return {
            postData: {
                token: "QeG0_ag5T2hI0hkwjU0Io7KX8Ljs0xr5mF_XS474:-YasbzPq_M30Eriarc9oyYXWU6c=:eyJyZXR1cm5Cb2R5Ijoie1wia2V5XCI6XCIkKGtleSlcIixcImhhc2hcIjpcIiQoZXRhZylcIixcImZzaXplXCI6JChmc2l6ZSksXCJidWNrZXRcIjpcIiQoYnVja2V0KVwiLFwibmFtZVwiOlwiJCh4Om5hbWUpXCJ9Iiwic2NvcGUiOiJoYXBweSIsImRlYWRsaW5lIjoxNTU2MjU0NTE2fQ=="
            }
        }
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleSuccess(response, file, fileList) {
            console.log(response, file, fileList);
            //store.dispatch("editSnData", { index: this.vindex, nature: 'maximg', value: "http://img.chenhuanle.xyz/" + response.key });
        }
    }
}
</script>
<style scoped>

</style>


