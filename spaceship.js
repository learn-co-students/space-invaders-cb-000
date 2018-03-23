class Spaceship {

  constructor(name, crew , phasers, shields){
    this.name = name ;
    this.crew = crew ;
    this.phasers = phasers ;
    this.shields = shields ;
    this.cloaked = false
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'

    if(crew.length != 0){
      for(let i = 0; i < crew.length; i++){
        crew[i].currentShip = this;
      }
      this.docked = false
    }else{
      this.docked = true
    }

  }


}
