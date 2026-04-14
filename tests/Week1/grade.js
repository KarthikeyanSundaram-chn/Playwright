function grade(mark) 
{

switch (true)

{

case (mark>80):

return "A"

case (mark>60):

return "B"

case (mark>50):

return "B"

default:

return "D"

}

}
console.log("Grade: "+ grade(85))
console.log("Grade: "+ grade(2))