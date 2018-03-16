class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a Rig';
  }

  isAssignedShip() { return !(typeof this.currentShip === 'string')}
  chargePhasers() { return (this.isAssignedShip() && this.position === 'Gunner') ? this.currentShip.phasersCharge = 'charged' : 'had no effect';}
  engageWarpDrive() { return (this.isAssignedShip() && this.position === 'Pilot') ? this.currentShip.warpDrive = 'engaged' : 'had no effect';}
  setsInvisibility() { return (this.isAssignedShip() && this.position === 'Defender') ? this.currentShip.cloaked = true : 'had no effect';}
}
