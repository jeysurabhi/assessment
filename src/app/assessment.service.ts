import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  assesmentArray: any = [
    {
      name: 'Math Assesment',
      duration: '1:30',
    },
    {
      name: 'English Assesment',
      duration: '2:30',
    },
    {
      name: 'English Assesment',
      duration: '2:30',
    },
  ];
  constructor() {}
}
