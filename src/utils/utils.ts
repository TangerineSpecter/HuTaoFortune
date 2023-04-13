class utils {
    //格式化金额
    public static formatMoney = (value: number): string => {
        return value.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' });
    }
}

export { utils };