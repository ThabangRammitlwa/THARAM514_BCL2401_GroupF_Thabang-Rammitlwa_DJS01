### DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

#### Challenge Overview

The program performs the following calculations:

Calculate New Distance: This function modifies the distance covered by taking into account the starting speed, acceleration, and time.
Verify the New Distance: Ascertain that the computed new distance is not negative. An error is raised if the result is negative.
Compute Remaining Fuel: This method determines how much fuel is left after accounting for fuel burn rate and beginning fuel quantity.
Check Remaining Fuel: Ensure that there is no negative fuel remaining. An error is raised if the result is negative.
Compute Corrected New Velocity: This method determines the new velocity by taking the specified acceleration and time into account.
Verify Acceleration: Make sure there is no negative acceleration. An error is raised if the result is negative.

### Personal Comments :
How i checked that error message is thrown, I used negative sign, checked values by making them negative .eg const d2 = d + (-vel*(time/3600)); this will throw an error message.

I choose not to use probs and sticked to parameters, as I feel I still need more practice on probs, so I used what understand better and strived to meeting use stories. I may know the difference between the 2 and how they work, but I am not confident enough to put in use.

To make sure I met user stories, I used both the terminal and live server inspect to check .


### Overall

I'm not a maths fan , it was a shocker to realise that it's coming back .



##### Expected Corrected Results

- **New Velocity**: Approximately 48880 km/h after correction.
- **New Distance**: Approximately 10000 km after correction.
- **Remaining Fuel**: Approximately 3,200 kg after correction.

