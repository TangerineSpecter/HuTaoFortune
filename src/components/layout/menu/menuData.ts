interface IMenu {
    index: string; //索引
    name: string; //名称
    key: string; //路由key
    path: string; //路由地址
    icon?: any; //?表示可选
}

//菜单配置
export function menuList() {
    const menus: IMenu[] = [
        {
            index: "1",
            name: "主页",
            key: "main",
            path: "/main",
            icon: 'House'
        },
        {
            index: "2",
            name: "账户",
            key: "creditCard",
            path: "/credit-card",
            icon: 'CreditCard'
        },
        {
            index: "3",
            name: "预算",
            key: "budget",
            path: "/budget",
            icon: 'Money'
        },
        {
            index: "4",
            name: "周期",
            key: "period",
            path: "/period",
            icon: 'Calendar'
        },
        {
            index: "5",
            name: "统计",
            key: "pieChart",
            path: "/pie-chart",
            icon: 'PieChart'
        },
        {
            index: "6",
            name: "设置",
            key: "setting",
            path: "/setting",
            icon: 'setting'
        }
    ];
    return { menus };
}