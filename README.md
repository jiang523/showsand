项目介绍：
网上在线商城，包含以下模块：
1、商家运营管理
2、在线商城
3、网站后台管理
目前正在开发商家运营模块，包含品牌管理、模板管理、商品管理、搜索管理、广告服务等。
技术栈：springmvc+mybatis作为web后台开发框架（后续会往springboot/spring cloud迁移）
        dubbox作为rpc远程调用框架,zookeeper集群作为dubbo服务注册中心
        mysql5.7为业务数据库
        redis做缓存，activeMQ做消息队列框架
        FastFS作为图片服务器
        前端框架用AngularJs
本地搭建方式(随着项目进展更新):
1、下载代码，导入Idea或eclipse，更新依赖
2、对parent工程做maven install操作，确保每个子项目都install 成功
3、修改项目中dubbo注册中心地址为安装的zookeeper地址，修改数据库配置文件
4、数据库执行sql脚本
5、启动sellergoods-service模块，然后启动manager模块
6、浏览器访问 ip:9101/brand/findAll.do，有数据返回代表搭建成功

搭建中出现的问题可以参考项目中的搭建文档。

目前进度:
完成运营管理的品牌管理、规格管理的前后台


后续计划工作：
1、完成运营管理其他功能

2、完成商城管理：商品管理、购物车管理、订单管理、在线支付、秒杀

3、完成网站后台管理：数据采集、过滤、转换（ETL过程，整合hdfs,hive，hbase，sprak等大数据组件）
                    对用户进行画像生成(整合flink框架)，对用户进行智能推荐(整合mahout协同过滤算法)
                    对商城进行数据可视化展示，为运营商提供决策支撑。

