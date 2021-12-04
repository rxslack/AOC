#list of possible passwords
passwords = range(402328, 864247)
phase_1 = [ ]

for i in passwords:
    nu_string = str(i)
    a = nu_string[0]
    b = nu_string[1]
    c = nu_string[2]
    d = nu_string[3]
    e = nu_string[4]
    f = nu_string[5]

    if a <= b and b <= c and c <= d and d <= e and e <= f:
        if a == b or b == c or c == d or d == e or e == f:
        # print(nu_string)
            phase_1.append(nu_string)
      
print(len(phase_1))

    
        
        

    

