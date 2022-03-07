import { Pipe, PipeTransform } from '@angular/core';
import { DocumentModel } from '../models/Document.model';
import _ from 'lodash';

@Pipe({
  name: 'sortDocumentsByArray',
})
export class SortDocumentsByArrayPipe implements PipeTransform {
  transform(documents: DocumentModel[], sortOrder: string[]): DocumentModel[] {
    const sortedArray = _.sortBy(documents, (document) => {
      return sortOrder.indexOf(document.id);
    });
    return sortedArray;
  }
}
