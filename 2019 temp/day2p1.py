# trying to work out how to do day 2
# theres a long list
# and a for loop somewhere

#original data
program = [
    1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 
    1, 19, 1, 19, 10, 23, 2, 13, 23, 27, 1, 5, 27, 31, 2, 6, 31, 35, 1, 6, 35, 
    39, 2, 39, 9, 43, 1, 5, 43, 47, 1, 13, 47, 51, 1, 10, 51, 55, 2, 55, 10, 59, 2, 
    10, 59, 63, 1, 9, 63, 67, 2, 67, 13, 71, 1, 71, 6, 75, 2, 6, 75, 79, 1, 5, 79, 83, 
    2, 83, 9, 87, 1, 6, 87, 91, 2, 91, 6, 95, 1, 95, 6, 99, 2, 99, 13, 103, 1, 6, 103, 
    107, 1, 2, 107, 111, 1, 111, 9, 0, 99, 2, 14, 0, 0]
#working out the length of the program to know how many groups of 4 are in my program (proglen in for loop)
proglen = len(program)
print(proglen)
#grouping in 4s, and finding each indiviual bit of the group of 4
for i in range(0, proglen, 4):
    #postion a is the Opcode (+ or x)
    a = program[i]
    #positions b and c are the places that are doing the above bit
    b = program[i + 1]
    c = program[i + 2]
    #d is the position that is being replace by the value of b and c
    d = program[i + 3]
    #print(a, b, c, d)
    #doing the addition
    if a == 1:
        program[d] = program[b] + program[c]
    #doing the multi
    elif a == 2:
        program[d] = program[b] * program[c]
    #99 end the program for some reason
    elif a == 99:
        break
    
#prints solution to problem
print(program[0])