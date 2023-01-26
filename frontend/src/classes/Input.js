export class Input {
    name;
    title;
    type;
    placeholder;
    required;
    groupinput;
    consturctor(data){
        this.name = data.name;
        this.title = data.title;
        this.type = data.type;
        this.placeholder = data.placeholder;
        this.required = data.required;
        this.groupinput = data.groupinput;
    }
}