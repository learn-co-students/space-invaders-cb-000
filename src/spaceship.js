class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false
    this.docked = true
    this.warpDrive = "Disengaged"
    this.phasersCharge = "Uncharged"
  }
  engageWarpDrive() {if (this.currentShip.match(/Looking for a Rig/i)) {return "had no effect"} else {}}
  setsInvisibility() {if (this.currentShip.match(/Looking for a Rig/i)) {return "had no effect"} else {}}

}
