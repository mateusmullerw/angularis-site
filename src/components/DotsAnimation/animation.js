export default function animation(canvas, height) {
  var can_w = parseInt(canvas.getAttribute("width")),
    can_h = height,
    ctx = canvas.getContext("2d");

  var ball_color = {
      r: 277,
      g: 99,
      b: 91,
    },
    R = 2,
    balls = [],
    alpha_f = 0.03,
    // Line
    link_line_width = 0.7,
    dis_limit = 250,
    mouse_ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 1,
      type: "mouse",
    };
  balls.push(mouse_ball);
  // Random speed
  function getRandomSpeed(pos) {
    var min = -0.25,
      max = 0.25;
    switch (pos) {
      case "top":
        return [randomNumFrom(min, max), randomNumFrom(min, max)];
      case "right":
        return [randomNumFrom(min, max), randomNumFrom(min, max)];
      case "bottom":
        return [randomNumFrom(min, max), randomNumFrom(min, max)];
      case "left":
        return [randomNumFrom(min, max), randomNumFrom(min, max)];
      default:
        return;
    }
  }
  function randomArrayItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function randomNumFrom(min, max) {
    return Math.random() * (max - min) + min;
  }
  // Random Ball
  function getRandomBall() {
    var pos = randomArrayItem(["top", "right", "bottom", "left"]);
    switch (pos) {
      case "top":
        return {
          x: randomSidePos(can_w),
          y: -R,
          vx: getRandomSpeed("top")[0],
          vy: getRandomSpeed("top")[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case "right":
        return {
          x: can_w + R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed("right")[0],
          vy: getRandomSpeed("right")[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case "bottom":
        return {
          x: randomSidePos(can_w),
          y: can_h + R,
          vx: getRandomSpeed("bottom")[0],
          vy: getRandomSpeed("bottom")[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      case "left":
        return {
          x: -R,
          y: randomSidePos(can_h),
          vx: getRandomSpeed("left")[0],
          vy: getRandomSpeed("left")[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10),
        };
      default:
        break;
    }
  }
  function randomSidePos(length) {
    return Math.ceil(Math.random() * length);
  }

  // Draw Ball
  function renderBalls() {
    Array.prototype.forEach.call(balls, function (b) {
      if (!b.hasOwnProperty("type")) {
        ctx.fillStyle =
          "rgba(" +
          ball_color.r +
          "," +
          ball_color.g +
          "," +
          ball_color.b +
          "," +
          b.alpha +
          ")";
        ctx.beginPath();
        ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
      }
    });
  }

  // Update balls
  function updateBalls() {
    var new_balls = [];
    Array.prototype.forEach.call(balls, function (b) {
      b.x += b.vx;
      b.y += b.vy;

      if (b.x > -50 && b.x < can_w + 50 && b.y > -50 && b.y < can_h + 50) {
        new_balls.push(b);
      }

      // alpha change
      b.phase += alpha_f;
      b.alpha = Math.abs(Math.cos(b.phase));
    });

    balls = new_balls.slice(0);
  }

  // loop alpha

  // Draw lines
  function renderLines() {
    var fraction, alpha;
    for (var i = 0; i < balls.length; i++) {
      for (var j = i + 1; j < balls.length; j++) {
        fraction = getDisOf(balls[i], balls[j]) / dis_limit;

        if (fraction < 1) {
          alpha = (1 - fraction).toString();

          ctx.strokeStyle = "rgba(190,190,190," + alpha + ")";
          ctx.lineWidth = link_line_width;

          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(balls[j].x, balls[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  // calculate distance between two points
  function getDisOf(b1, b2) {
    var delta_x = Math.abs(b1.x - b2.x),
      delta_y = Math.abs(b1.y - b2.y);

    return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
  }

  // add balls if there a little balls
  function addBallIfy() {
    if (balls.length < 20) {
      balls.push(getRandomBall());
    }
  }

  // Render
  function render() {
    ctx.clearRect(0, 0, can_w, can_h);

    renderBalls();

    renderLines();

    updateBalls();

    addBallIfy();

    window.requestAnimationFrame(render);
  }

  // Init Balls
  function initBalls(num) {
    for (var i = 1; i <= num; i++) {
      balls.push({
        x: randomSidePos(can_w),
        y: randomSidePos(can_h),
        vx: getRandomSpeed("top")[0],
        vy: getRandomSpeed("top")[1],
        r: R,
        alpha: 1,
        phase: randomNumFrom(0, 10),
      });
    }
  }
  // Init Canvas
  function initCanvas() {
    canvas.setAttribute("width", window.innerWidth);
    canvas.setAttribute("height", height);

    can_w = parseInt(canvas.getAttribute("width"));
    can_h = parseInt(height);
  }
  window.addEventListener("resize", function (e) {
    initCanvas();
  });

  function goMovie() {
    initCanvas();
    initBalls(50);
    window.requestAnimationFrame(render);
  }
  goMovie();
}
