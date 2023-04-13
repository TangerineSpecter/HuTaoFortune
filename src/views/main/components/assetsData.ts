import { utils } from "@/utils/utils.ts";
interface IAssets {
    path: string;//logo地址
    name: string; //名称
    remark: string; //备注
    money: string;//金额
}

//菜单配置
export function assetsList() {
    const assetsData: IAssets[] = [
        {
            path: "#icon-weixin",
            name: "微信钱包",
            remark: "胡堂主",
            money: utils.formatMoney(20123)
        },
        {
            path: "#icon-zhaoshangyinhang",
            name: "招商银行",
            remark: "储蓄卡 3935",
            money: utils.formatMoney(54925.88)
        },
        {
            path: "#icon-gongshangyinhang",
            name: "中信银行",
            remark: "储蓄卡 6423",
            money: utils.formatMoney(21312)
        }
    ];
    return { assetsData };
}