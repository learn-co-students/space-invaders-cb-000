class Spaceship {
  constructor(name, crew = [], phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.addMembers();
    this.phasers = phasers
    this.phasersCharge = "uncharged";
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    if (this.crew < 1) {
      this.docked = true;
    } else {
      this.docked = false;
    }
  }

  addMembers() {
    for (var i = 0; i < this.crew.length; i++) {
      this.crew[i].currentShip = this;
    }
  }


}
