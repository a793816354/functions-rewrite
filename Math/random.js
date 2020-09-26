// 生成随机数
// 思路：起码要有一个一直在变化的东西，且不能只有一种趋势，如时间戳的后几位
//且再配合几个质数，即可取得效果

Math.random = function(){
    let timestamp = new Date().getTime()
    // 再操作一堆质数素数
    // 最后除以位数
}