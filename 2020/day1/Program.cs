using System;

namespace d1p1
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] lines = System.IO.File.ReadAllLines(@"/home/rxchxelsx/AOC2020/d1p1/input.txt");

            int[] numbers = new int[lines.Length];

            for (int i = 0; i < numbers.Length; i++){
                numbers[i] = int.Parse(lines[i]);
            }

            for (int idx = 0; idx<numbers.Length; idx++){
                for (int indx = 0; indx < numbers.Length; indx++){
                    for (int index=0; index<numbers.Length;index++){
                        if (numbers[idx]+numbers[indx]+numbers[index]==2020){
                            Console.WriteLine(numbers[idx]*numbers[indx]*numbers[index]);
                        }                    
                    }
                }
            }
        }
    }
}
