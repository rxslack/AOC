#lets try every single program[1]/[2] value possible, up to 100
for j in range(0, 100, 1):
    for k in range(0, 100, 1):
        program = [
        1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 
        1, 19, 1, 19, 10, 23, 2, 13, 23, 27, 1, 5, 27, 31, 2, 6, 31, 35, 1, 6, 35, 
        39, 2, 39, 9, 43, 1, 5, 43, 47, 1, 13, 47, 51, 1, 10, 51, 55, 2, 55, 10, 59, 2, 
        10, 59, 63, 1, 9, 63, 67, 2, 67, 13, 71, 1, 71, 6, 75, 2, 6, 75, 79, 1, 5, 79, 83, 
        2, 83, 9, 87, 1, 6, 87, 91, 2, 91, 6, 95, 1, 95, 6, 99, 2, 99, 13, 103, 1, 6, 103, 
        107, 1, 2, 107, 111, 1, 111, 9, 0, 99, 2, 14, 0, 0]
        #lets replace program[1]/[2]every single time
        program[1] = j
        program[2] = k
        #we've seen this before
        proglen = len(program)
        for i in range(0, proglen, 4):
            a = program[i]
            b = program[i + 1]
            c = program[i + 2]
            d = program[i + 3]
            #print(a, b, c, d)
            if a == 1:
                program[d] = program[b] + program[c]

            elif a == 2:
                program[d] = program[b] * program[c]
                
            elif a == 99:
                #just testing its working for every single one
                print(program [0],program[1], program[2])
                #wait, stop if it gives me the program[0] that i want
                if program[0] == 19690720:
                    print("The winning numbers are: ", program[1], program[2])
                    print("Solution to problem: ", 100 * program[1] + program[2])
                    exit ( )
                break