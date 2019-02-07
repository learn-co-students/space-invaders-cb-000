


class CrewMember {
    constructor(position) {
        //pilot = new CrewMember('Pilot');
        //defender = new CrewMember('Defender');
        //gunner = new CrewMember('Gunner');
        //tristan = new CrewMember('Pilot');
        //katie = new CrewMember('Gunner');
        // it("should return 'Looking for a Rig' if they aren't assigned to a ship", () => {
        //   expect(tristan.currentShip).to.match(/Looking for a Rig/i);
        // });
        //tristan = new CrewMember('Pilot');
        //jon = new CrewMember('Defender');
        //katie = new CrewMember('Gunner');
        //expect(tristan.position).to.eq('Pilot');
        //expect(jon.position).to.eq('Defender');
        //expect(katie.position).to.eq('Gunner');
        this.position = position;
        //pass in currentShip obj to constructor
        //expect(pilot.currentShip).to.be.an('object');
        //expect(pilot.currentShip).to.be.an.instanceOf(Spaceship);
        //expect(pilot.currentShip.constructor).to.be.a('function');
        this.currentShip = "Looking for a Rig"; //currentShipObj; 

    }
    // it("should return 'Looking for a Rig' if they aren't assigned to a ship", () => {
        //   expect(tristan.currentShip).to.match(/Looking for a Rig/i);
        // });
        //  it("should return 'had no effect' when the crew member tries to use their special ability when not assigned to a ship", () => {
         //  expect(tristan.engageWarpDrive()).to.match(/had no effect/i);
        //   expect(jon.setsInvisibility()).to.match(/had no effect/i);
        //   expect(katie.chargePhasers()).to.match(/had no effect/i);
        // });

        // it("should return 'Looking for a Rig' if they aren't assigned to a ship", () => {
        //   expect(tristan.currentShip).to.match(/Looking for a Rig/i);
        // });
        //  it("should return 'had no effect' when the crew member 
        //tries to use their special ability when not assigned to a ship", () => {
    engageWarpDrive() {
        if ((this.currentShip instanceof Spaceship) && (this.position === 'Defender')) {
            //only defenders can set invisibility
            return this.currentShip.engageWarpDrive();
        } else {
            return 'had no effect';
        }
    }

    // it("should return 'had no effect' when the crew member tries to use their special ability when not assigned to a ship", () => {
    //  expect(tristan.engageWarpDrive()).to.match(/had no effect/i);
    setsInvisibility() {
        if ((this.currentShip instanceof Spaceship) && (this.position === 'Defender')) {
            //only defenders can set invisibility
            return this.currentShip.setsInvisibility();
        } else {
            return 'had no effect';
        }
    }

    engageWarpDrive() {
        if ((this.currentShip instanceof Spaceship) && (this.position === 'Pilot')){
            return this.currentShip.engageWarpDrive();
        } else {
            return 'had no effect';
        }
    }
    //  it("should return 'had no effect' when the crew member tries to use their special ability when not assigned to a ship", () => {;
    //   expect(katie.chargePhasers()).to.match(/had no effect/i);
    chargePhasers() {
        if ((this.currentShip instanceof Spaceship) && (this.position === 'Gunner')) {
            return this.currentShip.chargePhasers();
        } else {
            return 'had no effect';
        }

    }
}
