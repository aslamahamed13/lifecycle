import { Pipe, PipeTransform } from "@angular/core";


@Pipe ({
    name: "newpipe"
})

export class AppendPipe implements PipeTransform {
    transform(value: any, text: any) {
        console.log('pipe', text);
        return value + text;
    }
}