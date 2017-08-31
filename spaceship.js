// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
 
//   sayHello() {
//     console.log("Hello, my name is "+ this.name);
//   }
// }
 
// var sarah = new User("Sarah", "sarah@aol.com");
// sarah.sayHello();

class CrewMember {
	constructor(position) {
		this.position = position
		if (this.currentShip != "Looking for a Rig") {
			this.currentShip = "Looking for a Rig"
		}
	}

	engageWarpDrive() {
		if (this.currentShip == "Looking for a Rig") {
			return 'had no effect'
		} else if (this.position != 'Pilot') {
			return 'Only Pilots Can Warp!'
		} else {
			this.currentShip.warpDrive = 'engaged!'
		}
	}

	setsInvisibility() {
		if (this.currentShip == "Looking for a Rig") {
			return "had no effect"
		} else if (this.position != 'Defender') {
			return 'Only Defenders Can Turn Invisible'
		} else {
			this.currentShip.cloaked = true
		}
	}

	chargePhasers() {
		if (this.currentShip == "Looking for a Rig") {
			return 'had no effect'
		} else if (this.position != 'Gunner') {
			return 'Only Gunners Can Charge Phasers!'
		} else {
			this.currentShip.phasersCharge = "charged!"
		}
	}

}

class Spaceship {
	constructor(name, crew, phasers,shields) {
		this.name = name
		this.crew = crew
		if (this.crew != false) {
			this.crew.forEach(item => {
	  		item.currentShip = this
			})
		}
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		if (this.crew == false) {
			this.docked = true
		} else {
			this.docked = false
		}
		this.phasersCharge = 'uncharged'
	}
}

