class Spaceship
{
  constructor(name,crewMembers,phasers,shields)
  {
    this.name = name;
    this.crew = crewMembers;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = crewMembers.length > 0 ? false : true;
    this.phasersCharge = "uncharged";
    for(var i = 0; i < this.crew.length; i++)
    {
      this.crew[i].addShip(this);
    }
  }
}
