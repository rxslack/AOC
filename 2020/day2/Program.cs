using System;

namespace d2
{
    class Program
    {
        static void Main(string[] args)
        {
            // string[] lines = System.IO.File.ReadAllLines(@"/home/rxchxelsx/AOC2020/d2/testinput.txt");
            string[] lines = System.IO.File.ReadAllLines(@"/home/rxchxelsx/AOC2020/d2/input.txt");
            Password[] passwords = new Password[lines.Length];

            for (int i = 0; i < passwords.Length; i++){
                passwords[i] = new Password(lines[i]);
            }

            int totalValid = 0;
            foreach (Password password in passwords){
                // Console.WriteLine(password.password);
                // Console.WriteLine(password.character);
                // Console.WriteLine(password.min);
                // Console.WriteLine(password.max);

                if (password.isValid()){
                    totalValid++;
                }
            }

            Console.WriteLine(totalValid);
        }
    }

    class Password{

        public int min;
        public int max;       
        public char character;
        public string password;
        // bool valid;

        public Password(string passwordRule){
            //password = passwordRule;
            string[] ruleParts = passwordRule.Split(" ");
            password = ruleParts[2];
            character = ruleParts[1][0];
            string[] minMaxs = ruleParts[0].Split("-");
            min = int.Parse(minMaxs[0]);
            max = int.Parse(minMaxs[1]);
        }
        public bool isValid() {
            // int total = 0;
            // for (int i = 0; i < password.Length; i++){
            //     if (password[i] == character){
            //         total++;
            //     }
            // }
            // return (total <= max && total >= min);

            return((password[min-1] == character &&  password[max-1] != character) ||(password[max-1] == character &&  password[min-1] != character));
            // return (total <= max || total >= min);
        }
    } 
            //class
            //min
            //max
            //character
            //password
            //isvalid?
            
}
