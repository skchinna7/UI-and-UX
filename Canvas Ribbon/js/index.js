// canvas settings
var viewWidth = 512,
    viewHeight = 512,
    centerX = viewWidth * 0.5,
    centerY = viewHeight * 0.5,
    drawingCanvas = document.getElementById("drawing_canvas"),
    ctx,
    timeStep = (1/30),
    time = 0;

var ribbon,
    frontGradient,
    backGradient;

function initDrawingCanvas() {
    drawingCanvas.width = viewWidth;
    drawingCanvas.height = viewHeight;
    ctx = drawingCanvas.getContext('2d');

    ctx.translate(0.5, 0.5);

    frontGradient = ctx.createLinearGradient(0, 0, viewWidth, 0);
    frontGradient.addColorStop(0.0, '#999');
    frontGradient.addColorStop(0.5, '#fff');
    frontGradient.addColorStop(1.0, '#999');

    backGradient = ctx.createLinearGradient(0, 0, viewWidth, 0);
    backGradient.addColorStop(0.0, '#555');
    backGradient.addColorStop(0.5, '#777');
    backGradient.addColorStop(1.0, '#555');
}

function initCurves() {

    var curves = [],
        rotations = 12,
        dy = (viewHeight + 84) / rotations;

    for (var i = 0; i <= rotations; i++) {
        var c,
            startX = centerX,
            startY = viewHeight - dy * i + 84,
            controlX = (i % 2) * viewWidth,
            controlY = startY;

        c = new Curve(
            new Point(startX, startY),
            new Point(controlX, controlY),
            new Point(controlX, controlY - dy),
            new Point(startX, startY - dy)
        );

        curves.push(c);
    }

    ribbon = new BezierRibbon(curves, 42);
}

function update() {
//    ribbon.updateTime(timeStep);
    ribbon.currentTime = Math.min(time, ribbon.totalTime);
    ribbon.startOffset = Math.max(time - 1.5, 0);

    time %= (ribbon.totalTime + 1.5);

//    console.log(time % (ribbon.totalTime));
//    ribbon.currentTime = Math.min(time, ribbon.totalTime);
//    ribbon.startOffset = Math.max(ribbon.currentTime - 3, 0);
}

function draw() {
//    ctx.fillStyle = '#000';
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    ribbon.draw();
}

window.onload = function() {
    initDrawingCanvas();
    initCurves();
    requestAnimationFrame(loop);
};

function loop() {
    update();
    draw();
    time += timeStep;
    requestAnimationFrame(loop);
}

////////////////////////////
// class and utils
////////////////////////////
BezierRibbon = function(curves, width) {
    this.curves = curves;
    this.width = width;
    this.halfWidth = this.width * 0.5;
    this.totalTime = curves.length; // 1.0 per curve
    this.currentTime = 0;
    this.startOffset = 0;

    // point cache
    this.tp0 = new Point();
    this.tp1 = new Point();
    this.tp2 = new Point();
    this.tp3 = new Point();
};
BezierRibbon.prototype = {
    draw:function() {
        // debug draw
//        this.curves.forEach(function(c) {
//            c.draw();
//        });

        var step = 1e-2,
            index = 0,
            dx,
            curve;

        for (var t = this.startOffset; t < this.currentTime; t += step) {
            index = t | 0;
            curve = this.curves[index];
            curve.interpolate(t - index, this.tp0);
            curve.interpolate(t + step - index, this.tp1);

            this.tp0.translate(0, -this.halfWidth);
            this.tp1.translate(0, -this.halfWidth);
            this.tp2.copy(this.tp1).translate(0, this.width);
            this.tp3.copy(this.tp0).translate(0, this.width);

            dx = this.tp1.x - this.tp0.x;

            ctx.strokeStyle = ctx.fillStyle = dx >= 0 ? frontGradient : backGradient;
            ctx.globalCompositeOperation = dx >= 0 ? 'source-over' : 'destination-over';
            ctx.lineWidth = 1.5;

            ctx.beginPath();
            ctx.moveTo(this.tp0.x, this.tp0.y);
            ctx.lineTo(this.tp1.x, this.tp1.y);
            ctx.lineTo(this.tp2.x, this.tp2.y);
            ctx.lineTo(this.tp3.x, this.tp3.y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
};

Curve = function(p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
};
Curve.prototype = {
    interpolate:function(t, p) {
        p = p || new Point();

        var nt = (1 - t);

        p.x = nt * nt * nt * this.p0.x + 3 * nt * nt * t * this.p1.x + 3 * nt * t * t * this.p2.x + t * t * t * this.p3.x;
        p.y = nt * nt * nt * this.p0.y + 3 * nt * nt * t * this.p1.y + 3 * nt * t * t * this.p2.y + t * t * t * this.p3.y;

        return p;
    },
    draw:function() {
        ctx.strokeStyle = "#f00";
        ctx.beginPath();
        ctx.moveTo(this.p0.x, this.p0.y);
        ctx.bezierCurveTo(this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y);
        ctx.stroke();
    },
    clone:function(offsetX, offsetY) {
        offsetX = offsetX || 0;
        offsetY = offsetY || 0;

        return new Curve(
            this.p0.clone(offsetX, offsetY),
            this.p1.clone(offsetX, offsetY),
            this.p2.clone(offsetX, offsetY),
            this.p3.clone(offsetX, offsetY)
        );
    }
};

Point = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};
Point.prototype = {
    clone:function(offsetX, offsetY) {
        offsetX = offsetX || 0;
        offsetY = offsetY || 0;

        return new Point(this.x + offsetX, this.y + offsetY);
    },
    copy:function(p) {
        this.x = p.x;
        this.y = p.y;

        return this;
    },
    translate:function(dx, dy) {
        dx = dx || 0;
        dy = dy || 0;

        this.x += dx;
        this.y += dy;

        return this;
    }
};