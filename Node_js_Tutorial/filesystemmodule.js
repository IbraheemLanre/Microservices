const fs = require('fs');
// Create a file
/* fs.writeFile('example.txt', "this is an example", (err) => {
    if(err) {
        console.log(err);
    }else {
        console.log("File created successfully");
        fs.readFile('example.txt', 'utf-8', (err,file) => {
            if(err) {
                console.log(err);
            }else{
                console.log(file);
            }
        });
    }
}); */

// Rename a file
/* fs.rename('example.txt', 'example2.txt', (err) => {
    if(err) {
        console.log(err);
    }else{
        console.log('File renamed');
    }

}); */

// Append a file
/* fs.appendFile('example2.txt', 'some new data', (err) => {
    if(err) {
        console.log(err);
    }else {
        console.log('New data added to the file.')
    }
}); */

// Deleting a file
/* fs.unlink('example2.txt', (err) => {
    if(err) {
        console.log(err);
    }else {
        console.log('file deleted.')
    }
}); */

// Creating a folder 
/* fs.mkdir('File System Module(FSM)', err => {
    if(err) {
        console.log(err);
    }else {
        fs.writeFile('./File System Module(FSM)/example.txt', '123', err => {
            if(err) {
                console.log(err);
            }else {
                console.log('File created.')
            }
        })
    }
}); */

// Deleting a folder
/* fs.rmdir('File System Module(FSM)', err => {
    if(err) {
        console.log(err);
    }else {
        console.log('File deleted.');
    }
});
 */

 // Deleting a Folder with its content
 /* fs.unlink('./File System Module(FSM)/example.txt', err => {
     if(err) {
         console.log(err);
     }else {
         fs.rmdir('File System Module(FSM)', err => {
            if(err) {
                console.log(err);
            }else{
                console.log('Folder and its contents deleted.')
            }
         });
     }
 }); */

 // Deleting a Folder and its multiple contents
 fs.readdir('Folder', (err, files) => {
     if(err) {
         console.log(err);
     }else {
         
         for(let file of files) {
             fs.unlink('./Folder/' + file, err => {
                 if(err) {
                     console.log(err);
                 }else{
                     fs.rmdir('File System Module(FSM)', err => {
            if(err) {
                console.log(err);
            }else{
                console.log('Folder and its contents deleted.')
            }
         });
                 }
             });
         }
     }

 });
