export class Item{
    id;
    Name;
    Description;
    Count;
    UnitPrice;
    Unit;
    Price;
    ImageName;
    isDone;
    constructor(data){
        this.id = data.id;
        this.Name = data.Name;
        this.Description = data.Description;
        this.Count = data.Count;
        this.UnitPrice = data.UnitPrice;
        this.Unit = data.Unit;
        this.Price = data.Price;
        this.ImageName = `http://localhost:8080/files/uploads/${data.ImageName}`
        this.isDone = data.isDone;
    }
}