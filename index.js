/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


 //calcultes new distance
 const d2 = d + (vel*time/10000)
 if (d2<0){
  throw new Error("New distance cannot be negative")
 }
 console.log(`Corrected New Distance: ${d2} km`);


//calculates remaining fuel
 const rf = fbr*time 
 if (rf<0){
  throw new Error("Remaining fuel cannot be negative")
 }
 console.log(`Corrected Remaining Fuel: ${rf} kg`);

//calculates new velocity 
 const vel2 = calcNewVel(acc, vel, time) 
console.log(`Corrected New Velocity: ${vel2} km/h`);

// velocity based on acceleration
calcNewVel = (vel, acc, time) => {
  if (acc.units !== vel.units.slice(0,-2)){
    throw new Error("Acceleration and Velocity must be in the same units")
  }
  const timeConverted = time.value * time.units.slice(-1)
  const vel2 =vel.value + (acc.value* timeConverted)
}










