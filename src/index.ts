import * as RAPIER from "@dimforge/rapier2d";
import { Graphics } from "./Graphics";

let graphics = new Graphics();

//TODO: create a `piece` object, and have it fed into the graphics rener function so that graphics knows which balls to animate and make interactive

import('@dimforge/rapier2d').then(RAPIER => {
  // Use the RAPIER module here.
  let gravity = { x: 0, y: 0 };
  let world = new RAPIER.World(gravity);


  // Create the ground
  let groundRigidBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -200));
  let groundColliderDesc = RAPIER.ColliderDesc.cuboid(1000.0, 10);
  let _ = world.createCollider(groundColliderDesc, groundRigidBody);

  // Create a dynamic rigid-body.
  let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
    .setTranslation(0, 0)
    .setLinearDamping(0.5);
  let rigidBody1 = world.createRigidBody(rigidBodyDesc);

  let colliderDesc = RAPIER.ColliderDesc.ball(50);
  world.createCollider(colliderDesc, rigidBody1);

  rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
    .setTranslation(50, 150)
    .setLinearDamping(0.5);
  let rigidBody2 = world.createRigidBody(rigidBodyDesc);
  colliderDesc = RAPIER.ColliderDesc.ball(50);
  world.createCollider(colliderDesc, rigidBody2);

  console.log(rigidBody1)
  let pieceIdsToPiece = new Map<number, RAPIER.RigidBody>(
    [
      [rigidBody1.handle, rigidBody1],
      [rigidBody2.handle, rigidBody2]
    ]
  );
  world.forEachCollider((coll) => {
    graphics.addCollider(RAPIER, world, coll);
  });

  graphics.lookAt({ target: { x: 0.0, y: 0.0 }, zoom: 1.0 })

  // Game loop. Replace by your own game loop system.
  let gameLoop = () => {
    // Step the simulation forward.  
    world.step();

    graphics.render(world, false)
    // var mousePosition = graphics.renderer.

    requestAnimationFrame(() => gameLoop());
  };

  gameLoop();
})

