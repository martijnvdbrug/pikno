import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'hostname'})
export class HostnamePipe implements PipeTransform {
  transform(url: string): string {
    const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    return matches && matches[1];
  }
}
