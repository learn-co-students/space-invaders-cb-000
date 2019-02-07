//spaceship = new Spaceship('The Krestel', [], 5, 4);
//expect(spaceship.name).to.eq('The Krestel');
//expect(spaceship.phasers).to.eq(5);
//expect(spaceship.shields).to.eq(4);
//expect(spaceship.cloaked).to.eq(false);
//expect(spaceship.warpDrive).to.match(/disengaged/i);
//expect(spaceship.docked).to.eq(true);
//expect(spaceship.phasersCharge).to.match(/uncharged/i);


//aluminumFalcon = new Spaceship('Millenium Falcon', [pilot, defender, gunner], 5, 4);
//expect(aluminumFalcon.docked).to.eq(false);k
//expect(aluminumFalcon.phasersCharge).to.match(/uncharged/i);
//gunner.chargePhasers();
//  it("should set the spaceship's warp drive to 'engaged' when the pilot uses engageWarpDrive()", () => {
//    defender.engageWarpDrive();
//    expect(aluminumFalcon.warpDrive).to.match(/disengaged/i);
 //   pilot.engageWarpDrive();
 //   expect(aluminumFalcon.warpDrive).to.match(/engaged/i);
 // });
 //it('should cloak the ship when a defender uses setsInvisibility()', () => {
 //   gunner.setsInvisibility();
 //   expect(aluminumFalcon.cloaked).to.eq(false);

 //   defender.setsInvisibility();
 //   expect(aluminumFalcon.cloaked).to.eq(true);
 // });

//expect(aluminumFalcon.phasersCharge).to.match(/charged/i);

class Spaceship {
    constructor(name, crewArr, phasers, shields){
        //new Spaceship('Millenium Falcon', [pilot, defender, gunner], 5, 4)
        //process crew array
        this.name = name;
        this.crew = crewArr;
        this.phasers = phasers;
        this.shields = shields;
        //should have its cloaking set to false by default
        this.cloaked = false;
        //should have its warp drive set to 'disengaged' by default
        this.warpDrive = "disengaged";
        //should be docked if it has no crew
        if (this.crew.length === 0) {
            this.docked = true;
        } else {
            this.docked = false; 
        }
        //should have its 'phasers' charge set to 'uncharged' by default
        this.phasersCharge = "uncharged";
        //assign the crewmembers this ship object
        for (let i=0; i < this.crew.length; i++){
            this.crew[i].currentShip = this;
        }

    }
    setsInvisibility() {
        this.cloaked = true;
        return this.cloaked;
    }

    engageWarpDrive() {
        this.warpDrive = "engaged";
        return this.warpDrive;
    }

    chargePhasers() {
        this.phasersCharge = "charged";
        return this.phasersCharge;
    }
}
