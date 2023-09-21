import * as RAPIER from "@dimforge/rapier2d";
import type * as PIXI from "pixi.js";

export const handlePress = (graphic: PIXI.Graphics, event: PIXI.InteractionEvent, rigidBody: RAPIER.RigidBody) => {
  console.log(graphic.position)
  console.log(event.data)
  console.log(rigidBody)
  rigidBody.applyImpulse({ x: 0, y: -2000000 }, true)
}
