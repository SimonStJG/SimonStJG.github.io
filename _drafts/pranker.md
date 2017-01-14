---
layout: post
title:  "Pranker"
date:   2014-10-01
tags: making
thumbnail: maths-thumbnail.jpg
---

SIM details:
giffgaff username / password
  
  flimflamarduino
  Flimflam!
  Simon.StJG+arduino@gmail.com
  07716946690


Daemilanove https://www.arduino.cc/en/Main/ArduinoBoardDuemilanove

Cheap chinese rip of of this http://wiki.seeed.cc/GPRS_Shield_v1.0/
  Differences: 
     - software / hardware serial switch is backwards.
     - Seems to only support a baud rate of 4800.

Why are they wiring it up so weirdly here?  http://www.hobbyist.co.nz/?q=arduino-gsm-module

## Detecting the baud rate ##

```
/**
 * Discover baud rate of GPRS Modem, by trying all the standard baud rates in turn.
 * 
 * Listen on the Arduino hardware UART at 19200 bps 8-N-1.
 */
#include <SoftwareSerial.h>

const int BAUD_RATES[] = {600, 1200, 2400, 4800, 9600, 14400, 19200};

SoftwareSerial GPRS(7, 8);
unsigned char buffer[64]; 
int count=0; 

void setup() {
    Serial.begin(19200);

    for (int baud_rate: BAUD_RATES) {
        Serial.print("testing at");
        Serial.print(baud_rate);
        Serial.print("\n");
        
        GPRS.begin(baud_rate);  
        GPRS.write("AT\r\n");

        delay(3000);
        read_from_gprs();
        delay(3000);
        read_from_gprs();
        
    }
}

void loop() {}

void read_from_gprs() {
   if (GPRS.available()) { 
        while(GPRS.available()) { 
            buffer[count++] = GPRS.read();  
            if(count == 64) break;
        }
        Serial.write(buffer,count);
        count = 0;                     
    }
}

```

Which prints 
```
testing at600
B�testing at1200
k�testing at2400
!�H�testing at4800
AT

OK
testing at9600
����testing at14400

```
So it only supports 4800.

This actually took be ages, because I missed that you have to use windows style line endings, causing AT to be echoed at 4800, but nothing else.)

## First communications test ##

Fairly minimal library is available here: https://github.com/Seeed-Studio/GPRS_SIM900

With it, I can read and send text messages.

## TODO ##

http://www.on-time.com/ddj0011.htm


Here is the reference https://www.espruino.com/datasheets/SIM900_AT.pdf

Problems with other peoples libraries:
 - Not detecting echo, so that if someone rings you, it interferes with the response to the previous command.

 - How to detect DTMF http://www.raviyp.com/embedded/191-sim900-dtmf-commands
    AT+DDET=1

      Then you get +DTMF:1 etc when you press a key!!

    ATH 

 - I think we're done!



 ----------------

 Other weird shit
 They moved the power pin from 9 to 6.  Sounds so matter of fact written here.  I was very angry when I figured that one out.


 ----------------

 Something something why doesn't power work properly/

 ----------------

  The arduino has 14 pins, of which 
  2 (0,1) for hardware serial, used for debugging via USB.
  3 (6,7,8) - taken by the shield.
  2 others for the Status LEDs
  Which leaves 7 for triggering the sounds, which isn't enough :|

  So I used a CMOS 4501 multiplexer, which allows you to address 8 of the triggers with 4 output pins.

-----------------