
class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  engageWarpDrive() {
    if (this.currentShip !== "Looking for a Rig") {
    }
    else {
      return "had no effect";
    }
  }

  setsInvisibility() {
    if (this.currentShip !== "Looking for a Rig" && this.position === "Defender") {
      this.currentShip.cloaked = true;
    }
    return "had no effect";
  }

  chargePhasers() {
    if (this.currentShip !== "Looking for Rig") {
    }
    return "had no effect";
  }
}
