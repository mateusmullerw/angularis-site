interface IBall {
  position: {
    x: number;
    y: number;
  };
  speed: {
    x: number;
    y: number;
  };
  alpha: number;
  phase: number;
}

let ballArray: Array<IBall> = [];

const ball = {
  color: {
    r: 277,
    g: 99,
    b: 91,
  },
  radius: 2,
  alphaSpeed: 0.03,
  speed: {
    min: -0.25,
    max: 0.25,
  },
};
const line = {
  color: {
    r: 190,
    g: 190,
    b: 190,
  },
  maxDistance: 250,
  width: 0.7,
};

let mouseBall = {
  position: {
    x: 0,
    y: 0,
  },
  speed: {
    x: 0,
    y: 0,
  },
  alpha: 0,
  phase: 0,
};

const getRandomSpeed = () => {
  return {
    x: randomNumFrom(ball.speed.min, ball.speed.max),
    y: randomNumFrom(ball.speed.min, ball.speed.max),
  };
};

const randomNumFrom = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getRandomPosition = (width: number, height: number) => {
  return {
    x: Math.ceil(Math.random() * width),
    y: Math.ceil(Math.random() * height),
  };
};

const renderBalls = (ctx: CanvasRenderingContext2D) => {
  ballArray.forEach((node) => {
    ctx.fillStyle = `rgba(${ball.color.r},${ball.color.g},${ball.color.b},${node.alpha})`;
    ctx.beginPath();
    ctx.arc(
      node.position.x,
      node.position.y,
      ball.radius,
      0,
      Math.PI * 2,
      true
    );
    ctx.closePath();
    ctx.fill();
  });
};

const updateBalls = (width: number, height: number) => {
  let updatedArray: Array<IBall> = [];
  let margin = 50;
  ballArray.forEach((node) => {
    node.position.x += node.speed.x;
    node.position.y += node.speed.y;
    node.phase += ball.alphaSpeed;
    node.alpha = Math.abs(Math.cos(node.phase));

    if (node.position.x < -margin || node.position.x > width + margin) {
      node.speed.x = -node.speed.x;
    }
    if (node.position.y < -margin || node.position.y > height + margin) {
      node.speed.y = -node.speed.y;
    }
    updatedArray.push(node);
  });
  ballArray = updatedArray;
};

const renderLines = (ctx: CanvasRenderingContext2D) => {
  let fraction, alpha;
  for (let i = 0; i < ballArray.length; i++) {
    for (let j = i + 1; j < ballArray.length; j++) {
      fraction = getDisOf(ballArray[i], ballArray[j]) / line.maxDistance;

      if (fraction < 1) {
        alpha = (1 - fraction).toString();

        ctx.strokeStyle = `rgba(${line.color.r},${line.color.g},${line.color.b},${alpha})`;
        ctx.lineWidth = line.width;

        ctx.beginPath();
        ctx.moveTo(ballArray[i].position.x, ballArray[i].position.y);
        ctx.lineTo(ballArray[j].position.x, ballArray[j].position.y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
  for (let i = 0; i < ballArray.length; i++) {
    fraction = getDisOf(ballArray[i], mouseBall) / line.maxDistance;

    if (fraction < 1) {
      alpha = (1 - fraction).toString();

      ctx.strokeStyle = `rgba(${line.color.r},${line.color.g},${line.color.b},${alpha})`;
      ctx.lineWidth = line.width;
      ctx.beginPath();
      ctx.moveTo(ballArray[i].position.x, ballArray[i].position.y);
      ctx.lineTo(mouseBall.position.x, mouseBall.position.y);
      ctx.stroke();
      ctx.closePath();
    }
  }
};

const getDisOf = (node1: IBall, node2: IBall) => {
  let delta_x = Math.abs(node1.position.x - node2.position.x);
  let delta_y = Math.abs(node1.position.y - node2.position.y);

  return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
};

const initBalls = (num: number, width: number, height: number) => {
  for (let i = 1; i <= num; i++) {
    ballArray.push({
      position: getRandomPosition(width, height),
      speed: getRandomSpeed(),
      alpha: 1,
      phase: randomNumFrom(0, 10),
    });
  }
};

export default function Animation(canvas: HTMLCanvasElement, height: number) {
  let width = 0;
  let stop = false;

  const resetCanvas = () => {
    width = window.innerWidth;
    canvas.setAttribute("width", `${width}px`);
    canvas.setAttribute("height", `${height}px`);

    ballArray = [];
    initBalls(50, width, height);
  };

  window.addEventListener("resize", () => {
    if (width < 850) {
      stop = true;
    } else {
      resetCanvas();
    }
  });
  resetCanvas();

  let offsetTop = 0;
  let tickingMouse = false;
  window.addEventListener("mousemove", (e) => {
    if (!tickingMouse) {
      window.requestAnimationFrame(() => {
        mouseBall.position.x = e.clientX;
        mouseBall.position.y = e.clientY - offsetTop;

        tickingMouse = false;
      });

      tickingMouse = true;
    }
  });

  let lastScrollPosition = window.scrollY;
  let tickingScroll = false;
  window.addEventListener("scroll", (e) => {
    if (!tickingScroll) {
      window.requestAnimationFrame(() => {
        offsetTop = canvas.parentElement!.getBoundingClientRect().top;

        mouseBall.position.y -= lastScrollPosition;
        lastScrollPosition = window.scrollY;
        mouseBall.position.y += lastScrollPosition;

        tickingScroll = false;
      });

      tickingScroll = true;
    }
  });

  let ctx = canvas.getContext("2d");

  const render = () => {
    if (!stop) {
      ctx!.clearRect(0, 0, width, height);
      renderLines(ctx!);
      renderBalls(ctx!);
      updateBalls(width, height);

      window.requestAnimationFrame(render);
    }
    return;
  };
  window.requestAnimationFrame(render);
  return;
}
