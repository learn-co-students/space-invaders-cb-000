class CrewMember{

  constructor(position){
    this.position = position;
    this.ship = "Looking for a Rig";
  };

  engageWarpDrive(){
    if (this.ship === "Looking for a Rig"){
      return "had no effect";
    }
    else {
      "Here we go!";
    }
  };

  setsInvisibility(){
    if (this.ship !== "Looking for a Rig" && this.position === "Defender" {
      this.ship.cloaked === true;
    }
    else {
      this.ship.cloaked === false;
    }
  };

  chargePhasers(){
    if (this.ship === "Looking for a Rig"){
      return "had no effect";
    }
    else {
      "Here we go!";
    }
  };
};
