class Spaceship {
  constructor(name, crewArray, phasers, shields) {
    this.name = name;
    this.crew = crewArray;
    this.phasers = phasers;
    this.phasersCharge = "uncharged";
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    if (crewArray.length !== 0) {
      for (var i = 0; i < crewArray.length; i++) {
        crewArray[i].currentShip = this;
      }
      this.docked = false;
    } else {
      this.docked = true;
    }
  }
}
