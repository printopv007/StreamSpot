import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore,collectionData, collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private auth : Auth,private router:Router ,private fstore: Firestore) { }
  addData(data:any){
    const datacollection = collection(this.fstore, 'UserData');
    addDoc(datacollection, data).then(res=>{
      console.log(res); 
      alert("Success");
    }).catch(err=>{
      console.log(err);
    })
  }
  getData(){
    const datacollection = collection(this.fstore, 'UserData');
    collectionData(datacollection).subscribe(data=>{
      // console.log(data);
      
    })
  }

  login(creds: any) {
    signInWithEmailAndPassword(this.auth, creds.email, creds.password)
      .then(() => {
        alert('Login Success')
        this.router.navigate(['/home'])
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  
  
  signup(data: any) {
    
  
    createUserWithEmailAndPassword(this.auth, data.email, data.password)
      .then(() => {
    alert('success')
    this.router.navigate(['/home'])
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  
  logout() {
      signOut(this.auth)
        .then(() => {
          this.router.navigate([''])
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
}
