export class Station {
  constructor(
    public idStacji: string,
    public stacja: string,
    public data_pomiaru: string,
    public godzina_pomiaru: string,
    public temperatura: string,
    public predkosc_wiatru: string,
    public kierunek_wiatru: string,
    public wilgotnosc_wzgledna: string,
    public suma_opadu: string,
    public cisnienie: string,
  ) {
  }
}

