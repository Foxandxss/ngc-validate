import { Component, Input } from '@angular/core';

import { Company } from '@model';
import { formContainerViewProvider } from '@core';
import { FORMS } from '@imports';

@Component({
  selector: 'app-company-general-sub-form',
  standalone: true,
  template: `
    <div *ngIf="vm">
      <div class="row">
        <input-text field="legalName" placeholder="Legal Name" class="col full-width"></input-text>
      </div>
    </div>
  `,
  styleUrls: ['./company-form.component.scss'],
  viewProviders: [formContainerViewProvider],
  imports: [FORMS]
})
export class CompanyGeneralFormComponent {
  @Input() vm?: Partial<Company>;
}