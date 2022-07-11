const carCanvas = document.getElementById('carCanvas')
carCanvas.width = 300;

const carCtx = carCanvas.getContext('2d');
const road = new Road(carCanvas.width/2, carCanvas.width*0.95);
const car = new Car(road.getLaneCenter(1),100,30,50,"AI");

const traffic = [
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY", 2)
];

// car.draw(ctx);

animate();

function animate(){
    for (let i=0; i < traffic.length; i++){
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);

    carCanvas.height = window.innerHeight;

    carCtx.save();
    carCtx.translate(0,-car.y+carCanvas.height*0.7);

    road.draw(carCtx);
    for (let i = 0; i < traffic.length; i++) {
        traffic[i].draw(carCtx, 'red');
    }
    car.draw(carCtx, 'blue');

    carCtx.restore();
    requestAnimationFrame(animate);
}