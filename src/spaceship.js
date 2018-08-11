class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    crew.length ? (this.docked = false) : (this.docked = true);
    this.notifyCrew();
  }

  notifyCrew() {
    this.crew.forEach(crewMember => (crewMember.currentShip = this));
  }
}
// class Spaceship {
//
//   constructor(name, crewArray, phasers, shields) {
//     this.name = name
//     this.crewArray = crewArray
//
//     this.phasers = phasers
//     this.shields = shields
//     this.cloaked = false
//     this.warpDrive = 'disengaged'
//     if (crewArray.length === 0) {
//       this.docked = true
//     } else {
//       this.docked = false
//     }
//     this.phasersCharge = 'uncharged'
//     this.notifyCrew();
//
//
//   }
//
//   notifyCrew() {
//   this.crewArray.forEach(crewMember => (crewMember.currentShip = this));
// }
//
//
//
//
//
//
// }
