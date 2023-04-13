import { utils } from "@/utils/utils.ts";

interface IRecordList {
    date: string;//日期
    income: string;//收入
    pay: string;//支出
    details: IDetails[];//明细
}
interface IDetails {
    path: string;//logo地址
    name: string; //名称
    remark: string; //备注
    money: string;//金额
    type: number;//0:支出；1：收入；2：转账；3：还款
}

//明细列表
export function recordList() {
    const recordDatas: IRecordList[] = [
        {
            date: "星期一 03月29日",
            income: utils.formatMoney(80125),
            pay: utils.formatMoney(40828.22),
            details: [
                {
                    path: "#icon-youxi",
                    name: "原神氪金",
                    remark: "微信钱包 胡桃",
                    money: utils.formatMoney(648),
                    type: 0
                },
                {
                    path: "#icon-canyin",
                    name: "吃饭",
                    remark: "请胡桃吃饭",
                    money: utils.formatMoney(40180.22),
                    type: 0
                },
                {
                    path: "#icon-zhuanzhang",
                    name: "转账",
                    remark: "招商银行 储蓄卡3935 转给 胡桃❥(^_-)",
                    money: utils.formatMoney(1314),
                    type: 2
                },
                {
                    path: "#icon-chongqianbao",
                    name: "工资",
                    remark: "招商银行 储蓄卡3935",
                    money: utils.formatMoney(80125),
                    type: 1
                },
                {
                    path: "#icon-duizhangdan",
                    name: "还款",
                    remark: "微信钱包 还款 钟离",
                    money: utils.formatMoney(20125),
                    type: 3
                }
            ]
        },
        {
            date: "星期四 02月25日",
            income: '',
            pay: utils.formatMoney(1944),
            details: [
                {
                    path: "#icon-youxi",
                    name: "原神氪金",
                    remark: "微信钱包 胡桃",
                    money: utils.formatMoney(648),
                    type: 0
                },
                {
                    path: "#icon-youxi",
                    name: "原神氪金",
                    remark: "微信钱包 胡桃",
                    money: utils.formatMoney(648),
                    type: 0
                },
                {
                    path: "#icon-youxi",
                    name: "原神氪金",
                    remark: "微信钱包 胡桃",
                    money: utils.formatMoney(648),
                    type: 0
                }
            ]
        },
        {
            date: "星期一 01月11日",
            income: '',
            pay: utils.formatMoney(1944),
            details: [
                {
                    path: "#icon-youxi",
                    name: "原神氪金",
                    remark: "微信钱包 胡桃",
                    money: utils.formatMoney(648),
                    type: 0
                },
                {
                    path: "#icon-youxi",
                    name: "原神氪金",
                    remark: "微信钱包 胡桃",
                    money: utils.formatMoney(648),
                    type: 0
                },
                {
                    path: "#icon-youxi",
                    name: "原神氪金",
                    remark: "微信钱包 胡桃",
                    money: utils.formatMoney(648),
                    type: 0
                }
            ]
        }
    ];
    return { recordDatas };
}