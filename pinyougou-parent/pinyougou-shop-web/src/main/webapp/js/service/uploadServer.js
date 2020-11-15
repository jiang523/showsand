app.service('uploadService',function ($http) {
    this.uploadFile = function () {
        let formData = new FormData();
        formData.append('file',file.files[0]);//文件上传框name

        return  $http({
            url: '../upload.do',
            method : 'post',
            data : formData,
            headers:{'Content-Type':undefined},
            transformRequest:angular.identity
        });
    }
})