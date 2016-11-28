/**
 * Created by xxl on 2016/11/22.
 */
var a=[-1,2,3,4];
var sum=0,max=0;
add(1);
function add(len) {
    if(len>4) {
        return 0;
    }
    else {
        for (var i = 0; i < a.length - len + 1; i++) {
            for (var j = 0; j < len; j++) {
                sum = sum + a[i + j];
            }
            if (max < sum) {
                max = sum;
            }
            console.log("子序列之和有："+sum);
            sum = 0;
        }
        return add(len + 1);
    }
}
console.log("子序列之和的最大值为"+max);


