import { Component, Input } from '@angular/core';

import { Address } from '@model';
import { formContainerViewProvider } from '@core';
import { FORMS } from '@imports';
import { toSelectOptions } from '@app/widgets';
import { UsStates } from '@model';

const states = toSelectOptions(UsStates, 'name', 'abbreviation');

@Component({
  selector: 'app-address-sub-form',
  standalone: true,
  templateUrl: './address-sub-form.component.html',
  styleUrls: ['./address-sub-form.component.scss'],
  viewProviders: [formContainerViewProvider],
  imports: [FORMS],
})
export class AddressSubFormComponent {
  @Input() vm?: Address

  /** Name for the formGroup when added to the parent form. Defaults to 'address'. */
  @Input('name') ngModelGroupName = 'address';

  states = states;
}