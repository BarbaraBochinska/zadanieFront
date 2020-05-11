export class Station {
  constructor(
    public idStacji: string,
    public stacja: string,
    public dataPomiaru: string,
    public godzinaPomiaru: string,
    public temperatura: string,
    public predkoscWiatru: string,
    public kierunekWiatru: string,
    public wilgotnoscWzgledna: string,
    public sumaOpadu: string,
    public cisnienie: string,
  ) {
  }
}

