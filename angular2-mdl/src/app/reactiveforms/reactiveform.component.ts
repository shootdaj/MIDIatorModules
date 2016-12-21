import {
  Component,
  OnInit
} from '@angular/core';
import { flyInOutTrigger } from './../animations/flyInOutTrigger-animation';
import { hostConfig } from './../animations/flyInOutTrigger-animation';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AbstractDemoComponent } from './../abstract-demo.component';

const emailValidator = Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

@Component({
  moduleId: module.id,
  selector: 'reactive-form-demo',
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
  templateUrl: 'reactiveform.component.html'
})
export class ReactiveFormsDemo extends AbstractDemoComponent implements OnInit {

  public disableForm = false;
  public form: FormGroup;
  public firstName = new FormControl('');
  public lastName = new FormControl('', Validators.required);
  public email = new FormControl('', emailValidator);
  public email2 = new FormControl('', emailValidator);
  public breakfast = new FormControl('Continental');
  public toDrink = new FormControl('Tea');


  constructor(router: Router, route: ActivatedRoute, titleService: Title, private fb: FormBuilder) {
    super(router, route, titleService);
  }

  public ngOnInit() {
    super.ngOnInit();
    this.form = this.fb.group({
      'firstName':  this.firstName,
      'lastName':   this.lastName,
      'email':      this.email,
      'email2':     this.email2,
      'breakfast':  this.breakfast,
      'toDrink':    this.toDrink
    });
    this.form.valueChanges
      .map((formValues) => {
        formValues.firstName = formValues.firstName.toUpperCase();
        return formValues;
      })
      // .filter((formValues) => this.form.valid)
      .subscribe((formValues) => {
        console.log(`Model Driven Form valid: ${this.form.valid} value:`, JSON.stringify(formValues));
      });
  }

  public onSubmit() {
    console.log(this.form);
  }

  public onDisableForm(formDisabled: boolean) {
    if ( formDisabled ) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
