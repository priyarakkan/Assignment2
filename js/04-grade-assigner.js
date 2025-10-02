// Ask the user for a number between 1 and 100
    let score = Number(prompt("Enter a number between 1 and 100:"));

    // Validate input
    if (isNaN(score) || score < 1 || score > 100) {
      document.write("Error: Only numbers between 1 and 100 are accepted.");
    } else {
      switch (true) {
        case (score < 60):
          document.write("You received an F");
          break;
        case (score >= 60 && score <= 69):
          document.write("You received a D");
          break;
        case (score >= 70 && score <= 79):
          document.write("You received a C");
          break;
        case (score >= 80 && score <= 89):
          document.write("You received a B");
          break;
        case (score >= 90 && score <= 100):
          document.write("You received an A");
          break;
        default:
          document.write("Unexpected error.");
      }
    }