//用户余额运算
//浮点数加法运算
const FloatAdd = (arg1, arg2) => {
    var r1, r2, m
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}
//浮点数减法运算
const FloatSub = (arg1, arg2) => {
    var r1, r2, m, n
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    //动态控制精度长度
    n = (r1 = r2) ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
}

module.exports = { FloatAdd, FloatSub }
