type SecretCreationData = {
  secret: string;
  numberOfVisits: number;
  expiryDate: string;
};

export default function dataChecker(data: SecretCreationData) {
  let dateStringAsDate = Date.parse(data.expiryDate);
  if (dateStringAsDate < Date.now()) {
    return "The given date has already expired!";
  } else if (isNaN(dateStringAsDate)) {
    return "This date is too far in the future!";
  }
  else if(data.numberOfVisits > Math.pow(2,31) - 1){
    return "Number of visits too large!"
  }
  else return "Cool!"
}
