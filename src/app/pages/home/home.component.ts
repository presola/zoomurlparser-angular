import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public urlForm: FormGroup;
  public errorMessage: string;
  public zoomResponse: string;
  public loading: boolean;

  constructor(private apiService: ApiService) {
    this.urlForm = new FormGroup({
      url: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.urlForm.valid) {
      this.loading = true;
      this.apiService.getZoomDetails(this.urlForm.value.url).subscribe({
        next: data => {
          this.zoomResponse = JSON.stringify(data);
          this.loading = false;
        },
        error: error => {
          this.errorMessage = error.message;
          this.loading = false;
        }
      });
    }
  }
}
