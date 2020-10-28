package entity;

import com.pinyougou.pojo.TbItemCat;

import java.io.Serializable;

/**
 * @author jiangwc33446
 */
public class ItemCatAndTypeName implements Serializable {
    private TbItemCat tbItemCat;
    private String typeName;

    public ItemCatAndTypeName(TbItemCat tbItemCat, String typeName) {
        this.tbItemCat = tbItemCat;
        this.typeName = typeName;
    }

    public TbItemCat getTbItemCat() {
        return tbItemCat;
    }

    public void setTbItemCat(TbItemCat tbItemCat) {
        this.tbItemCat = tbItemCat;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
