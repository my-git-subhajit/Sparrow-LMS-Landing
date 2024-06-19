import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private http:HttpClient,private toastr: ToastrService) { }
  signUpForm: FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
  } 

  signUp(){
    if(this.signUpForm.valid){
        this.http.post('http://localhost:3000/student/register', this.signUpForm.value).subscribe({
          next:(data:any)=>{
            console.log(data);
            this.toastr.success(data.message);
          },
          error:(err:any)=>{
            console.log("EROR",err);
            this.toastr.error(err.message);
          }
        })
    }
    else{
      this.signUpForm.markAllAsTouched();
    }
  }

}
