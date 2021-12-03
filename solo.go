
package main

import (

	"fmt"
)

func main() {

	//var i int = 97
	//x, y := 10, 5

	/*var x int = 42
	var y float32 = 1.37
	var name string = "Plass"
	var online bool = true


	fmt.Println(x)
	fmt.Println(y)
	fmt.Println(name)
	fmt.Println(online)*/

	// Arithmetics

	//x := 15
	//y := 8

	/*res := x + y 
	fmt.Println(res)


	res2 := x - y 

	fmt.Println(res2)


	res3 := x * y 

	fmt.Println(res3)


	res4 := x / y 
	fmt.Println(res4)


	res5 := x%y 

	fmt.Println(res5)*/

	/*res := (x > 18) || x == 0
	fmt.Println(res)*/

	/*var input int 
	fmt.Scanln(&input)

	fmt.Println(x * input)*/
	/*if x > 18 {

		fmt.Println("allowed")
	} else {
		fmt.Println("Not allowed")
	}*/

	/*if x % 2 == 0 {
		fmt.Println("Even")
	} else {
		fmt.Println(" odd")
	}*/

	/*if x := 42; x > 18{
		fmt.Println("Allowed")
	} else {
		fmt.Println("Not allowed")
	}*/

	/*if x:= 8; x / 2 != 0 {
		fmt.Println(x-2)
	} else {
		fmt.Println(x)
	}*/

	x := 8 
	switch y:=x%2; y {
	case 0:
		x -= 1
	case 1:
		x += 1
	
	}
	fmt.Println(x)


}


