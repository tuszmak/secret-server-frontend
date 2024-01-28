interface Secret{
    secret: string
}
interface SecretFetchRequest{
    hash: string
}

type SecretCreationData = {
    secret: string;
    numberOfVisits: number;
    expiryDate: string;
  };