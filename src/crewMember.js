class CrewMember {
  constructor (position) {
    this.position = position;
    this.currentShip = "Looking for a Rig."
  }
  engageWarpDrive() {if (this.currentShip.match(/Looking for a Rig/i)) {return "had no effect"} else {}}
  setsInvisibility() {if (this.currentShip.match(/Looking for a Rig/i)) {return "had no effect"} else {}}
  chargePhasers() {if (this.currentShip.match(/Looking for a Rig/i)) {return "had no effect"} else {}}
}
