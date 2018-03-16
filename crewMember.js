class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentSpaceship = 'Looking for a Rig';
  }

  isAssignedShip() { return !(typeof this.currentSpaceship === 'string')}
  engageWarpDrive() { return (this.isAssignedShip()) ? this.currentSpaceship.warpDrive = 'engaged' : 'had no effect';}
  setsInvisibility() { return (this.isAssignedShip()) ? this.currentSpaceship.cloaked = true : 'had no effect';}
  chargePhasers() { return (this.isAssignedShip()) ? this.currentSpaceship.phasersCharge = 'charged' : 'had no effect';}
}
