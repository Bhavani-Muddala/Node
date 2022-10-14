// File system module reading the data in calc.js file

// calling file system module

var fs=require('fs')

// reading the content in the file
fs.readFile('calc.js','utf-8',function(err,data){
  if(err)
  {
    console.log(err)
  }
  else
  {
    console.log(data) 
  }
})

// writing the content to the file

// if the file is already there it will over write the content of the file
// if the file is not there it will write the data into the fie
// if we want to append the data to the file we have append file  operation in file system


fs.writeFile('sample.js','console.log("hi hello")',function(err)
{
  if(err) throw err;
  console.log("Writing data to the new file is Done...!")
});

fs.appendFile('sample.js',' console.log("World no 1 is skjasf")', (err) => {
    
    if (err) {
          console.log(err);
        }
        else {
    console.log("Appending the data to the file is done...!")
        }
})


// deleting the file

fs.unlink('exam.js',function(err)
{
    console.log('Hey successfully deleted the file')
})

// renaming a file

fs.rename('sample.js','demo.js',function(err)
{
  if(err) throw err;
  console.log('File renamed');
});