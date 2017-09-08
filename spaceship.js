
class Spaceship {
  constructor( name, crew, phasers, shields ) {
    this.name = name;
    this.crew = crew;
      if ( crew ) {
        crew.forEach( member => {member.currentShip = this});
      }
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = (crew && crew.length) ? false : true;
    this.phasersCharge = "uncharged";
  }

}
