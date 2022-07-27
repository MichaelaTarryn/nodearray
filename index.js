names = ['joel', 'michael', 'malia', 'zoe', 'emma', 'peter', 'chloe'];
cnt = -1
var loop = setInterval(() => {
    cnt++
    if (cnt >= names.length - 1)
{
    clearInterval(loop)
}console.log(names[cnt]);
}, 2000);