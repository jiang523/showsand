package com.pinyougou.mapper;

import java.util.List;

import com.pinyougou.pojo.TbContentCategory;
import com.pinyougou.pojo.TbContentCategoryExample;
import org.apache.ibatis.annotations.Param;

/**
 * @author jiangwc33446
 */
public interface TbContentCategoryMapper {
    /**
     *
     * @param example
     * @return
     */
    int countByExample(TbContentCategoryExample example);

    int deleteByExample(TbContentCategoryExample example);

    /**
     * 用主键id删除
     * @param id
     * @return
     */
    int deleteByPrimaryKey(Long id);

    int insert(TbContentCategory record);

    int insertSelective(TbContentCategory record);

    List<TbContentCategory> selectByExample(TbContentCategoryExample example);

    TbContentCategory selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") TbContentCategory record, @Param("example") TbContentCategoryExample example);

    int updateByExample(@Param("record") TbContentCategory record, @Param("example") TbContentCategoryExample example);

    int updateByPrimaryKeySelective(TbContentCategory record);

    int updateByPrimaryKey(TbContentCategory record);
}
