class Vector2d {
  constructor (x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
  speedC(vector, c) {// неправильно
    this.x = (this.x + vector.x) / (1 + this.x * vector.x / (c*c));
    this.y = (this.y + vector.y) / (1 + this.y * vector.y / (c*c));
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }
  mult(num) {
    this.x *= num;
    this.y *= num;
  }
}
class Particle {
  constructor(posRange={ w:400, h:400 }, speed){

    this.deltaSpeed = new Vector2d();
    this.connections = [];
    this.connectionsLimit = 2; // ??
    this.flag = false; // ??
    this.initRandColor();
    this.initRandPos(posRange);
    this.initRandSpeed(speed);
  }
  initRandPos({ w, h }) {
    const x = Math.random()*(w - 20) + 10;
    const y = Math.random()*(h - 20) + 10;
    this.pos = new Vector2d(x, y);
  }
  initRandSpeed(speed = 0) {
    const vx = Math.random()*speed - speed/2;
    const vy = Math.random()*speed - speed/2;
    this.speed = new Vector2d(vx, vy);
  }
  initRandColor() {
    const r = Math.floor(Math.random()*205 + 50);
    const g = Math.floor(Math.random()*205 + 50);
    const b = Math.floor(Math.random()*205 + 50);
    this.color = 'rgb(' + r.toString(10) + ',' + g.toString(10) + ',' + b.toString(10) + ')';
  }
}

class Model {
  constructor (n) {
    this.G = 0.01;// грав постоянная
    this.collisionDistanse = 50; // дистанция оттталкивания
    //this.linkageDistance = 50; // дистанция связи частиц
    //this.linkageLimitDistance = 60;
    //this.linkageCount = 6;
    this.speedc = 1; // предельная скорость(скорость света)
    this.kz = 0.001; // коэф замедления среды
    this.kp = 0.001; // коэф поглощения удара
    this.initParticles(n);
  }
  initParticles(n) {
    this.particles = Array(n).fill(1).map(() => {
      return new Particle({ w: 600, h: 600 }, 0)
    });

  }
  addAtom() {
    this.particles.push(new Particle());
  }
  removeAtom() {
    this.particles.pop();
  }
  gravy() {
    const particles = this.particles;

    for ( let i = 0; i < particles.length; i += 1) { // вычисление ускорений и новых соединений
      const current = particles[i];
      //console.log(current.speed.x, current.speed.y);
      for (let j = i + 1; j < particles.length; j += 1) {
        const particle = particles[j];
        
        const rx = current.pos.x - particle.pos.x;
        const ry = current.pos.y - particle.pos.y;
        const rr = rx*rx + ry*ry + 0.001;
        const r = Math.sqrt(rr);
        
        let a, ax, ay;
        const mass = 100;
        if (r > this.collisionDistanse) {
          a = (mass * this.G) / (rr*r);
          ax = rx * a;
          ay = ry * a;
        }
        else {
          {// 1 вариант
            a = ((current.speed.x - particle.speed.x) * rx + (current.speed.y - particle.speed.y) * ry) / rr;
            if (a > 0) a = 0;// позволяет разойтись слипшимся частицам
          }
          // 2 вариант
          // a = -(this.collisionDistanse - r)/(2*r);
          a = a * (1 - this.kp);
          ax = rx * a;
          ay = ry * a;
        }
        
        const collision = new Vector2d(ax, ay);
        particle.deltaSpeed.add(collision);
        current.deltaSpeed.sub(collision);
      }
      current.speed.speedC(current.deltaSpeed, this.speedc);
      current.speed.mult(1-this.kz);
      current.pos.add(current.speed);
      current.deltaSpeed = new Vector2d();
    }
  }
}
class View {
  constructor (model) {
    this.model = model;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.radius = 25;
    this.initContext();
    this.initStats();
    this.initGUI();
  }
  initContext() {
    let draw = document.getElementById('draw');
    draw.width = window.innerWidth; // длина и ширина полотна
    draw.height = window.innerHeight;
    this.z = draw.getContext("2d"); // контекст
    this.z.lineWidth = 1;
  }
  initStats() {
    this.stats = new Stats();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.getElementById("Stats-output").append(this.stats.domElement);
  }
  initGUI() {
    const gui = new dat.GUI();
    const physicsModel = gui.addFolder('physicsModel');
    physicsModel.add(this.model, 'G', 0, 0.1, 0.01);
    physicsModel.add(this.model, 'collisionDistanse', 1, 100, 1);
    physicsModel.add(this.model, 'speedc', 0, 5, 0.1);
    physicsModel.add(this.model, 'kz', 0, 0.1, 0.001);
    physicsModel.add(this.model, 'kp', 0, 0.1, 0.001);
    physicsModel.add(this.model, 'addAtom');
    physicsModel.add(this.model, 'removeAtom');
    
    const viewModel = gui.addFolder('viewModel');
    viewModel.add(this, 'radius', 5, 50, 5);
    
    console.dir(gui);
  }
  printModel(model) {
    const { z } = this;
    model.particles.forEach((star) => {
      z.beginPath();
      z.arc(star.pos.x, star.pos.y, this.radius, 0, Math.PI * 2, false);
      z.fillStyle = star.color;
      z.fill();
    });
    model.particles.forEach((star) => {
      z.beginPath();
      z.moveTo(star.pos.x, star.pos.y);
      z.lineTo(star.pos.x + star.speed.x*50, star.pos.y + star.speed.y*50);
      z.strokeStyle = 'white';
      z.stroke();
      z.fill();
      star.connections.forEach((connection) => {
        z.beginPath();
        z.moveTo(star.pos.x, star.pos.y);
        z.lineTo(connection.pos.x, connection.pos.y);
        z.strokeStyle = 'red';
        z.stroke();
        z.fill();
      });
    });
  }
  fillBack() {
    this.z.beginPath();
    this.z.fillStyle = this.backgroundColor;
    this.z.fillRect(0, 0, this.W, this.H);
  }
  print(model) {
    this.stats.update();
    this.fillBack();
    this.printModel(model);
  }
}
class Controller {
  constructor() {
    this.isRunning = false;
    this.model = new Model(10);
    this.view = new View(this.model);
    console.dir(this.model);
  }
  step() {
    this.view.print(this.model);
    this.model.gravy();
  }
  anim() {
    const fps = 60;
    const loop = () => {
      setTimeout(() => {
        requestAnimationFrame(loop);// не блокирует поток!
        this.step();
      }, 1000 / fps);
    };
    loop();
  }
}
window.controller = new Controller();
window.controller.anim();

