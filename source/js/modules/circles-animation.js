function circlesAnimation() {
  let randomX = random(0, document.documentElement.clientWidth);
  let randomY = random(0, document.documentElement.clientHeight / 10)
  let randomX2 = random(0, document.documentElement.clientWidth / 5);
  let randomY2 = random(0, document.documentElement.clientWidth / 10)
  let randomDelay = random(0, 1);
  let randomTime = random(3, 6);
  let randomTime2 = random(5, 10);
  let randomAngle = random(8, 12);

  gsap.set(circle1, {
    x: randomX(-1),
    y: randomY(-1),
    rotation: randomAngle(-1)
  });

  moveX(circle1, 1);
  moveY(circle1, -1);
  rotate(circle1, 1);

  gsap.set(circle2, {
    x: randomX2(-1),
    y: randomY2(-1),
    rotation: randomAngle(-1)
  });

  moveX2(circle2, 1);
  moveY2(circle2, -1);
  rotate(circle2, 1);

  gsap.set(circle3, {
    x: randomX(-1),
    y: randomY(-1),
    rotation: randomAngle(-1)
  });

  moveX(circle3, 1);
  moveY(circle3, -1);
  rotate(circle3, 1);

  gsap.set(circle4, {
    x: randomX(-1),
    y: randomY(-1),
    rotation: randomAngle(-1)
  });

  moveX(circle4, 1);
  moveY(circle4, -1);
  rotate(circle4, 1);

  gsap.set(circle5, {
    x: randomX2(-1),
    y: randomY2(-1),
    rotation: randomAngle(-1)
  });

  moveX2(circle5, 1);
  moveY2(circle5, -1);
  rotate(circle5, 1);

  function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
      rotation: randomAngle(direction),
      // delay: randomDelay(),
      ease: Sine.easeInOut,
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveX(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX(direction),
      ease: Sine.easeInOut,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveY(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY(direction),
      ease: Sine.easeInOut,
      onComplete: moveY,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveX2(target, direction) {
    gsap.to(target, randomTime(), {
      x: randomX2(direction),
      ease: Sine.easeInOut,
      onComplete: moveX2,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveY2(target, direction) {
    gsap.to(target, randomTime(), {
      y: randomY2(direction),
      ease: Sine.easeInOut,
      onComplete: moveY2,
      onCompleteParams: [target, direction * -1]
    });
  }

  function random(min, max) {
    let delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  }
}

export { circlesAnimation }