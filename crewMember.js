class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentSpaceship = 'Looking for a Rig';
  }

  isAssignedShip() { return !(typeof this.currentSpaceship === 'string')}
  chargePhasers() { return (this.isAssignedShip() && this.position === 'Gunner') ? this.currentSpaceship.phasersCharge = 'charged' : 'had no effect';}
  engageWarpDrive() { return (this.isAssignedShip() && this.position === 'Pilot') ? this.currentSpaceship.warpDrive = 'engaged' : 'had no effect';}
  setsInvisibility() { return (this.isAssignedShip() && this.position === 'Defender') ? this.currentSpaceship.cloaked = true : 'had no effect';}
}
