class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip  = 'Looking for a Rig';
  }




  engageWarpDrive(){
    if(this.position != 'Pilot'){
      return 'had no effect';
    } else if (this.currentShip == 'Looking for a Rig'){
      return 'had no effect';
    }else {
      this.currentShip.warpDrive = 'engaged!'
    }
  }


  chargePhasers(){
    if(this.position != 'Gunner'){
      return 'had no effect';
    } else if (this.currentShip == 'Looking for a Rig'){
      return 'had no effect';
    }else {
      this.currentShip.phasersCharge = 'charged!';
    }
  }

  setsInvisibility(){
    if(this.position != 'Defender'){
      return 'had no effect';
    } else if (this.currentShip == 'Looking for a Rig'){
      return 'had no effect';
    }else {
      this.currentShip.cloaked = true;
    }
  }
}
