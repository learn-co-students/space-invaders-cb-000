class Spaceship {
  constructor(name, crewMembers, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = 'uncharged') {
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = (crewMembers.length === 0) ? true : false
    this.phasersCharge = phasersCharge
    for(let i = 0; i < this.crewMembers.length; i++) {
      this.crewMembers[i].currentShip = this
    }
  }
}
