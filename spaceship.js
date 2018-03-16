//inactive if created without crew
class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.docked = !(crew.length > 0)
    this.phasersCharge = 'uncharged';
    this.warpDrive = 'disengaged';
    this.cloaked = false;
    this.assignShipToCrew()
  }

  assignShipToCrew() {
    if (!this.docked) {
      this.crew.forEach((crewMember) => {
        crewMember.currentShip = this;
      });
    }
  }

}
