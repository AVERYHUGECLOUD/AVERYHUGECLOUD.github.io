/*样式二*/
/* 控制下雪 */
function snowFall(snow) {
    /* 可配置属性 */
    snow = snow || {};
    this.maxFlake = snow.maxFlake || 80; /* 最多片数 */
    this.flakeSize = snow.flakeSize || 40; /* 雪花形状 */
    this.fallSpeed = snow.fallSpeed || 1; /* 坠落速度 */
}
/* 兼容写法 */
requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        setTimeout(callback, 1000 / 60);
    };

cancelAnimationFrame = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    window.oCancelAnimationFrame;
/* 开始下雪 */
snowFall.prototype.start = function () {
    /* 创建画布 */
    snowCanvas.apply(this);
    /* 创建雪花形状 */
    createFlakes.apply(this);
    /* 画雪 */
    drawSnow.apply(this)
}
/* 创建画布 */
function snowCanvas() {
    /* 添加Dom结点 */
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var snowcanvas = document.createElement("canvas");
    staticx = true;
    snowcanvas.id = "snowfall";
    snowcanvas.width = window.innerWidth;
    snowcanvas.height = document.body.clientHeight;
    snowcanvas.setAttribute("style", "position:fixed; top: 0; left: 0; z-index: 1; pointer-events: none;");
    document.getElementsByTagName("body")[0].appendChild(snowcanvas);
    this.canvas = snowcanvas;
    this.ctx = snowcanvas.getContext("2d");
    /* 窗口大小改变的处理 */
    window.onresize = function () {
        snowcanvas.width = window.innerWidth;
        /* snowcanvas.height = window.innerHeight */
    }
}
/* 雪运动对象 */
function flakeMove(canvasWidth, canvasHeight, flakeSize, fallSpeed, choose) {
    this.x = Math.floor(Math.random() * canvasWidth); /* x坐标 */
    this.y = Math.floor(Math.random() * canvasHeight); /* y坐标 */
    this.size = Math.random() * flakeSize; /* 形状 */
    this.maxSize = flakeSize; /* 最大形状 */
    this.speed = Math.random() * 1 + fallSpeed; /* 坠落速度 */
    this.fallSpeed = fallSpeed; /* 坠落速度 */
    this.velY = this.speed; /* Y方向速度 */
    this.velX = 0; /* X方向速度 */
    this.stepSize = Math.random() / 30; /* 步长 */
    this.step = 0; /* 步数 */
    this.choose = choose
}
flakeMove.prototype.update = function () {
    var x = this.x,
        y = this.y;
    /* 左右摆动(余弦) */
    // this.velX *= 0.98;
    if (this.velY <= this.speed) {
        this.velY = this.speed
    }
    // this.velX += Math.cos(this.step += .05) * this.stepSize;

    this.y += this.velY;
    this.x += this.velX;
    /* 飞出边界的处理 */
    if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
        this.reset(canvas.width, canvas.height)
    }
};
/* 飞出边界-放置最顶端继续坠落 */
flakeMove.prototype.reset = function (width, height) {
    this.x = Math.floor(Math.random() * width);
    this.y = 0;
    this.size = Math.random() * this.maxSize;
    this.speed = Math.random() * 1 + this.fallSpeed;
    this.velY = this.speed;
    this.velX = 0;
};
// 渲染雪花-随机形状（此处可修改雪花颜色！！！）
flakeMove.prototype.render = function (ctx) {
    var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    var choose = this.choose
    switch(choose){
        case 0:
            snowFlake.addColorStop(0, "rgba(226, 225, 228, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(226, 225, 228, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(226, 225, 228, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 1:
            snowFlake.addColorStop(0, "rgba(205, 209, 211, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(205, 209, 211, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(205, 209, 211, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 2:
            snowFlake.addColorStop(0, "rgba(216, 227, 231, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(216, 227, 231, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(216, 227, 231, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 3:
            snowFlake.addColorStop(0, "rgba(192, 196, 195, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(192, 196, 195, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(192, 196, 195, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 4:
            snowFlake.addColorStop(0, "rgba(238, 247, 242, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(238, 247, 242, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(238, 247, 242, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 5:
            snowFlake.addColorStop(0, "rgba(255, 254, 248, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(255, 254, 248, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(255, 254, 248, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 6:
            snowFlake.addColorStop(0, "rgba(255, 254, 249, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(255, 254, 249, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(255, 254, 249, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 7:
            snowFlake.addColorStop(0, "rgba(249, 244, 220, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(249, 244, 220, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(249, 244, 220, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 8:
            snowFlake.addColorStop(0, "rgba(233, 221, 182, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(233, 221, 182, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(233, 221, 182, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 9:
            snowFlake.addColorStop(0, "rgba(241, 240, 237, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(241, 240, 237, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(241, 240, 237, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 10:
            snowFlake.addColorStop(0, "rgba(249, 241, 219, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(249, 241, 219, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(249, 241, 219, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 11:
            snowFlake.addColorStop(0, "rgba(247, 244, 237, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(247, 244, 237, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(247, 244, 237, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 12:
            snowFlake.addColorStop(0, "rgba(229, 211, 170, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(229, 211, 170, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(229, 211, 170, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 13:
            snowFlake.addColorStop(0, "rgba(242, 230, 206, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(242, 230, 206, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(242, 230, 206, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 14:
            snowFlake.addColorStop(0, "rgba(248, 244, 237, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(248, 244, 237, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(248, 244, 237, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 15:
            snowFlake.addColorStop(0, "rgba(251, 242, 227, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(251, 242, 227, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(251, 242, 227, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
        case 16:
            snowFlake.addColorStop(0, "rgba(251, 236, 222, 0.8)"); /* 此处是雪花颜色，默认是白色 */
            snowFlake.addColorStop(0.5, "rgba(251, 236, 222, 0.5)"); /* 若要改为其他颜色，请自行查 */
            snowFlake.addColorStop(1, "rgba(251, 236, 222, 0)"); /* 找16进制的RGB 颜色代码。 */
            break;
    }
    ctx.save();
    ctx.fillStyle = snowFlake;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
};
/* 创建雪花-定义形状 */
function createFlakes() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes = [],
        canvas = this.canvas;
    for (var i = 0; i < maxFlake; i++) {

        parseInt(Math.random() * 17, 10);
        var choose = Math.floor(Math.random() * 17);

        flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed, choose))
    }
}
/* 画雪 */
function drawSnow() {
    var maxFlake = this.maxFlake,
        flakes = this.flakes;
    ctx = this.ctx, canvas = this.canvas, that = this;
    /* 清空雪花 */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var e = 0; e < maxFlake; e++) {
        flakes[e].update();
        flakes[e].render(ctx);
    }
    /*  一帧一帧的画 */
    this.loop = requestAnimationFrame(function () {
        drawSnow.apply(that);
    });
}
/* 调用及控制方法 */
var snow = new snowFall({
    maxFlake: 60
});
snow.start();