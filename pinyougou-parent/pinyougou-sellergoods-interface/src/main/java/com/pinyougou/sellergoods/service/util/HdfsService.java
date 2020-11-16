package com.pinyougou.sellergoods.service.util;

/**
 * @author jiangwc33446
 *
 * HDFS操作接口,实现商品图片上传、下载
 */
public interface HdfsService {
    /**
     * 图片上传接口
     * @param src 源文件路径
     * @param des hdfs路径
     *
     */
    void uploadImg(String src,String des);
}
