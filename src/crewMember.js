class CrewMember {
  constructor (position) {
    this.position = position;
    this.currentShip = "Looking for a Rig"
  }

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position.match(/pilot/i)) {
      this.currentShip.warpDrive = "engaged";
    }
console.log(this.currentShip.warpDrive)
  }

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position.match(/defender/i)) {
      this.currentShip.cloaked = true;
    }
console.log(this.currentShip.cloaked)
  }

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    } else if (this.position.match(/gunner/i)) {
      this.currentShip.phasersCharge = "charged";
    }
console.log(this.currentShip.phasersCharge)
  }

}
