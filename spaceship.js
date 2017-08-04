class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    if(this.crew.length === 0) {
      this.docked = true;
    } else {
      this.crew.forEach(function(member) {
        member.currentShip = this;
      }, this)
      this.docked = false;
    }
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
  }


}
