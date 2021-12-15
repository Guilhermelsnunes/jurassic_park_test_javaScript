const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
    }

//add/remove  here 

    Park.prototype.addDinosaur = function(dinosaur){
        this.collectionOfDinosaurs.push(dinosaur)
    }

    Park.prototype.removeDinosaur = function(dinosaur){
        dino = this.collectionOfDinosaurs.find(d => d.species == dinosaur.species)
        if (dino != undefined){
            this.collectionOfDinosaurs.splice(dino)
        } 
    }
    
    Park.prototype.findMostVisitedDinosaur = function(collectionOfDinosaurs){
        sortedList = collectionOfDinosaurs.sort( (a,b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay  )
        return sortedList[0]
    }    


    Park.prototype.findBySpecies = function(collectionOfDinosaurs, species ){
        return collectionOfDinosaurs.filter(d => d.species == species)
    }

    Park.prototype.revenuePerDay = function( park ) {
        visitors = 0
        for (var dino of park.collectionOfDinosaurs) {
            visitors += dino.guestsAttractedPerDay
        }
        return visitors * park.ticketPrice
    }

    Park.prototype.visitorsPerYear = function( park ){
        visitors = 0
        for (var element of park.collectionOfDinosaurs) {
            visitors += element.guestsAttractedPerDay
        }
        return visitors * 365
    } 

    Park.prototype.revenuePerYear = function( park ) {
        visitors = 0
        for (var dino of park.collectionOfDinosaurs) {
            visitors += dino.guestsAttractedPerDay
        }
        return visitors * park.ticketPrice * 365
    }


    Park.prototype.deleteAllBySpecies = function(collectionOfDinosaurs, species){
        for (var i = collectionOfDinosaurs.length; i-- ;){
            if ( collectionOfDinosaurs[i].species == species) {
                collectionOfDinosaurs.splice(i,1)
            }    
        }
        return collectionOfDinosaurs
    }

    module.exports = Park;