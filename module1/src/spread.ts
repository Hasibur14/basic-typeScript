//Spread operator


//for Array
const friend1:string[] = ['Hasib', 'Mizan']
const friend2 :string[] = ['Nakib', 'Sakib']

friend1.push(...friend2)


//for object 

const city1 = {
   Bangladesh : 'Dhaka',
   India : 'Delhi',
   Pakistan : 'Islamabad'
}
const city2 = {
    Chine : 'Beijing',
    England : 'London',
 }

 const cityList ={
    ...city1,
    ...city2
 } 