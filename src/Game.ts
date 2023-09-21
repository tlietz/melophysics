import * as RAPIER from "@dimforge/rapier2d";
import type * as PIXI from "pixi.js";

export const handlePress = (graphic: PIXI.Graphics, event: PIXI.InteractionEvent, rigidBody: RAPIER.RigidBody) => {
  console.log(graphic.position)
  console.log(event.data)
  console.log(rigidBody)
  Math.round(Math.random())
  rigidBody.applyImpulse({ x: 0, y: 1000000 * (Math.random() > 0.5 ? 1 : -1) }, true)
}
