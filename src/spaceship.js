class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.phasers = phasers
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.crew = crew;
    this.docked = this.crew.length === 0;
    this.phasersCharge = 'uncharged'

    this.crew.forEach(member => member.currentShip = this)
  }
}
