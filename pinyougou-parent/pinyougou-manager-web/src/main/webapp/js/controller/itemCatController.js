 //控制层
app.controller('itemCatController' ,function($scope,$controller,itemCatService,typeTemplateService){

	$controller('baseController',{$scope:$scope});//继承

    //读取列表数据绑定到表单中
	$scope.findAll=function(){
		itemCatService.findAll().success(
			function(response){
				$scope.list=response;
			}
		);
	}

	//分页
	$scope.findPage=function(page,rows){
		itemCatService.findPage(page,rows).success(
			function(response){
				$scope.list=response.rows;
				$scope.paginationConf.totalItems=response.total;//更新总记录数
			}
		);
	}

	//查询实体
	$scope.findOne=function(id){
		itemCatService.findOne(id).success(
			function(response){
				$scope.entity['id'] = id;
				$scope.entity['name'] = response.tbItemCat.name;
				$scope.entity['typeTemplate'] = {id: response.tbItemCat.typeId, text: response.typeName};
				$scope.entity['parentId'] = response.tbItemCat.parentId;
			}
		);
	}

	//保存
	$scope.save=function(){
		var serviceObject;//服务层对象
		if($scope.entity.id!=null){//如果有ID
			$scope.entity.typeId = $scope.entity.typeTemplate.id;
			serviceObject=itemCatService.update($scope.entity); //修改
		}else{
			$scope.entity['typeId'] = $scope.entity.typeTemplate.id;
			serviceObject=itemCatService.add($scope.entity);//增加
		}
		serviceObject.success(
			function(response){
				if(response.success){
					//重新查询
		        	$scope.reloadList();//重新加载
				}else{
					alert(response.message);
				}
			}
		);
	}


	//批量删除
	$scope.dele=function(){
		//获取选中的复选框
		itemCatService.dele( $scope.selectIds).success(
			function(response){
				if(response.success){
					$scope.reloadList();//刷新列表
					$scope.selectIds=[];
				}
			}
		);
	}

	$scope.searchEntity={};//定义搜索对象

	//搜索
	$scope.search=function(parentId){
		itemCatService.search(parentId).success(
			function(response){
				$scope.list=response;
			}
		);
	}

	$scope.grade = 1;
	$scope.setGrade = function (value) {
		$scope.grade = value;
	}

	$scope.selectList = function (p_entity) {
		if($scope.grade == 1){
			$scope.entity_1 = null;
			$scope.entity_2 = null;
		}
		if($scope.grade == 2){
			$scope.entity_1 = p_entity;
			$scope.entity_2 = null;
		}
		if($scope.grade == 3){
			$scope.entity_2 = p_entity;
		}
		$scope.search(p_entity.id);
		$scope.setParentId(p_entity.id);
	}

	$scope.setParentId = function (value) {
		$scope.entity['parentId'] = value;
	}

	$scope.options={type_template:{}};
	$scope.selectTypeTemplateList = function () {
		typeTemplateService.selectTypeTemplateList().success(
			function (response) {
				$scope.options['type_template'] = {data:response};
			}
		)
	}

	$scope.initEntity = function () {
		if($scope.entity == null) {
			$scope.entity = {name: '', typeTemplate: {id: '', text: ''},parentId:0};
		}else{
			$scope.entity.name = '';
			$scope.entity.typeTemplate = {id: '', text: ''};
		}
	}
});
