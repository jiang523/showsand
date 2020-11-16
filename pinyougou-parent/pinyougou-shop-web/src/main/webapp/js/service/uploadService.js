app.service('uploadService', function ($http) {
    this.uploadFile = function () {
        var formData = new FormData();
        //file:文件上传框的name
        formData.append('file',file.files[0]);
        return $http(
          {
            url : '../upload.do',
            method : 'post',
            data : formData,
            headers : {'Content-Type':undefined},
            transformRequest : angular.identity
          }
        );
    }
})
