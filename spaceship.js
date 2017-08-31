class Spaceship {
  constructor(name,crew,phasers,shields){
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.phasersCharge = 'uncharged';
    this.warpDrive = 'disengaged';
    this.docked = true;

    for (let member of this.crew){
      member.currentShip = this;
      this.docked = false;
    }
  }

}
