import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private auth : Auth,private router:Router ,private fstore: Firestore) { }
 
 
 
  addData(data:any){
    const datacollection = collection(this.fstore, 'Suggestions');
    addDoc(datacollection, data).then(res=>{
      console.log(res); 
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Suggestion has been sent successfully!',
        showConfirmButton: false,
        timer: 1500
      })
    }).catch(err=>{
      alert(err);
    })
  }
 

  login(creds: any) {
    signInWithEmailAndPassword(this.auth, creds.email, creds.password)
      .then(() => {
        Swal.fire(
          'Login Success!',
          'Welcome to StreamSpot!',
          'success',
         
        )
        this.router.navigate(['/home'])
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: (err.message),
        })
        // alert(err.message)
      })
  }
  
  
  signup(data: any) {
    
  
    createUserWithEmailAndPassword(this.auth, data.email, data.password)
      .then(() => {
        Swal.fire(
          'Registration Success!',
          'Now Login to your account!',
          'success'
        )
    this.router.navigate(['/login'])
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed!',
          text: (err.message),
        })
        // alert(err.message)
      })
  }
  
  logout() {
      signOut(this.auth)
        .then(() => {
          Swal.fire(
            'Successfully Logged out!',
            '',
            'success'
          )
          this.router.navigate([''])
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
}
