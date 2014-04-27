//////////////////////////////////////////
// A first class function is a function that can be passed as a argument to another
// function.

// anonymousFunctionAssignedToAVariable is a function that is assigned to a variable
// The argument "howCalled" is text that is passed in describing how the
// function is called
var anonymousFunctionAssignedToAVariable = function(howCalled){
  console.log("anonymousFunctionAssignedToAVariable called " + howCalled);
}

// namedFunction is a named function.
// The argument "howCalled" is text that is passed in describing how the
// function is called.
function namedFunction(howCalled){
  console.log("namedFunction called " + howCalled);
}

// Call both functions. They both work.
anonymousFunctionAssignedToAVariable("as a function.");
namedFunction("as a function.");

// Expected console output:
// anonymousFunctionAssignedToAVariable called as a function.
// namedFunction called as a function.


// functionThatCallsOtherFunctions calls the other two functions
var functionThatCallsOtherFunctions = function() {
  anonymousFunctionAssignedToAVariable("from another function.");
  namedFunction("from another function.");
}

// functionThatCallsOtherFuctions successfully calls the two functions.
functionThatCallsOtherFunctions();
// Expected console output:
// anonymousFunctionAssignedToAVariable called from another function.
// namedFunction called from another function.


// functionReceivesAnotherFunctionAsArgument receives a function as an argument.
var functionReceivesAnotherFunctionAsArgument = function(receivedFunction) {
  receivedFunction("from a receivedFunction function.");
}

// Pass functionThatCallsOtherFunctions the anonymous function that is assigned to a variable.
functionReceivesAnotherFunctionAsArgument(anonymousFunctionAssignedToAVariable);

// Pass functionThatCallsOtherFunctions the named function.
functionReceivesAnotherFunctionAsArgument(namedFunction);

// Exected console output:
// anonymousFunctionAssignedToAVariable called from a receivedFunction function.
// namedFunction called from a receivedFunction function.


// Asynchronous functions are functions that run in the background and perform their
// action asynchronously to other operations. The other operations do not wait for the
// asynchronous function to complete. In other words, the program operation is not blocked
// by the asychronous function. Ajax calls are asynchronous by definition.





// Definition of a callback function



