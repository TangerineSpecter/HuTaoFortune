interface IMenu {
    index: string;
    name: string;
    key: string;
    icon?: any; //?表示可选
}

export function menuList() {
    const menus: IMenu[] = [
        {
            index: "1",
            name: "主页",
            key: "main",
            icon: 'House'
        },
        {
            index: "2",
            name: "账户",
            key: "creditCard",
            icon: 'CreditCard'
        },
        {
            index: "3",
            name: "统计",
            key: "pieChart",
            icon: 'PieChart'
        },
        {
            index: "4",
            name: "设置",
            key: "setting",
            icon: 'setting'
        }
    ];
    return { menus };
}