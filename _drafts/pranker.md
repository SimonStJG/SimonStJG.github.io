---
layout: post
title:  "TODO"
date:   2014-10-01
tags: making
thumbnail: maths-thumbnail.jpg
---

[comment]: # SIM details:
[comment]: #giffgaff username / password
[comment]: # 
[comment]: #  flimflamarduino
[comment]: #  Flimflam!
[comment]: #  Simon.StJG+arduino@gmail.com
[comment]: #  07716946690

Add a description.

## Items ##

[Arduino Daemilanove](https://www.arduino.cc/en/Main/ArduinoBoardDuemilanove)

Cheap rip off of the [Seeedstudio GPRS shield v1.0](http://wiki.seeed.cc/GPRS_Shield_v1.0/) - the price was a bit too good to be true.  Differences I've discovered so far: 
* Software / hardware serial switch is backwards.
* Seems to only support a baud rates $$( \le 4800 $$).
* They moved the power pin from 9 to 6.  
All this sounds so matter of fact written here, but each one caused me a lot of irritation to discover!  

[Adafruit's Audio FX Mini](https://www.adafruit.com/product/2341) 

Along with misc LEDs, power supply, etc.

## Getting started ##

The chip powering the GPRS shield is a SIM900, which speaks an incredible languages called the [Hayes Command Set](https://en.wikipedia.org/wiki/Hayes_command_set), well technically an extension of Hayes, since that only supported a few simple commands.  You communicate via Serial in a master/slave fashion, where the modem is the slave.  For example, here we set up a call:
 TODO Add this in
Every command begins with AT (for "Attention"!) and then the modem responds, often with OK.

Issues when the modem sends information back to the master, eg. DTMF.

Something about a profusion of standards.

None of the existing libraries handle information being sent back well, but it's too much effort to write your own, would love to know how modern day mobile phones handle this.  Apparently they do have modems in them which speak this languages!  See [this article](http://www.osnews.com/story/27416/The_second_operating_system_hiding_in_every_mobile_phone) pointing out some of the interesting security implications of this.

## Fun with DTMF ##

Issues with the libraries and not detecting DTMF very well.

Here is the reference https://www.espruino.com/datasheets/SIM900_AT.pdf

Problems with other peoples libraries:
 - Not detecting echo, so that if someone rings you, it interferes with the response to the previous command.

 - How to detect DTMF http://www.raviyp.com/embedded/191-sim900-dtmf-commands
    AT+DDET=1

      Then you get +DTMF:1 etc when you press a key!!

    ATH 

 - I think we're done!

 ----------------

## Code ## 

There is no point in a circuit diagram, as all the boards just connect to each other directly, as you can see from the image (TODO link to image)  

The code is available [On Github](https://github.com/SimonStJG/magic-phone).  


## Pictures from making it ##


Add some of these.



-----

Can't use both software serials because they interfere somehow..

So must use h/w.  Makes debug a lot of fun.

Outrageously, the GPRS lib was print to the HardwareSerial which weren't disabled properly when debugging was switched off.  This caused sporadic errors with the sound board when the GPRS shield printed debugging  information into the sound boards input.  

This article is in danger of becoming a list of ways in which this project wound me up.


## Making of the plinth? ##

Could drill all the wires into the sides?