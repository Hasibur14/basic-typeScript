{

    let anything :any ;
    anything = "Next Level Web development";
    anything = 5645156;
    (anything as number).toFixed;



    

    const kgToGm = (value:string | number) : string | number | undefined => {
        if(typeof value === "string"){
            const convertedValue = parseFloat(value) * 10000
            return `The converted Value is : ${convertedValue}`
         }
        else if (typeof value === "number")
            return value * 10000
    }

      const result1 = kgToGm(5555) as number   // here as means this type are sure to number
      const result2 = kgToGm("5555") as string  







}