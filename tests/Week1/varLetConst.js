const browsername ="Chrome"

let browserVersion

function getBrowserVersion(browsername)

{

if (browsername=="Chrome")

{

console.log("Selected browser is "+browsername)

browserVersion =1.0

console.log("Selected browser is "+browsername+" and the version is :"+browserVersion)

}


else{

console.log("Selcted browser is not Chrome")
}


}

getBrowserVersion("Chrome")

console.log("Selcted browser version is:"+ browserVersion)

browsername="Firefox"
getBrowserVersion(browsername