class Spaceship{
  constructor(name, crew){
    this.name = name;
    this.phasers = 5;
    this.shields = 4;
    this.cloaked = false;
    this.warpDrive = "disengaged";

    if(crew.length > 0){
      this.docked = false;
    }else{
      this.docked = true;
    }

    this.phasersCharge = "uncharged";

    //set ship for each crewmember
    for(var i=0, k=crew.length; i < k; i++){
      crew[i].currentShip = this;
    }
  }


}
