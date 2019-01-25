class Spaceship {
  constructor (name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false
    this.docked = this.crew.length === 0 ? true : false;
    this.warpDrive = "Disengaged"
    this.phasersCharge = "Uncharged"

    if (!this.docked) {this.crew.map( (c) => {c.currentShip = this} )}
  }

}
