'RADIX NINE BY VP7O[NIHFEX]
S$ = "012345678"
I% = 49
WHILE 0 < I%
D$ = D$ + MID$(S$, ((I% MOD 9) + 1), 1)
I% = FIX(I%/9)
LOOP
B$ = ""
FOR I = 1 TO LEN(D$)
B$ = MID$(D$, I, 1) + B$
NEXT
PRINT B$
