const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park 

  beforeEach(function () {
    park = new Park ('Greenacres', 100)
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Greenacres')
  });
  
  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 100)
  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(park.collectionOfDinosaurs.length, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    const dinosaur = new Dinosaur ('T-Rex','Carnivore', 1000)
    park.addDinosaur(dinosaur)

    dino = park.collectionOfDinosaurs.find( d => d.species == 'T-Rex')
    assert.strictEqual(dino, dinosaur)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    const d1 = new Dinosaur ('Indominos-Rex','Carnivore', 1500)
    park.collectionOfDinosaurs.push( d1 )
    const d2 = new Dinosaur ('Mosasaurus','Carnivore', 500)
    park.collectionOfDinosaurs.push( d2 )

    park.removeDinosaur(d1)

    dino = park.collectionOfDinosaurs.find( d => d.species == 'Indominos-Rex')
    assert.strictEqual(dino, undefined)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const d1 = new Dinosaur ('Indominos-Rex','Carnivore', 200)
    park.collectionOfDinosaurs.push( d1 )
    const d2 = new Dinosaur ('Mosasaurus','Carnivore', 1500)
    park.collectionOfDinosaurs.push( d2 ) 
    const d3 = new Dinosaur ('Brachiosaurus','Herbivore', 500)
    park.collectionOfDinosaurs.push( d3 )   
    
    dino = park.findMostVisitedDinosaur(park.collectionOfDinosaurs) 
    assert.strictEqual(dino, d2)  
  });

  it('should be able to find all dinosaurs of a particular species',function(){
    const d1 = new Dinosaur ('Indominos-Rex','Carnivore', 200)
    park.collectionOfDinosaurs.push( d1 )
    const d2 = new Dinosaur ('Mosasaurus','Carnivore', 1500)
    park.collectionOfDinosaurs.push( d2 ) 
    const d3 = new Dinosaur ('Brachiosaurus','Herbivore', 500)
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 
    
    species = park.findBySpecies(park.collectionOfDinosaurs, 'Brachiosaurus')
    assert.strictEqual( species.length, 3 )
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const d1 = new Dinosaur ('Indominos-Rex','Carnivore', 200)
    park.collectionOfDinosaurs.push( d1 )
    const d2 = new Dinosaur ('Mosasaurus','Carnivore', 1500)
    park.collectionOfDinosaurs.push( d2 ) 
    park.collectionOfDinosaurs.push( d2 )
    const d3 = new Dinosaur ('Brachiosaurus','Herbivore', 500)
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 )  
    
    revenue = park.revenuePerDay(park)
    assert.strictEqual( revenue , (200+1500+1500+500+500+500)*park.ticketPrice )
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const d1 = new Dinosaur ('Indominos-Rex','Carnivore', 200)
    park.collectionOfDinosaurs.push( d1 )
    const d2 = new Dinosaur ('Mosasaurus','Carnivore', 1500)
    park.collectionOfDinosaurs.push( d2 ) 
    park.collectionOfDinosaurs.push( d2 )
    const d3 = new Dinosaur ('Brachiosaurus','Herbivore', 500)
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 

    visitors = park.visitorsPerYear(park)
    assert.strictEqual( visitors, 4700*365)
  });


  it('should be able to calculate total revenue for one year', function(){
    const d1 = new Dinosaur ('Indominos-Rex','Carnivore', 200)
    park.collectionOfDinosaurs.push( d1 )
    const d2 = new Dinosaur ('Mosasaurus','Carnivore', 1500)
    park.collectionOfDinosaurs.push( d2 ) 
    park.collectionOfDinosaurs.push( d2 )
    const d3 = new Dinosaur ('Brachiosaurus','Herbivore', 500)
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 

    revenue = park.revenuePerYear(park)
    assert.strictEqual( revenue , 4700*park.ticketPrice*365 )
  });


  it('should be able to remove all dinosaurs of the same species', function(){
    const d1 = new Dinosaur ('Indominos-Rex','Carnivore', 200)
    park.collectionOfDinosaurs.push( d1 )
    const d2 = new Dinosaur ('Mosasaurus','Carnivore', 1500)
    park.collectionOfDinosaurs.push( d2 ) 
    park.collectionOfDinosaurs.push( d2 )
    const d3 = new Dinosaur ('Brachiosaurus','Herbivore', 500)
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 
    park.collectionOfDinosaurs.push( d3 ) 

    remainingDinos = park.deleteAllBySpecies(park.collectionOfDinosaurs, 'Mosasaurus')
    assert.strictEqual( remainingDinos.length, 4 )
  });


});
