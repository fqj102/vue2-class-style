<template>
  <div>
    <input
        type="file"
        @change="addFile"
        ref="inputer"
        accept="application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf"
    />
    <p>支持文件格式：.ppt .pptx .doc .docx .pdf ，单个文件不能超过20M.</p>
  </div>
</template>
<script type="ts">
export default {
  data() {
    return {
      formData: new FormData(),
      file: {}, //文件数据
    }
  }
}


methods: {
//上传文件
  addFile: function () {
    var _this = this;
    let inputDOM = this.$refs.inputer;
// let oldLen = this.filLen;
    this.file = inputDOM.files[0];
    let len = this.file.length;
    let size = Math.floor(this.file.size / 1024);
    if (size > 20 * 1024 * 1024) {
      alert("请选择20M以内的图片！");
      return false;
    }
    this.formData.append("file", this.file);
    this.$http({
      method: "post",
      url: _this.HOST + api.upload,
      data: this.formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
        .then(function (res) {
        })
        .catch(function (err) {
          console.log("新建分享", err);
        });

  }
,
}
</script>
