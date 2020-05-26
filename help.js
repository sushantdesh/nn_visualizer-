// function f() {
//     var c = document.getElementById("myCanvas");
//     var ctx = c.getContext("2d");
//     var myVar = setInterval(myTimer, 100);
//
//     function myTimer() {
//         var i = 0;
//         for (i = 0; i <= 90000; i++) {
//             ctx.fillStyle = "rgba(" + Math.floor(Math.random() * 255) + "," +
//                 Math.floor(Math.random() * 100) + "," +
//                 Math.floor(Math.random() * 100) + "," +
//                 Math.floor(Math.random() * 100) + ")";
//             ctx.fillRect(i % 300, parseInt(i / 300, 10), 1, 1);
//         }
//     }
// }
function f(){
var sum1=0;
var count=0;
    var x1=[40,20,30,150,200,240,280,250]
    var x2=[40,30,33,273,250,260,199,200]
    var tar=[-1,-1,-1,-1,1,1,1,1]
    var t; var w0=0,w1=0,w2=0;
    var b=1;
setInterval(function() {

    var t0 = performance.now()
        var c = document.getElementById("myCanvas");
        ctx = c.getContext('2d');

    for (t=0;t<8;t++){
        let act=w0*b+w1*x1[t]+w2*x2[t]
        let out;
        if (act>=0){out=1}
        else {out=-1}
        let error=tar[t]-out
        w0=w0+0.3*(error)
        w1=w1+0.3*(error)*x1[t]
        w2=w2+0.3*(error)*x2[t]
    }


        var im = ctx.createImageData(300, 300); // only do this once per page
        var d = im.data;
        var j;
        var pixel=0;
        for (j = 0; j <= 360000; j += 4) {
            let c=( (w0*b+w1*(pixel%300)+w2*parseInt(pixel/300,10))>=0 ? 1 : 0)
            d[j] = c *255;  //Math.round(Math.random())*255;
            d[j + 1] = (1-c)*255//Math.round(Math.random())*255;
            d[j + 2] = 0//Math.round(Math.random())*255;
            d[j + 3] = Math.abs(w0*b+w1*(pixel%300)+w2*parseInt(pixel/300,10))*255//Math.round(Math.random())*255;
        pixel++;
        }
        //console.log(im.data)
        /* var imgData = ctx.getImageData(10, 10, 50, 50) ; */
        ctx.putImageData(im, 0, 0);
    for (var aa=0;aa<8;aa++) {
        ctx.fillStyle = ((tar[aa]>0) ? "blue": "black");
        ctx.fillRect(x1[aa], x2[aa],3,3);
    }
        /* var i;
        for (i=0;i<=90000;i++){
        ctx.fillRect( i%300, i/300, 1, 1 );
        } */
    var t1 = performance.now()
    sum1+=(t1-t0);
    count++;
    console.log("this frame took " + (t1 - t0) + " milliseconds." + " average is "+ sum1/count)
    },50);
    // setInterval(function(){ v(); }, 50);

}

