class CrewMember {
    constructor(position) {
    	this.position = position;
    	this.currentShip = "Looking for a Rig";
    }

    engageWarpDrive() {
    	if(this.currentShip === "Looking for a Rig"){
    		return('had no effect')
    	}else if(this.position === 'Pilot'){
    		this.currentShip.warpDrive = "engaged!"
    	}
    }

    setsInvisibility(){
        if(this.currentShip === "Looking for a Rig"){
    		return('had no effect')
    	}else if(this.position === "Defender"){
    		this.currentShip.cloaked = true
    	}
    }

    chargePhasers(){
        if(this.currentShip === "Looking for a Rig"){
    		return('had no effect')
    	}else if(this.position === 'Gunner'){
    		this.currentShip.phasersCharge = "charged!"
    	}
    }
}

class Spaceship {
	constructor(name, crew, phasers, shields){
        this.name = name;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = "disengaged";
        this.crew = crew;
        this.docked = this.hasCrew();
        this.phasersCharge = "uncharged"

        if(!this.docked){
        	this.registerCrew();
        }
	}

    hasCrew(){
        if(Array.isArray(this.crew)){
            if(this.crew.length == 0){
            	return true
            }else{
            	return false
            }
        }else{
        	return true
        }
    }

	registerCrew(){
		for(var i = 0; i< this.crew.length; i++){
			this.crew[i].currentShip = this
		}
	}
}