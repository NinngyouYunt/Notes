// This is a mock fetch function that simulates fetching information from other services and return a Promise
// Promise should be deal with async/await
function fetch(time, err) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (err)
        reject("Too long");
      else 
        resolve("Just good");
    }, time);
  });
  return promise;
}

// This async function use try/catch to process response from fetch
async function tryCatchExample(time, err) { 
  try {
    const result = await fetch(time, err);
    console.log(`Success with try: ${result}`);
  } catch (err) {
    console.log(`Error with catch: ${err}`);
  }
  console.log("This is after try/catch, and appears after await finishes");
}

// This async function use then/catch to process response from fetch
async function thenCatchExample(time, err) { 
  const result = await fetch(time, err).then(res => console.log(`Success with then: ${res}`)).catch(err =>  console.log(`Error with catch: ${err}`));
  console.log("This is after the then/catch, and appears after await finishes");
}

// This function is to show the delay (await) in async functions (comes from fetch)
function run1(time, example, err) {
  if (example == 1)
    tryCatchExample(time, err);
  else
    thenCatchExample(time, err);
  console.log("This is end of run and it appears immediately");
}


//-------------------------------------------------------------------------------------------------------------------------------------------


// This is a mock fetch function that uses a callback(err, response)

function fetch_callBack(time, err, callback) {
  setTimeout(() => {
    if (err) callback("Too long", null);
    else callback(null, "Just good")
  }, time);
}

// This is callback used to process response from the fetch
function callback(err, res) {
  if (err) return console.log(`Callback receives an error ${err}`);
  return console.log(`Callback receives a response ${res}`);
}

// This function is to show delay for the delay in fetch 
function run2(time, err) {
  fetch_callBack(time, err, callback);
  console.log("This is end of run and is appears immediately");
}
